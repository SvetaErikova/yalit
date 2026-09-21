import { Gallery } from '../../gallery/gallery-comp.jsx';
import {Button} from "../button/button.jsx";
import {Accordion_full} from "../accordion/accordion-full.jsx";

export const Is_cascade_mini = () => {
  return (
    <div className={'is_cascade'}>
      <figure>
        <img src="/assets/img/1.jpg" alt=""/>
        <figcaption>Подпись к картинке</figcaption>
      </figure>
      <h2>Все еще нереально крутой тайтл</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
        voluptatem.</p>
      <div className="icon-list">
        <div className="item">
          <div className="icon">
            <span className="icon-broken-clouds"></span>
          </div>
          <div className="text">
            <p>Title (optional)</p>
            <span>Warning message</span>
          </div>
        </div>
      </div>
      <h2>Частые вопросы</h2>
      <Accordion_full/>
      <div class="block--actions">
        <Button type='filled-primary' color='neutral'>Подробнее</Button>
      </div>

      <h2>Очень крутой тайтл</h2>
      <img src='/assets/img/1.jpg' alt=""/>
      <blockquote className='blockquote' id={'blockquote'}>
        <div className="blockquote--decor"></div>
        <div className="blockquote--text">
          <p>Figma ipsum component variant main layer. Project link image bold arrow stroke. Horizontal connection
            stroke pencil duplicate.</p>
          <span>Константин Константинопольский</span>
        </div>
      </blockquote>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
        <ol>
          <li>subitem</li>
        </ol>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
      </ol>
      <h2>Все еще нереально крутой тайтл</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
        voluptatem.</p>
      <h2>Все еще нереально крутой тайтл</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
        voluptatem.</p>
    </div>
  );
};
