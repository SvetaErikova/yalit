/**
 * Перелистывание разворота на canvas.
 * Угол страницы едет по дуге, лист режется клипом — без перетаскивания, только стрелки.
 */
const PAPER = "#fffff8";
const FLIP_MS = 1100;

const cornerPoint = (progress, pageWidth, pageHeight) => {
	const lift = Math.min(28, pageHeight * 0.045);
	const startX = pageWidth - lift;
	const startY = pageHeight - lift;
	const endX = -pageWidth;
	const endY = pageHeight;

	return {
		x: startX + (endX - startX) * progress,
		y: startY + (endY - startY) * progress,
	};
};

const distance = (a, b) => {
	if (!a || !b) return Infinity;
	return Math.hypot(a.x - b.x, a.y - b.y);
};

const rotatePoint = (point, origin, angle) => {
	const cos = Math.cos(angle);
	const sin = Math.sin(angle);

	return {
		x: point.x * cos + point.y * sin + origin.x,
		y: point.y * cos - point.x * sin + origin.y,
	};
};

const limitToCircle = (center, radius, point) => {
	if (distance(center, point) <= radius) return point;

	const dx = center.x - point.x;
	const dy = center.y - point.y;
	const length = Math.hypot(dx, dy) || 1;

	return {
		x: center.x - (dx / length) * radius,
		y: center.y - (dy / length) * radius,
	};
};

const lineIntersect = (one, two) => {
	const a1 = one[0].y - one[1].y;
	const a2 = two[0].y - two[1].y;
	const b1 = one[1].x - one[0].x;
	const b2 = two[1].x - two[0].x;
	const c1 = one[0].x * one[1].y - one[1].x * one[0].y;
	const c2 = two[0].x * two[1].y - two[1].x * two[0].y;
	const det = a1 * b2 - a2 * b1;

	if (!Number.isFinite(det) || Math.abs(det) < 1e-6) return null;

	const x = -((c1 * b2 - c2 * b1) / det);
	const y = -((a1 * c2 - a2 * c1) / det);

	if (!Number.isFinite(x) || !Number.isFinite(y)) return null;

	return { x, y };
};

const intersectInRect = (rect, one, two) => {
	const point = lineIntersect(one, two);

	if (!point) return null;
	if (point.x < rect.left || point.x > rect.left + rect.width) return null;
	if (point.y < rect.top || point.y > rect.top + rect.height) return null;

	return point;
};

const buildPage = (pos, pageWidth, pageHeight) => {
	const left = pageWidth - pos.x + 1;
	const top = pageHeight - pos.y;
	const hypotenuse = Math.hypot(top, left);

	if (hypotenuse < 1) return null;

	const ratio = Math.min(1, Math.max(-1, left / hypotenuse));
	let angle = 2 * Math.acos(ratio);

	if (top < 0) angle = -angle;

	const delta = Math.PI - angle;

	if (!Number.isFinite(angle) || (delta >= 0 && delta < 0.003)) return null;

	angle = -angle;

	const base = [
		{ x: 0, y: -pageHeight },
		{ x: pageWidth, y: -pageHeight },
		{ x: 0, y: 0 },
		{ x: pageWidth, y: 0 },
	].map((point) => rotatePoint(point, pos, angle));

	return {
		angle,
		rect: {
			topLeft: base[0],
			topRight: base[1],
			bottomLeft: base[2],
			bottomRight: base[3],
		},
	};
};

const computeCurl = (localPos, pageWidth, pageHeight) => {
	let position = localPos;
	let page = buildPage(position, pageWidth, pageHeight);

	if (!page) return null;

	const refresh = (next) => {
		position = next;
		page = buildPage(position, pageWidth, pageHeight);
	};

	const withinWidth = limitToCircle({ x: 0, y: pageHeight }, pageWidth, position);

	if (withinWidth !== position) refresh(withinWidth);
	if (!page) return null;

	if (page.rect.topRight.x <= 0) {
		refresh(limitToCircle({ x: 0, y: 0 }, Math.hypot(pageWidth, pageHeight), page.rect.bottomLeft));
	}

	if (!page) return null;
	if (Math.abs(position.x - pageWidth) < 1 && Math.abs(position.y) < 1) return null;

	const bounds = { left: -1, top: -1, width: pageWidth + 2, height: pageHeight + 2 };
	const topLine = [
		{ x: 0, y: 0 },
		{ x: pageWidth, y: 0 },
	];
	const sideLine = [
		{ x: pageWidth, y: 0 },
		{ x: pageWidth, y: pageHeight },
	];
	const bottomLine = [
		{ x: 0, y: pageHeight },
		{ x: pageWidth, y: pageHeight },
	];

	const topIntersect = intersectInRect(bounds, [page.rect.topLeft, page.rect.topRight], topLine);
	const sideIntersect = intersectInRect(bounds, [position, page.rect.topLeft], sideLine);
	const bottomIntersect = intersectInRect(bounds, [page.rect.bottomLeft, page.rect.bottomRight], bottomLine);

	const progress = Math.abs(((position.x - pageWidth) / (2 * pageWidth)) * 100);

	return {
		angle: page.angle,
		position,
		rect: page.rect,
		topIntersect,
		sideIntersect,
		bottomIntersect,
		progress,
	};
};

const clipsFor = (curl, pageWidth, pageHeight) => {
	const flipping = [curl.rect.topLeft, curl.topIntersect];

	if (curl.sideIntersect) flipping.push(curl.sideIntersect);
	flipping.push(curl.bottomIntersect);
	flipping.push(curl.rect.bottomLeft);

	const bottom = [curl.topIntersect];

	if (curl.topIntersect) bottom.push({ x: pageWidth, y: 0 });
	bottom.push({ x: pageWidth, y: pageHeight });

	if (curl.sideIntersect && distance(curl.sideIntersect, curl.topIntersect) >= 10) {
		bottom.push(curl.sideIntersect);
	}

	bottom.push(curl.bottomIntersect, curl.topIntersect);

	return {
		flipping: flipping.filter(Boolean),
		bottom: bottom.filter(Boolean),
	};
};

const toGlobal = (point, direction, pageWidth) => {
	if (direction === "back") return { x: pageWidth - point.x, y: point.y };
	return { x: pageWidth + point.x, y: point.y };
};

const easeInOut = (value) => {
	return value < 0.5 ? 2 * value * value : 1 - (-2 * value + 2) ** 2 / 2;
};

const readSpec = (node) => {
	if (!node) return { title: "", paragraphs: [], src: "" };

	const title = node.querySelector(".book__title");
	const image = node.querySelector(".book__img");
	const paragraphs = Array.prototype.map.call(node.querySelectorAll(".book__text"), (item) => item.textContent.trim()).filter(Boolean);

	return {
		title: title ? title.textContent.trim() : "",
		paragraphs,
		src: image ? image.getAttribute("src") : "",
	};
};

const loadImage = (src) => {
	if (!src) return Promise.resolve(null);

	return new Promise((resolve) => {
		const image = new Image();
		image.onload = () => resolve(image);
		image.onerror = () => resolve(null);
		image.src = src;
	});
};

const wrapLine = (ctx, text, maxWidth) => {
	const words = text.split(/\s+/).filter(Boolean);
	const lines = [];
	let line = "";

	words.forEach((word) => {
		const next = line ? `${line} ${word}` : word;

		if (ctx.measureText(next).width > maxWidth && line) {
			lines.push(line);
			line = word;
			return;
		}

		line = next;
	});

	if (line) lines.push(line);

	return lines;
};

const drawCover = (ctx, image, x, y, width, height) => {
	const scale = Math.max(width / image.width, height / image.height);
	const drawWidth = image.width * scale;
	const drawHeight = image.height * scale;

	ctx.save();
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.clip();
	ctx.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
	ctx.restore();
};

const drawJustified = (ctx, line, x, y, maxWidth, isLast) => {
	const words = line.split(" ");

	if (isLast || words.length < 2) {
		ctx.fillText(line, x, y);
		return;
	}

	const wordsWidth = words.reduce((sum, word) => sum + ctx.measureText(word).width, 0);
	const gap = Math.max(0, (maxWidth - wordsWidth) / (words.length - 1));

	if (gap > 3.5) {
		ctx.fillText(line, x, y);
		return;
	}
	let cursor = x;

	words.forEach((word) => {
		ctx.fillText(word, cursor, y);
		cursor += ctx.measureText(word).width + gap;
	});
};

const paintPage = (canvas, spec, image, pageWidth, pageHeight, dpr) => {
	canvas.width = Math.max(1, Math.round(pageWidth * dpr));
	canvas.height = Math.max(1, Math.round(pageHeight * dpr));

	const ctx = canvas.getContext("2d");
	ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	ctx.fillStyle = PAPER;
	ctx.fillRect(0, 0, pageWidth, pageHeight);

	if (!spec.title && !spec.paragraphs.length && !image) return;

	const padX = pageWidth * 0.1;
	const padY = pageHeight * 0.062;
	const contentWidth = pageWidth - padX * 2;
	let cursorY = padY;

	if (spec.title) {
		let titleSize = Math.max(16, pageWidth * 0.046);
		const label = spec.title.toLocaleUpperCase("ru");
		ctx.fillStyle = "#8E3821";
		ctx.textAlign = "center";
		ctx.textBaseline = "top";

		const fitTitle = () => {
			ctx.font = `400 ${titleSize}px literaturedecor, "Times New Roman", serif`;
			ctx.letterSpacing = `${titleSize * 0.14}px`;
		};

		fitTitle();

		while (ctx.measureText(label).width > contentWidth && titleSize > 13) {
			titleSize -= 1;
			fitTitle();
		}

		ctx.fillText(label, pageWidth / 2, cursorY);
		ctx.letterSpacing = "0px";
		cursorY += titleSize * 1.45;
	}

	if (image) {
		const imageHeight = pageHeight * 0.245;
		drawCover(ctx, image, padX, cursorY, contentWidth, imageHeight);
		cursorY += imageHeight + pageHeight * 0.03;
	}

	if (!spec.paragraphs.length) return;

	const bodySize = Math.max(12, pageWidth * 0.03);
	const lineHeight = bodySize * 1.36;
	ctx.fillStyle = "#2A302A";
	ctx.font = `400 ${bodySize}px involve, sans-serif`;
	ctx.textAlign = "left";
	ctx.textBaseline = "top";

	spec.paragraphs.forEach((paragraph, paragraphIndex) => {
		const lines = wrapLine(ctx, paragraph, contentWidth);
		const room = pageHeight - padY;

		lines.forEach((line, lineIndex) => {
			if (cursorY + lineHeight > room) return;
			const isLast = lineIndex === lines.length - 1;
			drawJustified(ctx, line, padX, cursorY, contentWidth, isLast);
			cursorY += lineHeight;
		});

		if (paragraphIndex < spec.paragraphs.length - 1) cursorY += lineHeight * 0.45;
	});
};

const trace = (ctx, points, map) => {
	ctx.beginPath();
	points.forEach((point, index) => {
		const next = map(point);
		if (index === 0) ctx.moveTo(next.x, next.y);
		else ctx.lineTo(next.x, next.y);
	});
	ctx.closePath();
};

const drawShaped = (ctx, bitmap, points, anchor, rotation, direction, pageWidth, pageHeight) => {
	if (!bitmap || bitmap.width < 2 || !anchor || points.length < 3) return;

	const origin = toGlobal(anchor, direction, pageWidth);

	ctx.save();
	ctx.translate(origin.x, origin.y);
	trace(ctx, points, (point) => {
		const global = toGlobal(point, direction, pageWidth);
		return { x: global.x - origin.x, y: global.y - origin.y };
	});
	ctx.rotate(rotation);
	ctx.clip();
	ctx.drawImage(bitmap, 0, 0, pageWidth, pageHeight);
	ctx.restore();
};

const drawSpine = (ctx, pageWidth, pageHeight) => {
	const size = Math.max(18, pageWidth * 0.16);
	const x = pageWidth - size / 2;
	const gradient = ctx.createLinearGradient(x, 0, x + size, 0);

	gradient.addColorStop(0, "rgba(60, 32, 18, 0)");
	gradient.addColorStop(0.42, "rgba(60, 32, 18, 0.05)");
	gradient.addColorStop(0.5, "rgba(40, 18, 10, 0.28)");
	gradient.addColorStop(0.58, "rgba(60, 32, 18, 0.05)");
	gradient.addColorStop(1, "rgba(60, 32, 18, 0)");

	ctx.save();
	ctx.fillStyle = gradient;
	ctx.fillRect(x, 0, size, pageHeight);
	ctx.restore();
};

const foldEnds = (curl) => {
	const start = curl.topIntersect || curl.sideIntersect;
	const end = curl.bottomIntersect || curl.sideIntersect;

	if (!start || !end) return null;

	return [start, end];
};

const shadeFold = (ctx, curl, direction, pageWidth, pageHeight, mode) => {
	const ends = foldEnds(curl);

	if (!ends) return;

	const [start, end] = ends;
	const from = toGlobal(start, direction, pageWidth);
	const to = toGlobal(end, direction, pageWidth);
	const dx = to.x - from.x;
	const dy = to.y - from.y;
	const length = Math.hypot(dx, dy) || 1;
	let nx = dy / length;
	let ny = -dx / length;

	if (direction === "forward" && nx < 0) {
		nx = -nx;
		ny = -ny;
	}

	if (direction === "back" && nx > 0) {
		nx = -nx;
		ny = -ny;
	}

	const strength = Math.sin((Math.min(curl.progress, 100) / 100) * Math.PI);
	const cast = Math.max(14, pageWidth * 0.26 * strength);
	const opacity = 0.16 + strength * 0.2;
	const width = mode === "crease" ? cast * 0.42 : cast;
	const sign = mode === "crease" ? -1 : 1;

	ctx.save();
	ctx.beginPath();
	ctx.rect(0, 0, pageWidth * 2, pageHeight);
	ctx.clip();

	const gradient = ctx.createLinearGradient(from.x, from.y, from.x + nx * sign * width, from.y + ny * sign * width);
	gradient.addColorStop(0, `rgba(42, 22, 12, ${mode === "crease" ? opacity * 0.85 : opacity})`);
	gradient.addColorStop(mode === "crease" ? 0.4 : 1, "rgba(42, 22, 12, 0)");
	if (mode === "crease") gradient.addColorStop(1, "rgba(42, 22, 12, 0)");

	ctx.fillStyle = gradient;
	ctx.beginPath();
	ctx.moveTo(from.x, from.y);
	ctx.lineTo(to.x, to.y);
	ctx.lineTo(to.x + nx * sign * width, to.y + ny * sign * width);
	ctx.lineTo(from.x + nx * sign * width, from.y + ny * sign * width);
	ctx.closePath();
	ctx.fill();

	if (mode === "cast") {
		ctx.beginPath();
		ctx.moveTo(from.x, from.y);
		ctx.lineTo(to.x, to.y);
		ctx.strokeStyle = "rgba(70, 42, 28, 0.28)";
		ctx.lineWidth = 1;
		ctx.stroke();
	}

	ctx.restore();
};

const initBook = (target) => {
	const root = typeof target === "string" ? document.querySelector(target) : target;

	if (!root || root.dataset.bookReady === "true") return null;

	const stage = root.querySelector(".book__stage");
	const canvas = root.querySelector("[data-book-canvas]");
	const btnPrev = root.querySelector("[data-book-prev]");
	const btnNext = root.querySelector("[data-book-next]");
	const counter = root.querySelector("[data-book-counter]");

	if (!stage || !canvas) return null;

	const ctx = canvas.getContext("2d");

	if (!ctx) return null;

	root.dataset.bookReady = "true";

	const specs = Array.prototype.map.call(root.querySelectorAll(".book__page"), (node) => readSpec(node));

	if (specs.length % 2 === 1) specs.push({ title: "", paragraphs: [], src: "" });

	const spreads = [];

	for (let index = 0; index < specs.length; index += 2) {
		spreads.push(index + 1 < specs.length ? [index, index + 1] : [index]);
	}

	const bitmaps = specs.map(() => document.createElement("canvas"));
	const images = specs.map(() => null);

	let spreadIndex = 0;
	let flipping = null;
	let frameId = 0;
	let pageWidth = 0;
	let pageHeight = 0;
	let dpr = 1;

	const sheet = (index) => {
		if (index === undefined || index === null) return null;
		return bitmaps[index] || null;
	};

	const paintAll = () => {
		if (pageWidth < 2 || pageHeight < 2) return;

		specs.forEach((spec, index) => {
			paintPage(bitmaps[index], spec, images[index], pageWidth, pageHeight, dpr);
		});
	};

	const drawSheet = (bitmap, x) => {
		if (!bitmap || bitmap.width < 2) {
			ctx.fillStyle = PAPER;
			ctx.fillRect(x, 0, pageWidth, pageHeight);
			return;
		}

		ctx.drawImage(bitmap, x, 0, pageWidth, pageHeight);
	};

	const drawSpread = (index) => {
		const spread = spreads[index];

		if (!spread) return;

		drawSheet(sheet(spread[0]), 0);
		drawSheet(sheet(spread[1]), pageWidth);
	};

	const drawCurl = () => {
		const curl = computeCurl(cornerPoint(flipping.progress, pageWidth, pageHeight), pageWidth, pageHeight);

		drawSpread(spreadIndex);

		if (!curl) {
			drawSpine(ctx, pageWidth, pageHeight);
			return;
		}

		const direction = flipping.direction;
		const clips = clipsFor(curl, pageWidth, pageHeight);
		const rotation = direction === "forward" ? -curl.angle : curl.angle;
		const anchor = direction === "forward" ? curl.rect.topLeft : curl.rect.topRight;
		const bottomAnchor = direction === "forward" ? { x: 0, y: 0 } : { x: pageWidth, y: 0 };
		const target = flipping.direction === "forward" ? spreadIndex + 1 : spreadIndex - 1;
		const targetSpread = spreads[target];

		if (!targetSpread) return;

		const flippingBitmap = direction === "forward" ? sheet(targetSpread[0]) : sheet(targetSpread[1] ?? targetSpread[0]);
		const bottomBitmap = direction === "forward" ? sheet(targetSpread[1] ?? targetSpread[0]) : sheet(targetSpread[0]);

		drawShaped(ctx, bottomBitmap, clips.bottom, bottomAnchor, 0, direction, pageWidth, pageHeight);
		shadeFold(ctx, curl, direction, pageWidth, pageHeight, "cast");
		drawSpine(ctx, pageWidth, pageHeight);
		drawShaped(ctx, flippingBitmap, clips.flipping, anchor, rotation, direction, pageWidth, pageHeight);
		ctx.save();
		trace(ctx, clips.flipping, (point) => toGlobal(point, direction, pageWidth));
		ctx.clip();
		shadeFold(ctx, curl, direction, pageWidth, pageHeight, "crease");
		ctx.restore();
	};

	const draw = () => {
		const rect = canvas.getBoundingClientRect();
		const nextWidth = rect.width / 2;
		const nextHeight = rect.height;
		const nextDpr = Math.min(window.devicePixelRatio || 1, 2);

		if (nextWidth < 2 || nextHeight < 2) return;

		const pixelWidth = Math.max(1, Math.round(rect.width * nextDpr));
		const pixelHeight = Math.max(1, Math.round(rect.height * nextDpr));
		const sizeChanged = Math.abs(nextWidth - pageWidth) > 0.5 || Math.abs(nextHeight - pageHeight) > 0.5 || canvas.width !== pixelWidth || canvas.height !== pixelHeight;

		pageWidth = nextWidth;
		pageHeight = nextHeight;
		dpr = nextDpr;

		if (sizeChanged) {
			canvas.width = pixelWidth;
			canvas.height = pixelHeight;
			paintAll();
		}

		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, rect.width, rect.height);
		ctx.fillStyle = PAPER;
		ctx.fillRect(0, 0, rect.width, rect.height);

		if (flipping) drawCurl();
		else {
			drawSpread(spreadIndex);
			drawSpine(ctx, pageWidth, pageHeight);
		}
	};

	const updateControls = () => {
		if (counter) counter.textContent = `${spreadIndex + 1} / ${spreads.length}`;
		if (btnPrev) btnPrev.disabled = spreadIndex === 0 || Boolean(flipping);
		if (btnNext) btnNext.disabled = spreadIndex >= spreads.length - 1 || Boolean(flipping);
	};

	const stop = () => {
		if (!frameId) return;
		cancelAnimationFrame(frameId);
		frameId = 0;
	};

	const finish = () => {
		if (!flipping) return;
		spreadIndex += flipping.direction === "forward" ? 1 : -1;
		flipping = null;
		stop();
		updateControls();
		draw();
	};

	const tick = (now) => {
		if (!flipping) return;

		const progress = Math.min(1, (now - flipping.startedAt) / FLIP_MS);
		flipping.progress = easeInOut(progress);
		draw();

		if (progress < 1) {
			frameId = requestAnimationFrame(tick);
			return;
		}

		finish();
	};

	const turn = (direction) => {
		if (flipping) return;

		const nextIndex = spreadIndex + direction;

		if (nextIndex < 0 || nextIndex >= spreads.length) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			spreadIndex = nextIndex;
			updateControls();
			draw();
			return;
		}

		flipping = {
			direction: direction > 0 ? "forward" : "back",
			progress: 0,
			startedAt: performance.now(),
		};

		updateControls();
		frameId = requestAnimationFrame(tick);
	};

	const onKeyDown = (event) => {
		if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
		event.preventDefault();
		turn(event.key === "ArrowRight" ? 1 : -1);
	};

	if (btnNext) btnNext.addEventListener("click", () => turn(1));
	if (btnPrev) btnPrev.addEventListener("click", () => turn(-1));
	root.addEventListener("keydown", onKeyDown);

	const observer = new ResizeObserver(() => draw());
	observer.observe(stage);

	updateControls();
	draw();

	Promise.all(specs.map((spec) => loadImage(spec.src))).then((loaded) => {
		loaded.forEach((image, index) => {
			images[index] = image;
		});
		paintAll();
		draw();
	});

	document.fonts.ready.then(() => {
		paintAll();
		draw();
	});

	return {
		next: () => turn(1),
		prev: () => turn(-1),
		destroy: () => {
			stop();
			observer.disconnect();
			root.removeEventListener("keydown", onKeyDown);
			delete root.dataset.bookReady;
		},
	};
};

if (typeof window !== "undefined") {
	window.initBook = initBook;

	if (document.querySelector("[data-book]")) {
		document.querySelectorAll("[data-book]").forEach((node) => initBook(node));
	}
}
