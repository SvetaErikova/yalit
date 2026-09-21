import {Block} from "../../block/block.jsx";
import {Map_contacts} from "../../map/map-comp.jsx";
import {ContactsContent} from "./contacts-content.jsx";
import { Button } from '../../_ui/button/button.jsx';

export const Contacts = () => {
  return (
    <Block className={'content_contacts'}>
      <>
        <Map_contacts></Map_contacts>
        <div class="block--actions">
          <Button link={'tel:8 800 222-48-12'} type={'filled-primary'} color={'neutral'} icon={'icon-ic-phone'}>8 800 222-48-12</Button>
          <Button link={'mailto:sr@mriyaresort.com'} type={'filled-primary'} color={'neutral'} icon={'icon-ic-email'}>sr@mriyaresort.com</Button>
          <Button link={'/'} type={'filled-primary'} color={'neutral'} icon={'icon-ic-location'}>Крым, Курорт мрия, Оползневое, Генерала Острякова 9</Button>
        </div>
      </>
    </Block>
  )
}
