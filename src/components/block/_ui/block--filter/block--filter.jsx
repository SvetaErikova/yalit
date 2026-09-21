import { Button } from '../../../_ui/button/button.jsx';
import { Input_checks } from '../../../form/inputs/input_checks/input_checks-comp.jsx';

export const Filter = () => {
  return (
    <div class="filter">
      <form class="form">
        <div class="filter--title">
          <h3>Фильтр вакансий</h3>
        </div>
        <Input_checks
          type={"checkbox"}
          name={"checkbox"}
          title={"Заголовок группы чекбоксов"}
          input={[{ text: "Описание конкретного итема 1" }, { text: "Описание конкретного итема 2" }]}
        ></Input_checks>
        <Input_checks
          type={"checkbox"}
          name={"checkbox"}
          title={"Заголовок группы чекбоксов"}
          input={[{ text: "Описание конкретного итема 1" }, { text: "Описание конкретного итема 2" }]}
        ></Input_checks>
        <div class="form--actions">
          <Button color={'neutral'} type={'tinted'}>Сбросить фильтр</Button>
          <Button color={'neutral'} type={'filled'}>Применить</Button>
        </div>

      </form>
    </div>
  );
};
