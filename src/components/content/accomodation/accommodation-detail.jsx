import { Block } from '../../block/block.jsx';
import { Gallery } from '../../gallery/gallery-comp.jsx';
import { Button } from '../../_ui/button/button.jsx';

export const AccommodationDetails = () =>{
  return (
    <Block className={'block-detail content_accommodation'}>
     <div class={'accommodation_content is_cascade'}>
       <Gallery
         isSlider={true}
         images={[
           {src: '../../assets/img/1.jpg'},
           {src: '../../assets/img/2.jpg'},
           {src: '../../assets/img/4.jpg', video: '../../assets/video/@lepragram.mp4'},
         ]}
       ></Gallery>
       <p>В интерьере виллы искусно сочетаются различные стили — от современной классики до хай-тека.</p>
       <p>Пространство разделено на уровни и зоны, а концептуальный дизайн каждого помещения оптимально соответствует своему предназначению.</p>
       <p>Мрамор, дерево, насыщенные акценты и сложные элементы декора создают в гостиной роскошную атмосферу. Технологичная кухня восхищает функциональностью. В элегантных светлых спальнях уютно и тихо — ничто не помешает вашему отдыху.</p>
       <p>Персональный батлер позаботится о всех деталях вашего отдыха, предугадывая ваши желания и оставаясь незаметным, чтобы вы могли наслаждаться каждым мгновением. Система «Умный дом» создаст идеальные условия для пребывания на вилле.</p>
       <p>Мрия СПА с финской сауной, зоной отдыха с джакузи, хамамом и тренажерным залом выполнен из природных и современных материалов.
         На обширной территории виллы терраса с шезлонгами, частный бассейн и личный выход в Японский сад.
         Панорамные окна президентской виллы покажут вам вид на Черное Море и горы Крыма. </p>
       <p>Почему бы вам не насладиться красочным закатом прямо из гостиной или террасы вашей президентской виллы?</p>
     </div>
     <div class={'accommodation_sidebar'}>
       <div className="accommodation_sidebar--sticky">
         <div className="list-table">
           <div className="item">
             <p>площадь</p>
             <span>618  м2</span>
           </div>
           <div className="item">
             <p>вместительность</p>
             <span>До 8‑ми человек (также можно разместить до 4‑х детей до 3‑х лет включительно)</span>
           </div>
           <div className="item">
             <p>Тип питания</p>
             <span>Определяется в зависимости от тарифа</span>
           </div>
           <div className="item">
             <p>Вид из окна</p>
             <span>Море/горы</span>
           </div>
           <div className="item">
             <p>Удобства</p>
             <span>весь список</span>
           </div>
         </div>
         <div className="block--actions">
           <Button type={'filled-primary'} icon={'icon-ic-uniq-arrow-right'}>забронировать</Button>
         </div>
       </div>
     </div>
    </Block>
  )
}
