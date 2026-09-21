export const FooterContacts =() =>{
  return(
    <div className="footer--contacts">
      <div class="footer--contacts_title">связаться с нами</div>
      <div  class="footer--contacts_list">
        <a className={'button'} href="tel: +7 999 999 99 99">
          <span className="icon-ic-phone"></span>
          <span>+7 999 999 99 99</span>

        </a>
        <a className={'button'} href="mailto: info@moskovskiy.ru">
          <span className="icon-ic-email"></span>
          <span>  info@moskovskiy.ru</span>

        </a>
      </div>

    </div>
  )
}
