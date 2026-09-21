import {Button} from "../../../_ui/button/button.jsx";

export const Block_Sidebar = () => {
  return (
    <div class={'block--sidebar'}>
      <div class={'is_cascade'}>
        <h6>Заработная плата</h6>
        <p>65 000 ₽ на руки</p>
        <h6>Занятость</h6>
        <p>Полная</p>
        <ul>
          <li>График 5/2</li>
          <li>Питание</li>
          <li>Медицинское обслуживание</li>
        </ul>
        <Button type={'filled'} color={'accent '}>Оставить резюме</Button>
      </div>
    </div>
  )
}

export const Block_sidebar_blog = () =>{
  return (
    <div className={'block--sidebar'}>
      <div className={'is_cascade'}>
        <h6>Содержание</h6>
        <p>Egestas cursus porttitor id egestas senectus feugiat at id integer. </p>
        <div className="icon-list">
          <a href={'#title'} className="item">
            <div className="icon"></div>
            <div className="text">
              <p>Архитектура, растворяющаяся в пейзаже</p>
            </div>
          </a>
          <a href={'#ul'} className="item">
            <div className="icon"></div>
            <div className="text">
              <p>Ключевые особенности нового спа</p>
            </div>
          </a>
          <a href={'#blockquote'} className="item">
            <div className="icon"></div>
            <div className="text">
              <p>Заголовок энного уровня</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
