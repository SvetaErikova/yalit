import { Block } from '../../block/block.jsx';
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';
import { Button } from '../../_ui/button/button.jsx';

export const Accommodation = () =>{
  return (
    <Block className={'content_accommodation block_element'}
    title={<Block_Head subtitle={'ポスター'} title={'Проживание'}></Block_Head>}>
      <div class="block--image">
        <img src="/assets/img/1.jpg" alt="" />
      </div>
      <div class="block--elements">
        <Card_accommodation_accordion title={'Императорская вилла'} images={[{image: '/assets/img/1.jpg'}, {image: '/assets/img/1.jpg'}, {image: '/assets/img/1.jpg'}]} text={'Роскошь, приватность и комфорт Императорской виллы превосходят ожидания. Композиционные решения интерьера и грандиозные окна визуально еще больше раздвигают пространство, наполняя его воздухом и светом.'}></Card_accommodation_accordion>
        <Card_accommodation_accordion title={'Имение  Сёгуна'} images={[{image: '/assets/img/1.jpg'}, {image: '/assets/img/1.jpg'}, {image: '/assets/img/1.jpg'}]} text={'Пространство разделено на уровни и зоны, а концептуальный дизайн каждого помещения оптимально соответствует своему предназначению.\n' +
          'Мрамор, дерево, насыщенные акценты и сложные элементы декора создают в гостиной роскошную атмосферу. Технологичная кухня восхищает функциональностью. В элегантных светлых спальнях уютно и тихо — ничто не помешает вашему отдыху.'}></Card_accommodation_accordion>
        <Card_accommodation_accordion title={'Президентская вилла'} images={[{image: '/assets/img/1.jpg'}, {image: '/assets/img/1.jpg'}, {image: '/assets/img/1.jpg'}]} text={'Роскошь, приватность и комфорт Императорской виллы превосходят ожидания. Композиционные решения интерьера и грандиозные окна визуально еще больше раздвигают пространство, наполняя его воздухом и светом.'}></Card_accommodation_accordion>

      </div>

    </Block>
  )
}

const Card_accommodation_accordion = ({ title, images, text }) => {
  return (
    <div class="item">
      <div class="item--title">
        <p>{title}</p>
        <span class="icon-ic-plus"></span>
      </div>
      <div class="item--content">
        <div class="item--content_inner">
          <div class="item--images">
            {images.length > 0 &&
              images.map((img, index) => (
                <div className={'item--image'}>
                  <img
                    key={index}
                    className={'item--image'}
                    src={img.image || img.src}
                    alt=""
                    loading="lazy"
                  />
                </div>

              ))}
          </div>
          <div class="item--text">{text}</div>
          <div class="block--actions">
            <Button link={'/accommodation-detail.html'} type="outlined" color="neutral" icon="icon-ic-uniq-arrow-right">
              подробнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
