import { Is_cascade_full } from '../../_ui/is_cascade/is_cascade-full.jsx';
import {Block_Head} from "../../block/_ui/block--head/block--head.jsx";
import { Block_Sidebar, Block_sidebar_blog } from '../../block/_ui/block--sidebar/block--sidebar.jsx';
import {Block} from "../../block/block.jsx";

export const Article =() =>{
  return(
    <Block className={'content_article'}
    title={<Block_Head title={'Заголовок энного уровня'} subtitle={'Программа лояльности'} caption={'Tortor at donec in ornare et tellus. Nec blandit ultrices vitae iaculis vitae in dictum nec. Laoreet dignissim odio eu in. Vel.'}></Block_Head>}>
      <Is_cascade_full></Is_cascade_full>
    </Block>
  )
}
 export const Blog =() =>{
  return(
    <Block className={'content_article'}
           title={<Block_Head title={'Заголовок энного уровня'} subtitle={'Программа лояльности'} caption={'Tortor at donec in ornare et tellus. Nec blandit ultrices vitae iaculis vitae in dictum nec. Laoreet dignissim odio eu in. Vel.'}></Block_Head>}>
      <Block_sidebar_blog></Block_sidebar_blog>
      <Is_cascade_full></Is_cascade_full>
    </Block>
  )
 }
export const Vacancies =() =>{
  return(
    <Block className={'content_article'}
           title={<Block_Head title={'Заголовок энного уровня'} subtitle={'Программа лояльности'} caption={'Tortor at donec in ornare et tellus. Nec blandit ultrices vitae iaculis vitae in dictum nec. Laoreet dignissim odio eu in. Vel.'}></Block_Head>}>
      <Block_Sidebar></Block_Sidebar>
      <Is_cascade_full></Is_cascade_full>
    </Block>
  )
}
