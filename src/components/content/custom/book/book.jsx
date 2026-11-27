import { Block } from '../../../block/block.jsx';
import { Block_Head } from '../../../block/_ui/block--head/block--head.jsx';
import { Button } from '../../../_ui/button/button.jsx';


const pages = [
  {
    title: 'Наследие и идея',
    image: '/assets/img/book/1.jpg',
    copy: () => (
      <>
        <p>
          Отель «Ногай» расположен в историческом здании Дома печати — объекте культурного наследия. Здание выглядит как
          раскрытая книга — именно эта метафора формирует логику всех пространственных, сервисных и эмоциональных
          решений.
        </p>
        <p>
          Проект реализует модель иммерсивного культурного гостеприимства, в которой отель перестаёт быть
          инфраструктурой размещения и становится живым медиатором между историей, литературой и современным опытом
          гостя.
        </p></>
    ),
  },
  {
    title: 'Пространство как текст, который можно прочитать',
    image: '/assets/img/book/2.jpg',
    copy: () => (
      <>
        <p>Каждый элемент интерьера работает как часть единого нарратива.</p>
        <p>Раскрытая книга на ресепшен создает момент первого «прочтения» отеля, а цитаты писателей формируют «живую
          среду текста» в общественных зонах.</p>
      </>
    ),
  },
  {
    title: 'Новые креативные сценарии гостевого опыта',
    image: '/assets/img/book/3.jpg',
    copy: () => (
      <>
        <p>Персональная глава гостя. Гость получает индивидуальный литературный текст, отражающий его сценарий
          пребывания.</p>
        <p>Письмо из дома печати. Эмоциональный вход в историю здания через обращение писателей эпохи 1930-х.</p>
      </>
    ),
  },
  {
    title: 'Новые креативные сценарии гостевого опыта',
    image: '/assets/img/book/4.jpg',
    copy: () => (
      <>
        <p>Креативная традиция.«Папка гостя» выполнена в формате газеты, продолжая типографскую идентичность здания.</p>
        <p>Наследие в каждом номере. Анталогия произведений авторов, связанных с литераторной Казанью, доступна во всех
          номерах.</p>
      </>
    ),
  },
  {
    title: 'Интерактивное наследие Дома печати',
    image: '/assets/img/book/5.webp',
    copy: () => (
      <>
        <p>Печатная машинка 1926 года как осязаемый артефакт; </p>
        <p>Ниткошвейная машина, ранее использовавшаяся для создания книги; </p>
        <p>Мультимедийные панели с архивами и историей здания; </p>
        <p>Художественные работы, отражающие Казань <span>1920-х</span> годов;</p>
      </>
    ),
  },

  {
    title: 'Культурное осмысление исторического здания',
    image: '/assets/img/book/6.webp',
    copy: () => (
      <>
        <p>Отель “Ногай” расположен в историческом здании Дома печати и сохраняет его культурное наследие как важную часть городской истории.</p>
        <p><i>Для Ногая история — не декорация, а основа концепции.</i></p>
        <p>Отель соединяет прошлое и современность, создавая культурное пространство с уважением к&nbsp;памяти места и его
          значению для города.</p>
      </>
    ),
  },
];

export const Book = () => {
  return (
    <Block title={
      <Block_Head title={'ногай: отель в доме <br>печати'}></Block_Head>} className={'-theme-accent -centered content_book'}>
      <div class="book">
        <div class="book--stage">
          <div class="book--stack"></div>
          <div class="book--stack -right"></div>
          <canvas class="book--canvas" role="presentation"></canvas>
          <div class="book--hit" aria-hidden="true"></div>
          <div class="book--sources">
            {pages.map((page) => (
              <div class="page" key={page.image}>
                <h3>{page.title}</h3>
                <img src={page.image} alt="" />
                <div class="page--copy">{page.copy()}</div>
              </div>
            ))}
            {/*<div class="page">*/}
            {/*  <img src="/assets/img/book/last.webp" alt="" />*/}
            {/*</div>*/}
          </div>
        </div>
        <div class="book--notes swiper">
          <div class="swiper-wrapper">
            {pages.map((page) => (
              <div class="swiper-slide" key={page.image}>
                {page.copy()}
              </div>
            ))}
          </div>
        </div>
        <div class="book--controls">
          <Button type={'filled-primary'} icon={'icon-ic-chevron-left'} data-prev aria-label="Предыдущий разворот"></Button>
          <Button type={'filled-primary'} icon={'icon-ic-chevron-right'} data-next aria-label="Следующий разворот"></Button>
        </div>
      </div>
    </Block>
  );
};
