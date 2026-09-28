import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

function isColorToken(node) {
	return Boolean(node && typeof node === 'object' && node.$type === 'color' && node.$value)
}

function formatColor(value) {
	const alpha = value.alpha ?? 1

	if (alpha >= 1 - 1e-4) {
		return String(value.hex || '#000000').toUpperCase()
	}

	const [red, green, blue] = value.components.map((channel) => Math.round(channel * 255))
	const roundedAlpha = Number((Math.round(alpha * 100) / 100).toFixed(2))

	return `rgba(${red}, ${green}, ${blue}, ${roundedAlpha})`
}

function toCssVariable(name) {
	const normalized = name.trim().replace(/\s+/g, '-')
	if (normalized.startsWith('--')) return normalized
	return `--${normalized.replace(/^-+/, '')}`
}

function collectGroups(node, trail, groups) {
	const entries = Object.entries(node).filter(([key]) => !key.startsWith('$'))
	const lines = []

	for (const [key, value] of entries) {
		if (!isColorToken(value)) continue
		lines.push(`  ${toCssVariable(key)}: ${formatColor(value.$value)}`)
	}

	if (lines.length > 0) {
		groups.push({ title: trail.join(' - '), lines })
	}

	for (const [key, value] of entries) {
		if (!value || typeof value !== 'object' || isColorToken(value)) continue
		collectGroups(value, [...trail, key], groups)
	}
}

function sassFileName(jsonFile) {
	const baseName = path.basename(jsonFile).replace(/\.tokens\.json$/i, '')
	return `${baseName.trim().toLowerCase().replace(/\s+/g, '-')}.sass`
}

export function convertColorToken(jsonFile, outputDir) {
	const tokens = JSON.parse(readFileSync(jsonFile, 'utf8'))
	const groups = []

	collectGroups(tokens, [], groups)

	const body = groups
		.map((group) => {
			const comment = group.title ? `  /* ${group.title} */\n` : ''
			return `${comment}${group.lines.join('\n')}`
		})
		.join('\n\n')

	const outputPath = path.join(outputDir, sassFileName(jsonFile))

	mkdirSync(outputDir, { recursive: true })
	writeFileSync(outputPath, `html\n${body}\n`)

	return outputPath
}

const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href

if (isDirectRun) {
	const jsonFile = process.argv[2]
	const outputDir = process.argv[3]

	if (!jsonFile || !outputDir) {
		console.error('Usage: node converte-token.js <tokens.json> <output-dir>')
		process.exit(1)
	}

	console.log(convertColorToken(jsonFile, outputDir))
}
