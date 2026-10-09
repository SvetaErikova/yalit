import { Form } from '../form/form-comp.jsx';
import { Is_cascade_mini } from '../_ui/is_cascade/is_cascade_mini.jsx';
import { Button } from '../_ui/button/button.jsx';
import { Nav } from '../nav/nav.jsx';
import { HeaderInfo } from '../header/header-info.jsx';
import { Card_hotel_select } from '../_ui/card/content/hotel_select.jsx';

const PopupsLayout = ({ data, className, children, btnClose = true, popupTitle, popupActions }) => {
  return (
    <div className={`popup ${className || ''}`} data-popup={data}>
      <div className={'popup--content '}>
        <div className="popup--close" data-closepopup="">
          {popupTitle && (
            <div class="popup--title">{popupTitle}</div>
          )}
          {btnClose && (
            <span className={'icon-ic-close'}></span>
          )}
        </div>
        <div className="popup--content_wrapper">
         {children}
        </div>
        {popupActions && <div className="popup--actions">{popupActions}</div>}
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
      popupTitle="Cookies"
      popupActions={
        <Button color="neutral" type="filled-primary" data-closepopup="" data-accept="" icon={'icon-ic-chevron-right'}>
          Принять
        </Button>
      }
    >
      <p>
        Lorem ipsum dolor sit amet consectetur. Pellentesque eleifend mauris amet ullamcorper mi dui at.
        Augue libero volutpat libero aenean ornare neque justo proin consectetur.
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
      {/*<PopupRoomAdvantages></PopupRoomAdvantages>*/}
      <PopupForm></PopupForm>
      <PopupCascade></PopupCascade>
      <PopupConfirmation></PopupConfirmation>
      <PopupCookies></PopupCookies>
    </>
  );
};
