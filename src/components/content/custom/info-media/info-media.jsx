import { Block } from '../../../block/block.jsx';
import { Block_Head } from '../../../block/_ui/block--head/block--head.jsx';
import { Button } from '../../../_ui/button/button.jsx';

export const InfoMedia = ({theme}) => {
  return(
    <Block className={'info-media -theme-neutral'}>
      <div class="block--content">
        <Block_Head title={'Попробуйте всё'}></Block_Head>
        <div class="is_cascade">
          <p>Отель предоставляет всё необходимое для качественной работы и комфортного отдыха каждого гостя. Проводите встречи, презентации и тренинги в конференц-залах или переговорной комнате — здесь просторные помещения и необходимая аудио — и видеотехника (в том числе большие светодиодные экраны).</p>
          <p>В отеле работают три уникальных ресторана, каждый из которых подходит как для важной бизнес-встречи, так и для уютного романтического ужина. Если у вас свадьба, корпоратив или день рождения, мы зарезервируем просторный ресторан с панорамными окнами, чтобы вы могли погрузиться в мероприятие в приватной обстановке, почувствовать простор и сделать невероятные снимки.</p>
          <Button type={'filled-accent'}>забронировать</Button>
        </div>
      </div>
      <div class="block--media">
        <div class="item">
          <img src="/assets/img/1.jpg" alt="" />
        </div>
        <div class="item">
          <img src="/assets/img/1.jpg" alt="" />
        </div>
      </div>
    </Block>
  )
}
