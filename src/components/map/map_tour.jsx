import { Block_selection } from "../block/_ui/block--selection/block--selection-comp.jsx";

export const Map_tour = () =>{
  const tabs = [
    { label: "все", value: "all" },
    { label: "аэропорт", value: "airport" },
    { label: "автовокзал", value: "bus" },
    { label: "ЖД вокзал", value: "railway" },
  ];

  return (
    <div className="block block_html_code content_tour_map">
      <div className="block--wrapper">
        <div className="block--head">
          <div className="block--head_title">
            <h2 className="f-h2">как добраться</h2>
          </div>
        </div>
        <div className="block--content">
          <Block_selection tabs={tabs} />
          <script src="https://api-maps.yandex.ru/2.1/?apikey=88f07436-1355-4c8b-a97f-3b38f2eb00ac&lang=ru_RU" type="text/javascript"></script>
          <div className="map" id="map_tour">
          </div>
        </div>
      </div>
    </div>
  )
}
