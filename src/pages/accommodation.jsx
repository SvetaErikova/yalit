import { metaPages } from "../shared/meta-pages.js";
import HotelLayoutWithBreadcrumbs from "../layouts/HotelLayoutWithBreadcrumbs.jsx";
import { Block_List } from "../components/block/block_list/block_list.jsx";
import { Block_Head } from "../components/block/_ui/block--head/block--head.jsx";
import { Block_selection } from "../components/block/_ui/block--selection/block--selection-comp.jsx";
import { Card_room } from "../components/_ui/card/content/room.jsx";

const roomTabs = [
  { label: "Все" },
  { label: "Стандарт" },
  { label: "Люкс" },
  { label: "Делюкс" },
  { label: "Супериор" },
  { label: "Семейный" },
  { label: "Джуниор сюит" },
  { label: "Апартаменты" },
  { label: "Президентский номер" },
];

const roomList = [
  { icon: "icon-ic-radix", text: "25-32 м2" },
  { icon: "icon-ic-user", text: "до 2 гостей" },
  { icon: "icon-ic-bed", text: "двуспальная кровать" },
];

const roomText = "Улучшенный стандартный номер с увеличенной площадью и дополнительным пространством для отдыха или работы";

const rooms = [
  { id: "room-1", title: "Стандарт комфорт с большой кроватью" },
  { id: "room-2", title: "Стандарт комфорт с большой кроватью" },
  { id: "room-3", title: "Стандарт комфорт с большой кроватью" },
  { id: "room-4", title: "Стандарт комфорт с большой кроватью" },
];

export default function Home() {
  return (
    <HotelLayoutWithBreadcrumbs meta={metaPages.home}>
      <Block_List
        className="content_rooms"
        title={<Block_Head title={"Нова Миллениум<br>Панорама 5*"} headingLevel={1} />}
        selection={<Block_selection tabs={roomTabs} />}
      >
        {rooms.map((room) => (
          <Card_room key={room.id} title={room.title} text={roomText} list={roomList} />
        ))}
      </Block_List>
    </HotelLayoutWithBreadcrumbs>
  );
}
