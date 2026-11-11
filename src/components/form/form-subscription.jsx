import {Form_policy} from "./form_policy.jsx";
import {Input} from "./inputs/input/input_comp.jsx";
import {Button} from "../_ui/button/button.jsx";

export const Form_subscription = () =>{
  return (
      <form class="form">
        <div class="form--subscription">
          <Input  name={"email"} type={'email'} placeholder={"Ваш e-mail"} text={'Подписаться на новости'} required={true} autocomplete={"autocomplete"}></Input>
          <Button type={'filled-secondary'} htmlType={'submit'} disabled >отправить</Button>
        </div>
        <Form_policy></Form_policy>
      </form>
  )
}
