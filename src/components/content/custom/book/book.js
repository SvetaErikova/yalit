const PAPER = '#FFF9F2';
const FLIP_MS = 1220;
const BEND = 0.86;
const LEAD = 0.58;
const DEPTH = 0.42;

function projectPoint(u, v, turn, geom) {
	const lead = Math.sin(turn) * LEAD * v;
	const base = Math.min(Math.PI, Math.max(0, turn + lead));
	const curl = Math.sin(base) * BEND * u ** 1.45;
	const angle = Math.min(Math.PI, base + curl);
	const radius = u * geom.pageW;
	const zLift = Math.sin(angle) * radius * DEPTH;
	const scale = geom.focal / (geom.focal - zLift);

	return {
		x: geom.spine + Math.cos(angle) * radius * scale,
		y: geom.centerY + (v - 0.5) * geom.pageH * scale,
		z: zLift,
		angle,
		u,
		v,
	};
}

function buildGrid(turn, geom) {
	const cols = geom.pageW < 240 ? 28 : 42;
	const line = (v) => Array.from({ length: cols + 1 }, (_, col) => projectPoint(col / cols, v, turn, geom));
	return [line(0), line(1)];
}

function traceOutline(ctx, grid) {
	const [top, bottom] = grid;
	ctx.beginPath();
	top.forEach((point, index) => (index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y)));
	for (let index = bottom.length - 1; index >= 0; index -= 1) ctx.lineTo(bottom[index].x, bottom[index].y);
	ctx.closePath();
}

function triangleArea(a, b, c) {
	return Math.abs((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y));
}

function mapTriangle(s0, s1, s2, d0, d1, d2) {
	const denom = s0.x * (s1.y - s2.y) + s1.x * (s2.y - s0.y) + s2.x * (s0.y - s1.y);
	if (Math.abs(denom) < 1e-4) return null;

	const map = (axis) => ({
		a: (d0[axis] * (s1.y - s2.y) + d1[axis] * (s2.y - s0.y) + d2[axis] * (s0.y - s1.y)) / denom,
		c: (d0[axis] * (s2.x - s1.x) + d1[axis] * (s0.x - s2.x) + d2[axis] * (s1.x - s0.x)) / denom,
		e: (d0[axis] * (s1.x * s2.y - s2.x * s1.y) + d1[axis] * (s2.x * s0.y - s0.x * s2.y) + d2[axis] * (s0.x * s1.y - s1.x * s0.y)) / denom,
	});
	const x = map('x');
	const y = map('y');
	return { a: x.a, b: y.a, c: x.c, d: y.c, e: x.e, f: y.e };
}

function expandTriangle(a, b, c, amount) {
	const cx = (a.x + b.x + c.x) / 3;
	const cy = (a.y + b.y + c.y) / 3;
	const push = (point) => {
		const dx = point.x - cx;
		const dy = point.y - cy;
		const length = Math.hypot(dx, dy) || 1;
		return { x: point.x + (dx / length) * amount, y: point.y + (dy / length) * amount };
	};
	return [push(a), push(b), push(c)];
}

function sourcePoint(point, texture, face) {
	const x = face === 'left' ? (1 - point.u) * texture.width : point.u * texture.width;
	return { x, y: point.v * texture.height };
}

function drawTexturedTriangle(ctx, texture, s0, s1, s2, d0, d1, d2) {
	if (triangleArea(d0, d1, d2) < 0.35) return;
	const matrix = mapTriangle(s0, s1, s2, d0, d1, d2);
	if (!matrix) return;
	const [e0, e1, e2] = expandTriangle(d0, d1, d2, 0.75);

	ctx.save();
	ctx.beginPath();
	ctx.moveTo(e0.x, e0.y);
	ctx.lineTo(e1.x, e1.y);
	ctx.lineTo(e2.x, e2.y);
	ctx.closePath();
	ctx.clip();
	ctx.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
	ctx.drawImage(texture, 0, 0);
	ctx.restore();
}

function paintTriangle(ctx, a, b, c, rightTex, leftTex) {
	const angle = (a.angle + b.angle + c.angle) / 3;
	const face = angle > Math.PI / 2 ? 'left' : 'right';
	const texture = face === 'left' ? leftTex : rightTex;
	if (!texture) return;
	drawTexturedTriangle(ctx, texture, sourcePoint(a, texture, face), sourcePoint(b, texture, face), sourcePoint(c, texture, face), a, b, c);
}

function shadeSheet(ctx, grid, turn) {
	const lift = Math.sin(turn);
	if (lift < 0.04) return;
	const points = grid.flat();
	const minX = Math.min(...points.map((point) => point.x));
	const maxX = Math.max(...points.map((point) => point.x));
	const minY = Math.min(...points.map((point) => point.y));
	const maxY = Math.max(...points.map((point) => point.y));

	ctx.save();
	traceOutline(ctx, grid);
	ctx.clip();
	const wash = ctx.createLinearGradient(minX, minY, maxX, maxY);
	wash.addColorStop(0, `rgba(255, 250, 242, ${0.05 * lift})`);
	wash.addColorStop(0.45, `rgba(255, 250, 242, ${0.14 * lift})`);
	wash.addColorStop(1, `rgba(36, 20, 12, ${0.22 * lift})`);
	ctx.fillStyle = wash;
	ctx.fillRect(minX, minY, maxX - minX, maxY - minY);
	ctx.restore();
}

function renderSheet(ctx, geom, turn, rightTex, leftTex) {
	const grid = buildGrid(turn, geom);

	ctx.save();
	traceOutline(ctx, grid);
	ctx.fillStyle = PAPER;
	ctx.fill();
	ctx.restore();

	const cells = [];
	for (let row = 0; row < grid.length - 1; row += 1) {
		for (let col = 0; col < grid[0].length - 1; col += 1) {
			const p00 = grid[row][col];
			const p10 = grid[row][col + 1];
			const p01 = grid[row + 1][col];
			const p11 = grid[row + 1][col + 1];
			cells.push({
				p00,
				p10,
				p01,
				p11,
				z: (p00.z + p10.z + p01.z + p11.z) / 4,
			});
		}
	}
	cells.sort((a, b) => a.z - b.z);
	for (const cell of cells) {
		paintTriangle(ctx, cell.p00, cell.p10, cell.p11, rightTex, leftTex);
		paintTriangle(ctx, cell.p00, cell.p11, cell.p01, rightTex, leftTex);
	}

	shadeSheet(ctx, grid, turn);
}

function renderPage(ctx, geom, texture, side) {
	const x = side === 'left' ? geom.leftX : geom.spine;
	ctx.fillStyle = PAPER;
	ctx.fillRect(x, geom.pageTop, geom.pageW, geom.pageH);
	if (texture) ctx.drawImage(texture, x, geom.pageTop, geom.pageW, geom.pageH);
}

const GUTTER = {
	left: { band: 0.55, stops: [[0, 0], [0.3, 0.03], [0.62, 0.07], [0.86, 0.12], [0.97, 0.18], [0.996, 0.24], [1, 0.38]] },
	right: { band: 0.3, stops: [[0, 0.38], [0.006, 0.24], [0.05, 0.16], [0.22, 0.1], [0.5, 0.05], [1, 0]] },
};

function paintGutter(ctx, width, height, side) {
	const { band, stops } = GUTTER[side];
	const size = width * band;
	const x = side === 'left' ? width - size : 0;
	const gutter = ctx.createLinearGradient(x, 0, x + size, 0);
	for (const [offset, alpha] of stops) gutter.addColorStop(offset, `rgba(42, 22, 14, ${alpha})`);
	ctx.fillStyle = gutter;
	ctx.fillRect(x, 0, size, height);
}

function drawFlipShadow(ctx, geom, turn) {
	const lift = Math.sin(turn);
	if (lift < 0.02) return;
	const grid = buildGrid(turn, geom);
	ctx.save();
	ctx.beginPath();
	ctx.rect(geom.leftX, geom.pageTop, geom.pageW * geom.pages, geom.pageH);
	ctx.clip();
	ctx.translate(0, 12);
	traceOutline(ctx, grid);
	ctx.filter = 'blur(14px)';
	ctx.fillStyle = `rgba(32, 16, 10, ${0.2 * lift})`;
	ctx.fill();
	ctx.restore();
}

function textLines(node) {
	const text = node.textContent;
	if (!text || !text.trim()) return [];
	const range = document.createRange();
	const lines = [];
	let index = 0;
	while (index < text.length) {
		while (index < text.length && /\s/.test(text[index])) index += 1;
		if (index >= text.length) break;
		range.setStart(node, index);
		range.setEnd(node, index + 1);
		const first = range.getBoundingClientRect();
		if (first.width < 0.5 && first.height < 0.5) {
			index += 1;
			continue;
		}
		const midY = (first.top + first.bottom) / 2;
		let end = index + 1;
		while (end < text.length) {
			range.setStart(node, end);
			range.setEnd(node, end + 1);
			const rect = range.getBoundingClientRect();
			if (rect.width < 0.5 && rect.height < 0.5) {
				end += 1;
				continue;
			}
			const y = (rect.top + rect.bottom) / 2;
			if (Math.abs(y - midY) > Math.max(2, first.height * 0.6)) break;
			end += 1;
		}
		const slice = text.slice(index, end).replace(/\s+/g, ' ').trim();
		range.setStart(node, index);
		range.setEnd(node, end);
		const box = range.getBoundingClientRect();
		if (slice && box.width > 0) lines.push({ text: slice, box });
		index = end;
	}
	return lines;
}

function paintText(ctx, node, origin) {
	const parent = node.parentElement;
	if (!parent) return;
	const style = getComputedStyle(parent);
	const lines = textLines(node);
	if (!lines.length) return;
	ctx.save();
	ctx.font = style.font;
	ctx.fillStyle = style.color;
	ctx.textBaseline = 'middle';
	if ('letterSpacing' in ctx && style.letterSpacing && style.letterSpacing !== 'normal') ctx.letterSpacing = style.letterSpacing;
	for (const line of lines) {
		let content = line.text;
		if (style.textTransform === 'uppercase') content = content.toUpperCase();
		else if (style.textTransform === 'lowercase') content = content.toLowerCase();
		const x = line.box.left - origin.left;
		const y = line.box.top - origin.top + line.box.height / 2;
		ctx.fillText(content, x, y);
	}
	ctx.restore();
}

function paintImage(ctx, img, origin) {
	if (!img.naturalWidth) return;
	const rect = img.getBoundingClientRect();
	if (rect.width < 1 || rect.height < 1) return;
	const style = getComputedStyle(img);
	const radius = parseFloat(style.borderTopLeftRadius) || 0;
	const x = rect.left - origin.left;
	const y = rect.top - origin.top;
	ctx.save();
	ctx.beginPath();
	if (radius > 0 && typeof ctx.roundRect === 'function') ctx.roundRect(x, y, rect.width, rect.height, radius);
	else ctx.rect(x, y, rect.width, rect.height);
	ctx.clip();
	const fit = style.objectFit;
	if (fit === 'cover' || fit === 'contain') {
		const scale = fit === 'cover'
			? Math.max(rect.width / img.naturalWidth, rect.height / img.naturalHeight)
			: Math.min(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
		const sw = rect.width / scale;
		const sh = rect.height / scale;
		ctx.drawImage(img, (img.naturalWidth - sw) / 2, (img.naturalHeight - sh) / 2, sw, sh, x, y, rect.width, rect.height);
	} else {
		ctx.drawImage(img, x, y, rect.width, rect.height);
	}
	ctx.restore();
}

function paintNode(ctx, node, origin) {
	if (node.nodeType === Node.TEXT_NODE) {
		paintText(ctx, node, origin);
		return;
	}
	if (node.nodeType !== Node.ELEMENT_NODE) return;
	if (node.tagName === 'IMG') {
		paintImage(ctx, node, origin);
		return;
	}
	const style = getComputedStyle(node);
	if (style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)' && style.backgroundColor !== 'transparent') {
		const rect = node.getBoundingClientRect();
		ctx.fillStyle = style.backgroundColor;
		ctx.fillRect(rect.left - origin.left, rect.top - origin.top, rect.width, rect.height);
	}
	for (const child of node.childNodes) paintNode(ctx, child, origin);
}

function paintPage(ctx, page, width, height) {
	const origin = page.getBoundingClientRect();
	const style = getComputedStyle(page);
	ctx.fillStyle = style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)' ? style.backgroundColor : PAPER;
	ctx.fillRect(0, 0, width, height);
	for (const child of page.childNodes) paintNode(ctx, child, origin);
}

function capturePage(page, width, height, dpr, side) {
	const canvas = document.createElement('canvas');
	canvas.width = Math.max(1, Math.round(width * dpr));
	canvas.height = Math.max(1, Math.round(height * dpr));
	const ctx = canvas.getContext('2d');
	ctx.scale(dpr, dpr);
	try {
		paintPage(ctx, page, width, height);
	} catch {
		ctx.fillStyle = PAPER;
		ctx.fillRect(0, 0, width, height);
	}
	paintGutter(ctx, width, height, side);
	return canvas;
}

async function whenReady(root) {
	if (document.fonts?.ready) await document.fonts.ready.catch(() => {});
	const images = [...root.querySelectorAll('.book--sources img')];
	await Promise.all(images.map((img) => {
		if (img.complete) return Promise.resolve();
		return new Promise((resolve) => {
			img.addEventListener('load', resolve, { once: true });
			img.addEventListener('error', resolve, { once: true });
		});
	}));
}

function initBook(root) {
	if (root.dataset.ready === 'true') return;
	const stage = root.querySelector('.book--stage');
	const canvas = root.querySelector('.book--canvas');
	const sources = [...root.querySelectorAll('.book--sources .page')];
	const prev = root.querySelector('[data-prev]');
	const next = root.querySelector('[data-next]');
	if (!stage || !canvas || sources.length < 2 || !prev || !next) return;

	root.dataset.ready = 'true';
	const ctx = canvas.getContext('2d');
	const mobileQuery = window.matchMedia('(max-width: 768px)');
	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const notes = root.querySelector('.book--notes');

	let spread = 0;
	let single = mobileQuery.matches;
	let busy = false;
	let notesSwiper = null;
	let notesLock = false;
	let anim = null;
	let textures = [];
	let resizeTimer = 0;
	let pendingResize = false;

	const pageCount = () => (single ? sources.length : Math.ceil(sources.length / 2));
	const pageSide = (index) => (!single && index % 2 === 0 ? 'left' : 'right');

	function measure() {
		const stageRect = stage.getBoundingClientRect();
		const canvasRect = canvas.getBoundingClientRect();
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const stack = single ? 0 : 14;
		const edge = 14;
		const pageW = Math.round(single ? stageRect.width - edge : (stageRect.width - stack - edge) / 2);
		const pageH = Math.round(stageRect.height);
		const leftX = Math.round(stageRect.left - canvasRect.left + stack);
		const pageTop = Math.round(stageRect.top - canvasRect.top);
		if (pageW < 8 || pageH < 8) return null;
		return {
			dpr,
			cssW: canvas.clientWidth,
			cssH: canvas.clientHeight,
			pageW,
			pageH,
			pages: single ? 1 : 2,
			leftX,
			pageTop,
			spine: single ? leftX : leftX + pageW,
			centerY: pageTop + pageH / 2,
			focal: Math.max(pageW * 3.5, 980),
		};
	}

	function prepare(geom) {
		const width = Math.max(1, Math.round(geom.cssW * geom.dpr));
		const height = Math.max(1, Math.round(geom.cssH * geom.dpr));
		if (canvas.width !== width || canvas.height !== height) {
			canvas.width = width;
			canvas.height = height;
		}
		ctx.setTransform(geom.dpr, 0, 0, geom.dpr, 0, 0);
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = 'high';
		ctx.clearRect(0, 0, geom.cssW, geom.cssH);
	}

	function drawPages(geom, leftIndex, rightIndex) {
		renderPage(ctx, geom, textures[rightIndex], 'right');
		renderPage(ctx, geom, textures[leftIndex], 'left');
	}

	function draw() {
		const geom = measure();
		if (!geom) return;
		prepare(geom);
		if (single) {
			if (!anim) {
				renderPage(ctx, geom, textures[spread], 'right');
				return;
			}
			const { turn, dir, fromSpread, toSpread } = anim;
			renderPage(ctx, geom, textures[dir > 0 ? toSpread : fromSpread], 'right');
			drawFlipShadow(ctx, geom, turn);
			renderSheet(ctx, geom, turn, textures[dir > 0 ? fromSpread : toSpread], null);
			return;
		}
		if (!anim) {
			drawPages(geom, spread * 2, spread * 2 + 1);
			return;
		}

		const { turn, dir, fromSpread, toSpread } = anim;
		const front = dir > 0 ? fromSpread * 2 + 1 : toSpread * 2 + 1;
		const back = dir > 0 ? toSpread * 2 : fromSpread * 2;
		drawPages(geom, dir > 0 ? fromSpread * 2 : toSpread * 2, dir > 0 ? toSpread * 2 + 1 : fromSpread * 2 + 1);
		drawFlipShadow(ctx, geom, turn);
		renderSheet(ctx, geom, turn, textures[front], textures[back]);
	}

	function mountNotes() {
		if (!notes || typeof Swiper === 'undefined') return;
		if (!single) {
			notesSwiper?.destroy(true, true);
			notesSwiper = null;
			return;
		}
		if (notesSwiper) {
			notesSwiper.updateAutoHeight(0);
			return;
		}
		notesSwiper = new Swiper(notes, {
			effect: 'fade',
			fadeEffect: { crossFade: true },
			autoHeight: true,
			speed: reduced ? 0 : FLIP_MS,
			slidesPerView: 1,
			allowTouchMove: true,
			watchOverflow: true,
			on: {
				slideChange(swiper) {
					if (notesLock) {
						notesLock = false;
						return;
					}
					if (busy || swiper.activeIndex === spread) return;
					go(swiper.activeIndex > spread ? 1 : -1);
				},
			},
		});
	}

	function syncNotes(animate) {
		if (!single || !notesSwiper) return;
		const index = anim ? anim.toSpread : spread;
		if (notesSwiper.activeIndex === index) return;
		notesLock = true;
		notesSwiper.slideTo(index, animate && !reduced ? FLIP_MS : 0);
	}

	function syncButtons() {
		prev.disabled = busy || spread <= 0;
		next.disabled = busy || spread >= pageCount() - 1;
	}

	function syncA11y() {
		sources.forEach((page, index) => {
			const visible = single ? index === spread : index === spread * 2 || index === spread * 2 + 1;
			page.toggleAttribute('inert', !visible);
			page.setAttribute('aria-hidden', visible ? 'false' : 'true');
		});
	}

	function refreshTextures() {
		const geom = measure();
		if (!geom) return;
		const width = Math.round(geom.pageW);
		const height = Math.round(geom.pageH);
		stage.style.setProperty('--book-page-w', `${width}px`);
		stage.style.setProperty('--book-page-h', `${height}px`);
		void stage.offsetHeight;
		textures = sources.map((page, index) => capturePage(page, width, height, geom.dpr, pageSide(index)));
		draw();
	}

	function finish(target) {
		spread = target;
		anim = null;
		busy = false;
		syncButtons();
		syncA11y();
		syncNotes(false);
		draw();
		if (pendingResize) {
			pendingResize = false;
			refreshTextures();
		}
	}

	function go(dir) {
		if (busy) return;
		const target = spread + dir;
		if (target < 0 || target >= pageCount()) return;
		busy = true;
		syncButtons();
		const fromSpread = spread;
		const from = dir > 0 ? 0 : Math.PI;
		const to = dir > 0 ? Math.PI : 0;

		if (reduced) {
			finish(target);
			return;
		}

		anim = { turn: from, dir, fromSpread, toSpread: target };
		syncNotes(true);
		const state = { turn: from };
		const step = (turn) => {
			anim = { turn, dir, fromSpread, toSpread: target };
			draw();
		};

		if (typeof gsap !== 'undefined') {
			gsap.to(state, {
				turn: to,
				duration: FLIP_MS / 1000,
				ease: 'power2.inOut',
				onUpdate: () => step(state.turn),
				onComplete: () => finish(target),
			});
			return;
		}

		const start = performance.now();
		const tick = (now) => {
			const t = Math.min(1, (now - start) / FLIP_MS);
			const eased = t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
			step(from + (to - from) * eased);
			if (t < 1) requestAnimationFrame(tick);
			else finish(target);
		};
		requestAnimationFrame(tick);
	}

	function applyMode(nextSingle) {
		if (nextSingle === single) return;
		spread = nextSingle ? spread * 2 : Math.floor(spread / 2);
		single = nextSingle;
		if (spread > pageCount() - 1) spread = pageCount() - 1;
		if (spread < 0) spread = 0;
		mountNotes();
		syncNotes(false);
		syncButtons();
		syncA11y();
		if (busy) {
			pendingResize = true;
			return;
		}
		refreshTextures();
	}

	prev.addEventListener('click', () => go(-1));
	next.addEventListener('click', () => go(1));
	mobileQuery.addEventListener('change', () => applyMode(mobileQuery.matches));
	syncButtons();
	syncA11y();
	mountNotes();
	syncNotes(false);

	whenReady(root).then(() => {
		notesSwiper?.updateAutoHeight(0);
		refreshTextures();
	});

	const observer = new ResizeObserver(() => {
		window.clearTimeout(resizeTimer);
		resizeTimer = window.setTimeout(() => {
			if (busy) {
				pendingResize = true;
				draw();
				return;
			}
			refreshTextures();
		}, 140);
	});
	observer.observe(stage);
}

function bootBooks() {
	document.querySelectorAll('.book').forEach(initBook);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', bootBooks);
} else {
	bootBooks();
}
