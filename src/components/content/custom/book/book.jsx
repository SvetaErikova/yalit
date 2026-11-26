import { Block } from '../../../block/block.jsx';
import { Block_Head } from '../../../block/_ui/block--head/block--head.jsx';
import { Button } from '../../../_ui/button/button.jsx';

const pageText = (
  <>
    Отель «Ногай» расположен в историческом здании Дома печати — объекте культурного наследия. Здание выглядит как раскрытая книга — именно эта метафора формирует логику всех пространственных, сервисных и эмоциональных решений.
    <br />
    Проект реализует модель иммерсивного культурного гостеприимства, в которой отель перестаёт быть инфраструктурой размещения и становится живым медиатором между историей, литературой и современным опытом гостя.
  </>
);

const pages = [0, 1, 2, 3];

export const Book = () => {
  return (
    <Block title={<Block_Head title={'ногай: отель в доме <br>печати'}></Block_Head>} className={'-theme-accent -centered content_book'}>
      <div class="book">
        <div class="book--stage">
          <div class="book--stack"></div>
          <div class="book--stack -right"></div>
          <canvas class="book--canvas" role="presentation"></canvas>
          <div class="book--sources">
            {pages.map((index) => (
              <div class="page" key={index}>
                <h3>Наследие и идея</h3>
                <img src="/assets/img/1.jpg" alt="" />
                <p>{pageText}</p>
              </div>
            ))}
          </div>
        </div>
        <div class="book--notes swiper">
          <div class="swiper-wrapper">
            {pages.map((index) => (
              <div class="swiper-slide" key={index}>
                <p>{pageText}</p>
              </div>
            ))}
          </div>
        </div>
        <div class="book--controls">
          <Button type={'filled-secondary'} icon={'icon-ic-chevron-left'} data-prev disabled aria-label="Предыдущий разворот"></Button>
          <Button type={'filled-secondary'} icon={'icon-ic-chevron-right'} data-next aria-label="Следующий разворот"></Button>
        </div>
      </div>
    </Block>
  );
};
