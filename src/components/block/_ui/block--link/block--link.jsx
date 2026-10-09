import { Button } from '../../../_ui/button/button.jsx';

export const Block_link = ({title = 'Смотреть все'}) =>{
  return (
    <div className={'block--link'}>
      <Button type={'link'} color={'neutral'} icon={'icon-ic-eye'}>{title}</Button>
    </div>
  )
}
