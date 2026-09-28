import { Form } from '../form/form-comp.jsx';
import { Is_cascade_mini } from '../_ui/is_cascade/is_cascade_mini.jsx';
import { Button } from '../_ui/button/button.jsx';
import { Nav } from '../nav/nav.jsx';
import { HeaderInfo } from '../header/header-info.jsx';

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
  return(
    <div>

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
export const PopupReview = () => {
  return <PopupsLayout data={'popup_for_review'} className={'popup-review'} btnClose={true}>
    <div class="popup_content-wrapper">

    </div>
  </PopupsLayout>;
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
      {/*<PopupRoomAdvantages></PopupRoomAdvantages>*/}
      <PopupForm></PopupForm>
      <PopupCascade></PopupCascade>
      <PopupConfirmation></PopupConfirmation>
      <PopupCookies></PopupCookies>
      <PopupReview></PopupReview>
    </>
  );
};
