import { Block } from '../../../block/block.jsx';
import { Block_Head } from '../../../block/_ui/block--head/block--head.jsx';

export const InfoClip = () =>{
  return (
    <Block className={'info-clip'}>
      <div class="block-top">
        <Block_Head title={'погрузись'} caption={'в богатую культуру <br>и историю татарстана'}></Block_Head>
      </div>

      <div class="block-clip">
        <img src="/assets/img/info-clip/bg.jpg" alt="" />
        <Block_Head title={'Группа отелей ЯЛИТ'} caption={'Восточная сказка на берегу Волги.\n' +
          'Погрузитесь в мир восточной роскоши в уникальном месте Республики Татарстан'}></Block_Head>
      </div>
    </Block>
  )
}
