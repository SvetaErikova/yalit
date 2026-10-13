import { Block } from '../../../block/block.jsx';
import { Block_Head } from '../../../block/_ui/block--head/block--head.jsx';
import { Block_List } from '../../../block/block_list/block_list.jsx';
import { Block_selection } from '../../../block/_ui/block--selection/block--selection-comp.jsx';
import { Button } from '../../../_ui/button/button.jsx';

export const HotelGroupComp = () => {
  return<>
      <section class={'block hotel-group  -accent '}>
        <div class="block--wrapper ">
          <div class="block--top">
            <Block_Head title={'Группа отелей ЯЛИТ'} caption={'Это новая глава в истории казанского гостеприимства.\n' +
              'Четыре уникальных отеля, объединённых философией искреннего радушия, безупречного сервиса и глубокого уважения к татарским традициям. Мы создаём не просто отели, а пространства для незабываемых впечатлений'}></Block_Head>
          </div>
          <div>ТУТ БУДУТ ИСТОРИИ ВИДСТЕР</div>
        </div>

        <div className={'hotel-group_slider'}>
          <div class="block--wrapper">
            <div class="block--heads">
              <Block_Head title={'кол гали'} caption={'Восточная сказка на берегу Волги. Погрузитесь в мир восточной роскоши в уникальном месте Республики Татарстан'} ></Block_Head>
              <Block_Head title={'ногай'} caption={'Восточная сказка на берегу Волги. Погрузитесь в мир восточной роскоши в уникальном месте Республики Татарстан'}></Block_Head>
              <Block_Head title={'ак барс резорт'} caption={'Восточная сказка на берегу Волги. Погрузитесь в мир восточной роскоши в уникальном месте Республики Татарстан'} ></Block_Head>
              <Block_Head title={'миллениум панорама'} caption={'Восточная сказка на берегу Волги. Погрузитесь в мир восточной роскоши в уникальном месте Республики Татарстан'}></Block_Head>
            </div>

            <div class="block--selection">
              <a class="is_active"><span>кол гали</span></a><a class=""><span>ногай</span></a><a class=""><span>ак барс резорт</span></a><a class=""><span>миллениум панорама</span></a>
            </div>
          </div>
          <div class="block--elements">
            <div class="card">
              <div class="card--image">
                <img src="/assets/img/hotel-group/kol-gali.png" alt="" />
              </div>
              <div class="card--action">
                <Button type={'filled-accent'}>узнать подробнее</Button>
              </div>
            </div>
            <div class="card">
              <div class="card--image">
                <img src="/assets/img/hotel-group/nogay.png" alt="" />
              </div>
              <div class="card--action">
                <Button type={'filled-accent'}>узнать подробнее</Button>
              </div>
            </div>
            <div class="card">
              <div class="card--image">
                <img src="/assets/img/hotel-group/ak-bars.png" alt="" />
              </div>
              <div class="card--action">
                <Button type={'filled-accent'}>узнать подробнее</Button>
              </div>
            </div>
            <div class="card">
              <div class="card--image">
                <img src="/assets/img/hotel-group/milemium.png" alt="" />
              </div>
              <div class="card--action">
                <Button type={'filled-accent'}>узнать подробнее</Button>
              </div>
            </div>
          </div>

        </div>
      </section>
  </>
}
