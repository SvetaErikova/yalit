import { metaPages } from "../shared/meta-pages.js";
import HotelLayoutWithBreadcrumbs from "../layouts/HotelLayoutWithBreadcrumbs.jsx";
import { Block_List } from "../components/block/block_list/block_list.jsx";
import { Block_Head } from "../components/block/_ui/block--head/block--head.jsx";
import { Card_room } from "../components/_ui/card/content/room.jsx";

const hotelText = "Уютный оазис повышенного комфорта: в номере больше пространства, продуманное наполнение и расслабленный сервис. Каждый номер сочетает в себе простор и все необходимые условия для отдыха и работы";

const hotels = [
  { id: "nova-5", title: "Нова Миллениум Панорама 5*" },
  { id: "millennium-4", title: "Миллениум Панорама 4*" },
];

export default function Home() {
  return (
    <HotelLayoutWithBreadcrumbs meta={metaPages.home}>
      <Block_List
        className="content_rooms"
        title={<Block_Head title={"Проживание"} headingLevel={1} />}
      >
        {hotels.map((hotel) => (
          <Card_room key={hotel.id} title={hotel.title} text={hotelText} list={null} />
        ))}
      </Block_List>
    </HotelLayoutWithBreadcrumbs>
  );
}
