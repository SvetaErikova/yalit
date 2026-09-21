export const FooterContacts =() =>{
  return(
    <div className="footer--contacts">
      <div>
        <p>ООО «МРИЯ. ПРО», ИНН 9103069850</p>
        <p>Сад находится на территории курорта Мрия</p>
        <p>Крым, Оползневое, Генерала Острякова 9</p>
      </div>
      <div>
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
