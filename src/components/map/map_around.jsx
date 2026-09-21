export const Map_around = () =>{
  return (
    <div className="block block_html_code content_map_around">
      <div className="block--wrapper">
        <div className="block--head">
          <div className="block--head_title">
            <h2 className="f-h2">интересное рядом</h2>
          </div>
        </div>
        <div className="block--content">
          <script src="https://api-maps.yandex.ru/2.1/?apikey=88f07436-1355-4c8b-a97f-3b38f2eb00ac&lang=ru_RU" type="text/javascript"></script>
          <div className="map" id="map_places">
          </div>
        </div>
      </div>
    </div>
  )
}
