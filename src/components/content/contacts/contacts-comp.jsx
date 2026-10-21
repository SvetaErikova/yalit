import {Block} from "../../block/block.jsx";
import {Map_contacts} from "../../map/map-comp.jsx";
import {ContactsContent} from "./contacts-content.jsx";
import { Button } from '../../_ui/button/button.jsx';
import { Block_Head } from '../../block/_ui/block--head/block--head.jsx';

export const Contacts = () => {
  return (
    <Block className={'content_contacts '}>
      <>
        <Block_Head title={'контакты'}></Block_Head>
        <div class="block--content">
          <ContactsContent></ContactsContent>
        </div>
        <Map_contacts></Map_contacts>

      </>
    </Block>
  )
}
