/**
 * OverflowNav — чистый модуль динамического меню с пунктом «Ещё». Используется для перераспределения элементов меню при изменении ширины окна.
 *
 * @param {Object} options - настройки
 * @param {number} options.comfortCount - количество элементов в запасе (default: 1)
 * @param {number} options.debounce - debounce для перераспределения (default: 0)
 * @param {Object} options.selectors - селекторы (default: { root: "[data-js-nav]", more: "[data-js-more]", dropdown: "[data-js-dropdown]" })
 * @param {Function} options.changeItemFn - функция для изменения элемента (default: null)
 * @param {boolean} options.autoInit - автоматически инициализировать (default: true)
 */
export class OverflowNav {
  constructor(options = {}) {
    // дефолтные настройки
    const defaults = {
      comfortCount: 0,
      debounce: 1,
      rootElement: null,
      selectors: {
        root: ".header .nav",
        more: ".header .nav--item-more",
      },
      changeItemFn: null,
      autoInit: true,
    };
    this.opts = Object.assign({}, defaults, options);

    // поиск элементов
    this.root = this.opts.rootElement || document.querySelector(this.opts.selectors.root);
    if (!this.root) throw new Error("[OverflowNav] Root element not found");
    this.more = this.root.querySelector(this.opts.selectors.more);
    if (!this.more) throw new Error("[OverflowNav] Missing elements");

    // состояние
    this._ro = null;
    this._boundSchedule = null;
    this._onLoad = null;
    this._inited = false;

    if (this.opts.autoInit) this.init();
  }

  // инициализация
  init() {
    if (this._inited) return this;
    const schedule =
      this.opts.debounce > 0
        ? this._debounce(() => this.redistribute(), this.opts.debounce)
        : () => this.redistribute();
    this._boundSchedule = schedule;

    this._ro = new ResizeObserver(() => schedule());
    this._ro.observe(this.root);
    if (this.root.parentElement) {
      this._ro.observe(this.root.parentElement);
    }
    window.addEventListener("resize", schedule);
    this._onLoad = () => this.redistribute();
    window.addEventListener("load", this._onLoad);

    this.redistribute();
    this._inited = true;
    return this;
  }

  // уничтожение
  destroy() {
    if (!this._inited) return this;
    if (this._ro) {
      try {
        this._ro.disconnect();
      } catch (e) {}
      this._ro = null;
    }
    if (this._boundSchedule)
      window.removeEventListener("resize", this._boundSchedule);
    if (this._onLoad) window.removeEventListener("load", this._onLoad);

    this._children().forEach((el) => {
      el.hidden = false;
      this._change(el, false);
    });

    this.more.hidden = true;
    this._inited = false;
    return this;
  }

  // утилиты
  _debounce(fn, ms) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, a), ms);
    };
  }
  _children() {
    return Array.from(this.root.children).filter((el) => el !== this.more);
  }
  _outerWidth(el) {
    return el.getBoundingClientRect().width;
  }
  _menuGap() {
    const cs = getComputedStyle(this.root);
    return parseFloat(cs.gap) || 0;
  }
  _change(el, hidden) {
    if (typeof this.opts.changeItemFn === "function")
      this.opts.changeItemFn(el, {
        hidden,
        direction: hidden ? "toOverflow" : "toMain",
      });
  }

  // перераспределение элементов
  redistribute() {
    // вернуть видимость всем пунктам
    this._children().forEach((el) => {
      el.hidden = false;
      this._change(el, false);
    });

    const available = Math.floor(this.root.getBoundingClientRect().width);
    const gap = this._menuGap();
    this.root.appendChild(this.more);
    this.more.hidden = false;
    const moreW = this._outerWidth(this.more);

    const items = this._children().filter((el) => !el.hidden);
    const widths = items.map(
      (el, i) => this._outerWidth(el) + (i > 0 ? gap : 0),
    );
    const total = widths.reduce((a, b) => a + b, 0);

    if (total <= available) {
      this.more.hidden = true;
      return;
    }

    let used = 0,
      last = -1;
    for (let i = 0; i < items.length; i++) {
      const w = widths[i];
      const cap = available - moreW - gap;
      if (used + w <= cap) {
        used += w;
        last = i;
      } else break;
    }

    for (let j = last + 1; j < items.length; j++) {
      const el = items[j];
      el.hidden = true;
      this._change(el, true);
    }

    // запас
    const comfort = Math.max(0, Number(this.opts.comfortCount || 0));
    for (let k = 0; k < comfort; k++) {
      const still = this._children().filter((el) => !el.hidden);
      const lastEl = still[still.length - 1];
      if (lastEl && lastEl !== this.more) {
        lastEl.hidden = true;
        this._change(lastEl, true);
      }
    }

    const hiddenItems = this._children().filter((el) => el.hidden);
    this.more.hidden = hiddenItems.length === 0;
  }
}
