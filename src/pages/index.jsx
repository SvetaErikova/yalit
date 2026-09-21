import { Button } from "../components/_ui/button/button.jsx";
import MainLayout from "../layouts/MainLoyout.jsx";
import { metaPages } from "../shared/meta-pages";

export default function Home() {
	return (
		<MainLayout meta={metaPages.home}>
			<section className="block dev-nav" style={{ margin: "2em 0" }}>
				<div className="block--wrapper">
					<h1>Pages</h1>
					<div style={'display: flex; gap: 16px; flex-wrap: wrap;'}>
						<Button link={"/main"} >
							Главная
						</Button>
            <Button color={'brand'} link={"/ticket"} >
              Билеты
            </Button>
            <Button  color={'brand'} link={"/tea"} >
              чайные церемонии
            </Button>
            <Button  color={'brand'} link={"/onsen"} >
              Онсен
            </Button>
            <Button  color={'brand'} link={"/rent"} >
              аренда кимоно
            </Button>
            <Button  link={"/excursions"} >
              экскурсии
            </Button>
            <Button  link={"/certificate"} >
              сертификат
            </Button>
            <Button link={"/accommodation-detail"} >
              Проживание детальная
            </Button>
            <Button link={"/all-inclusive"} >
              Все включено
            </Button>
            {/*<Button link={"/spa"} >*/}
            {/*  SPA*/}
            {/*</Button>*/}
            <Button link={"/about"} >
              Об отеле
            </Button>
            <Button link={"/contacts"} >
              Контакты
            </Button>
            <Button link={"/events"} >
              афиша разводящая
            </Button>
            <Button link={"/events-detail"} >
              афиша детальная
            </Button>
            <Button link={"/organization"} >
              организация мероприятий
            </Button>
            <Button link={"/documentation"} >
              Документы
            </Button>
            <Button link={"/calendar"} >
              Календарь цветения
            </Button>
						<Button link={"/faq"} >
							FAQ
						</Button>
            {/*<Button link={"/backend/maps"} >*/}
            {/*  Карты*/}
            {/*</Button>*/}
            <Button link={"/scheme"} >
              Карта
            </Button>
            <Button  link={"/article"} >
              article
            </Button>
						<Button link={"/404"} >
							404
						</Button>
						<Button link={"/500"} >
							500
						</Button>
            <div className={'page-fest'}>
              <Button link={"/festival"} color={'brand'}>
                Фестиваль сакуры
              </Button>
            </div>
					</div>

					<h2>DEV</h2>
          <div style={'display: flex; gap: 16px; flex-wrap: wrap;'}>
						<Button link={"/backend/buttons"} >
							Buttons
						</Button>
						<Button link={"/backend/cascade"} >
							Каскад
						</Button>
						<Button link={"/backend/banner"} >
							Баннеры
						</Button>
            <Button link={"/backend/color-mode"} >
              Цветовые темы
            </Button>
						<Button link={"/backend/image-text"} >
							Картинка текст
						</Button>
						<Button link={"/backend/gallery"} >
							Галерея
						</Button>
						<Button link={"/backend/list"} >
							Списки
						</Button>
            <Button link={"/backend/element"} >
              Элементы
            </Button>
						<Button link={"/backend/html-code"} >
							html code
						</Button>
						<Button link={"/backend/form"} >
							Форма
						</Button>
						<Button popup={"popup_for_form"} >
							Попап форм
						</Button>
            <Button popup={"popup_for_cascade"} >
              Попап каскад
            </Button>
            <Button popup={"popup_for_cookies"} >
              Попап cookies
            </Button>
            <Button popup={"popup_for_room_advantages"} >
              popup_for_room_advantages
            </Button>
					</div>
				</div>
			</section>
		</MainLayout>
	);
}
