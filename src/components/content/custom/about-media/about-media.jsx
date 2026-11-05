import { Block } from '../../../block/block.jsx';
import { Button } from '../../../_ui/button/button.jsx';

export const AboutMedia = ({theme}) => {
  return(
    <Block className={'about-media -theme-accent'}>
      <div class="block--content">
        <img src="/assets/img/1.jpg" alt="" />
        <Button type="filled-primary" >Видео-обзор</Button>
      </div>
    </Block>
  )
}
