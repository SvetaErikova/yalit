import {Button} from "../../../_ui/button/button.jsx";

export const Block_Sidebar = () => {
  return (
    <div class={'block--sidebar'}>
      <div class={'is_cascade'}>
        <img src="/assets/img/1.jpg" alt="" />
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
