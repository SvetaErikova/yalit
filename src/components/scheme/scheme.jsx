import { Block } from '../block/block.jsx';

export const Scheme = () =>{
  return (
    <Block className={'content_scheme'}>
      <div className="block--content">
        <div className="scheme_svg">
          <svg className="scheme" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <image xlinkHref="/assets/img/scheme/scheme.jpg"></image>
            {/* placemark */}
            <g className="placemark" data-title="Хостел" data-popup_cascade="469" >
              <use xlinkHref="#placemark" x="906" y="508" width="4" height="72"></use>
            </g>
            <g className="placemark" data-title="Горячие купели Онсэн" data-popup_cascade="469" >
              <use xlinkHref="#placemark" x="725" y="435" width="4" height="72"></use>
            </g>
            <g className="placemark" data-title="Попап каскад" data-openpopup="popup_for_cascade" >
              <use xlinkHref="#placemark" x="1223" y="481" width="4" height="72"></use>
            </g>
            <defs>
              <symbol viewBox="0 0 4 72" id="placemark" data-placemark-item="1">
                <rect width="4" height="36" fill="#E54A4A"/>
                <path d="M0 36H4V68.1429L2 72L0 68.1429V36Z" fill="#E54A4A"/>
              </symbol>
            </defs>
          </svg>
        </div>
        <div className="scheme-mini" aria-hidden="true">
          <img className="scheme-mini__image" src="/assets/img/scheme/scheme-mini.jpg" alt="" />
          <div className="scheme-mini__shade"></div>
          <div className="scheme-mini__viewport"></div>
        </div>
      </div>

    </Block>
  );
}
