import { Accordion_full } from '../accordion/accordion-full.jsx';
import { Gallery } from '../../gallery/gallery-comp.jsx';

export const Is_cascade_full = () => {
  return (
    <div className={'is_cascade'}>
      <h1 >Заголовок первого уровня</h1>
      <h2>Заголовок второго уровня</h2>
      <h3>Заголовок третьего уровня</h3>
      <h4>Заголовок четвертого уровня</h4>
      <h5>Заголовок пятого уровня</h5>
      <h6>Заголовок шестого уровня</h6>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur iste iure, molestiae nihil perferendis
        possimus praesentium quasi reprehenderit sed sunt tempore vero! <a href="" target="_blank">ссылка </a><b> bold</b></p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
        voluptatem.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque enim impedit in laboriosam nam
        necessitatibus rerum. A fugiat reiciendis repellendus rerum tempore totam unde voluptate.</p>
      <ul >
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
          <ul>
            <li>subitem</li>
          </ul>
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores et nisi quasi quis reprehenderit
          voluptatem.
        </li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos, laboriosam minima modi sapiente
        voluptates? <a href={''}>Ссылка</a></p>
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
      <blockquote className='blockquote' id={'blockquote'}>
        <div className="blockquote--decor"></div>
        <div className="blockquote--text">
          <p>Figma ipsum component variant main layer. Project link image bold arrow stroke. Horizontal connection stroke pencil duplicate.</p>
          <span>Константин Константинопольский</span>
        </div>
      </blockquote>
      <figure>
        <img src="/assets/img/1.jpg" alt=""/>
        <figcaption>Подпись к картинке</figcaption>
      </figure>
      <div className="is_cascade--table">
        <table>
          <thead>
          <tr>
            <td>Услуга</td>
            <td>Цена</td>
            <td>Место</td>
            <td>Для детей</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Программа 1</td>
            <td>1200</td>
            <td>Медицинский центр</td>
            <td>Да</td>
          </tr>
          <tr>
            <td>Программа 2</td>
            <td>1300</td>
            <td>SPA</td>
            <td>Нет</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="list-table">
        <div className="item">
          <p>групповая взрослый</p>
          <span>2 500 ₽ </span>
        </div>
        <div className="item">
          <p>групповая детский</p>
          <span>1 250 ₽ </span>
        </div>
        <div className="item">
          <p>индивидуальная<br></br>
            взрослый, до 4-х человек</p>
          <span>12 000 ₽ </span>
        </div>
        <div className="item">
          <p>индивидуальная +<br></br>
            взрослый, до 4-х человек</p>
          <span>16 000 ₽ </span>
        </div>
        <div className="item">
          <p>групповая (льготный)</p>
          <span>1 600 ₽ </span>
        </div>
        <div className="item">
          <p>день рождения</p>
          <span>1 600 ₽ </span>
        </div>
      </div>

      <Accordion_full/>
      <Gallery
        isSlider={true}
        images={[
          {src: '../../assets/img/1.jpg'},
          {src: '../../assets/img/2.jpg'},
          {src: '../../assets/img/4.jpg', video: '../../assets/video/@lepragram.mp4'},
        ]}
      ></Gallery>
    </div>
  );
}
