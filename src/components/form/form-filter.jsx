import {Input_checks} from "./inputs/input_checks/input_checks-comp.jsx";
import {Button} from "../_ui/button/button.jsx";

export const Form_ilter = () =>{
  return (
    <form class='filter'>
      <form class="form">
        <div class="filter--title">Фильтр</div>
        <Input_checks
          type={"radio"}
          name={"radio"}
          title={"Тип занятости"}
          input={[{ text: "Значение пункта радио кнопки 1" }, { text: "Значение пункта радио кнопки 2" }]}
        ></Input_checks>
        <Input_checks
          type={"radio"}
          name={"radio"}
          title={"Направление"}
          input={[{ text: "Значение пункта радио кнопки 1" }, { text: "Значение пункта радио кнопки 2" }]}
        ></Input_checks>
        <Input_checks
          type={"radio"}
          name={"radio"}
          title={"Направление"}
          input={[{ text: "Значение пункта радио кнопки 1" }, { text: "Значение пункта радио кнопки 2" }]}
        ></Input_checks>
        <div class="filter--buttons">
          <Button type={'filled'} color={'primary'} htmlType={'submit'}>Применить</Button>
          <Button type={'link'} color={'secondary'} htmlType={'reset'}>Сбросить фильтры</Button>
        </div>
      </form>
      <Button type={'filled'} color={'secondary'} className={'-mob'} popup={'popup_for_filters'} htmlType={'button'}>Фильтр</Button>
    </form>
  )
}
