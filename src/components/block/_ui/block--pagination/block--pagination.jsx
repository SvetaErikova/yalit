import { Button } from '../../../_ui/button/button.jsx';

export const Block_pagination = ({ page = false }) => {  // Деструктуризация props
  return (
    <div className="block--pagination">
      {page ? (
        <>
          <Button color={'neutral'} type={'link'} icon={'icon-ic-chevron-left'}></Button>
          <Button color={'neutral'} type={'link'} class={'is_active'}>1</Button>
          <Button color={'neutral'} type={'link'}>2</Button>
          <Button color={'neutral'} type={'link'}>3</Button>
          <Button color={'neutral'} type={'link'}>...</Button>
          <Button color={'neutral'} type={'link'}>11</Button>
          <Button color={'neutral'} type={'link'} icon={'icon-ic-chevron-right'}></Button>
        </>
      ) : (
        <Button color={'neutral'} type={'outlined'} icon={'icon-ic-chevron-down'}>
          показать еще
        </Button>
      )}
    </div>
  );
};
