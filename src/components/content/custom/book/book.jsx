import { Block } from "../../../block/block.jsx";

export const Book = () => {
	return (
		<Block className="-theme-accent" title="книга">
			<div className="book" data-book>
				<div className="book__stage">
					<canvas className="book__canvas" data-book-canvas />
				</div>

				<div className="book__pages">
					<article className="book__page" aria-hidden="true" />

					<article className="book__page">
						<h2 className="book__title">Наследие и идея</h2>
						<img className="book__img" src="/assets/img/1.jpg" alt="Историческое здание отеля" />
						<p className="book__text">
							Отель «Ногой» расположен в историческом здании Джалиля — объекте культурного наследия. Здание выстроено как раскрытая книга — именно эта метафора формирует логику всех пространственных,
							сервисных и эмоциональных решений.
						</p>
						<p className="book__text">
							Проект реализует модель инклюзивного культурного гостеприимства, в которой отель перестаёт быть инфраструктурой размещения и становится живым медиатором между историей, литературой и
							современным опытом гостя.
						</p>
					</article>

					<article className="book__page">
						<h2 className="book__title">Пространство</h2>
						<img className="book__img" src="/assets/img/2.jpg" alt="Двор и внутренние залы" />
						<p className="book__text">Разворот задаёт маршрут: слева тишина двора, справа свет внутренних залов. Переплёт держит вместе старую кладку и новые залы, не споря с масштабом здания.</p>
					</article>

					<article className="book__page">
						<h2 className="book__title">Гостеприимство</h2>
						<img className="book__img" src="/assets/img/1.jpg" alt="Залы отеля" />
						<p className="book__text">Сервис собран как оглавление: короткие сцены, понятный ритм и место для паузы. Гость читает дом не по номерам комнат, а по тому, как в нём встречают.</p>
					</article>

					<article className="book__page">
						<h2 className="book__title">Опыт гостя</h2>
						<img className="book__img" src="/assets/img/2.jpg" alt="Свет внутреннего двора" />
						<p className="book__text">Последние страницы оставляют послевкусие двора, бумаги и тёплого света. История не заканчивается на выходе — она остаётся тем, с чем гость уходит дальше.</p>
					</article>
				</div>

				<div className="book__controls">
					<button className="book__btn book__btn--prev" type="button" data-book-prev aria-label="Предыдущий разворот">
						<span className="book__btn-icon" />
					</button>
					<span className="book__counter" data-book-counter aria-live="polite" />
					<button className="book__btn book__btn--next" type="button" data-book-next aria-label="Следующий разворот">
						<span className="book__btn-icon" />
					</button>
				</div>
			</div>
		</Block>
	);
};
