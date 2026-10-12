import { Form } from '../form/form-comp.jsx';
import { Is_cascade_mini } from '../_ui/is_cascade/is_cascade_mini.jsx';
import { Button } from '../_ui/button/button.jsx';
import { Nav } from '../nav/nav.jsx';
import { HeaderInfo } from '../header/header-info.jsx';
import { Card_hotel_select } from '../_ui/card/content/hotel_select.jsx';

const PopupsLayout = ({
  data,
  className,
  children,
  btnClose = true,
  popupTitle,
  popupIcon,
  popupActions,
}) => {
  const hasHead = Boolean(popupTitle || popupIcon || btnClose);

  return (
    <div className={`popup ${className || ''}`} data-popup={data}>
      <div className="popup--content">
        {hasHead && (
          <div className="popup--head">
            {(popupIcon || popupTitle) && (
              <div className="popup--title">
                {popupIcon && <span className={popupIcon}></span>}
                {popupTitle}
              </div>
            )}
            {btnClose && (
              <div className="popup--close" data-closepopup="">
                <span className="icon-ic-close"></span>
              </div>
            )}
          </div>
        )}
        <div className="popup--content_wrapper">
          {children}
        </div>
        {popupActions && <div className="popup--action">{popupActions}</div>}
      </div>
    </div>
  );
};
export const PopupHotelSelect =() =>{
  return (
    <div className={'popup popup-hotel_select'} data-popup={'popup_for_hotels_select'}>
      <div className={'popup--content '}>
          <div class="block--elements">
            <Card_hotel_select img={'/assets/img/1.jpg'} rating={'5'} title={'Отель кол гали'} subtitle={'Болгар'}></Card_hotel_select>
            <Card_hotel_select img={'/assets/img/1.jpg'} rating={'4'} title={'Отель ногай'} subtitle={'казань'}></Card_hotel_select>
            <Card_hotel_select img={'/assets/img/1.jpg'} rating={'5'} title={'ак барс резорт'} subtitle={'казань'}></Card_hotel_select>
            <Card_hotel_select img={'/assets/img/1.jpg'} rating={'5'} title={'Миллениум Панорама'} subtitle={'казань'}></Card_hotel_select>
            <Card_hotel_select img={'/assets/img/1.jpg'} rating={'5'} title={'рисала'} subtitle={'казань'}></Card_hotel_select>
          </div>
      </div>
    </div>
  )
}

export const PopupCascade = () => {
  return (
    <PopupsLayout data={'popup_for_cascade'}
                  popupTitle={'Попап каскад'}>
      <Is_cascade_mini></Is_cascade_mini>
    </PopupsLayout>
  );
};

export const PopupForm = () => {
  return (
    <PopupsLayout data={'popup_for_form'}>
      <Form></Form>
    </PopupsLayout>
  );
};

export const PopupRoomAdvantages = () => {
  return (
    <PopupsLayout data={'popup_for_room_advantages'} popupTitle="popupTitle">
      <div class="popup__content is_cascade">


      </div>
    </PopupsLayout>
  );
};
export const PopupCookies = () => {
  return (
    <PopupsLayout
      data="popup_for_cookies"
      btnClose={false}
      popupTitle="Pop-up notification"
      popupIcon={'icon-ic-phone'}
      popupActions={
   < >
     <Button type="filled-primary" data-closepopup="" data-accept="" >
       принять все
     </Button>
     <Button  type="filled-secondary" data-closepopup="" >
       отказаться
     </Button>
   </>
      }
    >
      <p>
        Этот веб-сайт использует файлы cookie, чтобы помочь вам лучше и удобнее просматривать веб-сайт
      </p>
    </PopupsLayout>
  );
};

export const PopupConfirmation = () =>{
  return(
    <PopupsLayout data={'popup_for_confirmation'} popupTitle={'ЗАЯВКА ОТПРАВЛЕНА'}>
      <p>Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время для подтверждения.</p>
    </PopupsLayout>
  )
}


export const Popups = () => {
  return (
    <>
      <PopupHotelSelect></PopupHotelSelect>
      <PopupRoomAdvantages></PopupRoomAdvantages>
      <PopupForm></PopupForm>
      <PopupCascade></PopupCascade>
      <PopupConfirmation></PopupConfirmation>
      <PopupCookies></PopupCookies>
    </>
  );
};
