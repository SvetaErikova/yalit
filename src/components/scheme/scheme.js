const blockScheme = document.querySelectorAll('.content_scheme');
const SCHEME_WIDTH = 1920;


// Перенести для только авторизовавшихся в админке
function copiedCoord() {
  let scheme_svg = document.querySelector('.content_scheme .scheme_svg svg');
  scheme_svg.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'image') return;

    let _point = scheme_svg.createSVGPoint();

    _point.x = e.clientX;
    _point.y = e.clientY;

    _point = _point.matrixTransform(scheme_svg.getScreenCTM().inverse());
    let coords = Math.round(_point.x) + ',' + Math.round(_point.y);

    console.log('Copied is done!', coords);
  });
}

blockScheme.forEach((block) => {
  let scheme = block.querySelector('.scheme_svg');
  let schemeSvg = scheme?.querySelector('svg');

  if (!scheme || !schemeSvg) {
    return;
  }

  let placemarks = scheme.querySelectorAll('.placemark');
  let syncTooltipPositions = [];

  function getCoeff() {
    return schemeSvg.getBoundingClientRect().width / SCHEME_WIDTH;
  }

  placemarks.forEach((pm) => {
    let tooltip = document.createElement('div');
    let tooltipTitle = document.createElement('p');
    let title = pm.dataset.title ?? '';
    let pin = pm.querySelector('use');

    scheme.append(tooltip);
    tooltip.append(tooltipTitle);
    tooltip.dataset.popup_cascade = pm.dataset.popup_cascade;
    // tooltip.dataset.openpopup = pm.dataset.openpopup;

    tooltip.classList.add('scheme--tooltip');
    tooltipTitle.textContent = title;

    function syncTooltipPosition() {
      let coeff = getCoeff();
      let pinX = Number(pin?.getAttribute('x') ?? 0);
      let pinY = Number(pin?.getAttribute('y') ?? 0);
      let pinWidth = Number(pin?.getAttribute('width') ?? 0);
      let pinHeight = Number(pin?.getAttribute('height') ?? 0);
      let anchorX = (pinX + (pinWidth / 2)) * coeff;
      let anchorY = pinY * coeff;
      let isRightSide = pinX > SCHEME_WIDTH / 2;

      tooltip.classList.toggle('is_right', isRightSide);
      tooltip.style.left = `${anchorX}px`;
      tooltip.style.top = `${anchorY}px`;
      tooltip.style.setProperty('--scheme-pin-height', `${pinHeight * coeff}px`);
    }

    syncTooltipPosition();
    syncTooltipPositions.push(syncTooltipPosition);

    pm.addEventListener('mouseenter', () => {
      syncTooltipPosition();
      tooltip.classList.add('is_active');
    });

    pm.addEventListener('mouseleave', () => {
      tooltip.classList.remove('is_active');
    });
  });

  window.addEventListener('resize', () => {
    syncTooltipPositions.forEach((syncTooltipPosition) => {
      syncTooltipPosition();
    });
  });

  // scroll scheme start
  const syncMiniMap = () => {
    const { clientWidth, scrollLeft, scrollWidth } = scheme;

    if (!scrollWidth || !clientWidth) {
      return;
    }
    const maxScroll = Math.max(scrollWidth - clientWidth, 0);
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    const visibleWidthRatio = Math.min(clientWidth / scrollWidth, 1);
    const visibleLeftRatio = Math.min(scrollLeft / scrollWidth, 1);
    const visibleRightRatio = Math.min(visibleLeftRatio + visibleWidthRatio, 1);

    block.style.setProperty('--scheme_progress', `${progress}`);
    block.style.setProperty('--scheme-mini-left', `${visibleLeftRatio * 100}%`);
    block.style.setProperty('--scheme-mini-right', `${visibleRightRatio * 100}%`);
    block.style.setProperty('--scheme-mini-width', `${visibleWidthRatio * 100}%`);
  };

  const centerSchemeOnLoad = () => {
    if (!window.matchMedia('(max-width: 575px)').matches) {
      return;
    }

    const maxScroll = Math.max(scheme.scrollWidth - scheme.clientWidth, 0);
    scheme.scrollLeft = maxScroll / 2;
    syncMiniMap();
  };

  if (window.matchMedia('(max-width: 768px)').matches) {
    syncMiniMap();
    scheme.addEventListener('scroll', syncMiniMap, { passive: true });
    window.addEventListener('resize', syncMiniMap);
  }

  requestAnimationFrame(() => {
    centerSchemeOnLoad();
  });

  copiedCoord();
//   scroll scheme end
});


