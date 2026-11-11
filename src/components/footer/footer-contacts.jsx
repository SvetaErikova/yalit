import { Button } from '../_ui/button/button.jsx';

export const FooterContacts =() =>{
  return(
    <div className="footer--contacts">
      <div class="footer--contacts_title">связаться с нами</div>
      <div  class="footer--contacts_list">
        <Button type={'link'} link={'/'} icon={'icon-ic-phone'} icon_left={true}>+7 999 999 99 99</Button>

        <Button type={'link'} link={'/'} icon={'icon-ic-envelope'} icon_left={true}>yalit_hotels@mail.ru</Button>
      </div>

    </div>
  )
}
