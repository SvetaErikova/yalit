import { Button } from '../../../_ui/button/button.jsx';

export const Block_link = ({title = 'Смотреть все'}) =>{
  return (
    <div className={'block--link'}>
      <Button type={'tinted'} color={'neutral'} icon={'icon-arrow'}>{title}</Button>
    </div>
  )
}
