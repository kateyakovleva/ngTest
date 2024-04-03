import {Component, Input} from "@angular/core";
import {NgFor} from "@angular/common";
import {InputComponent} from "../testInput/input.component";
import {NumberComponent} from "../testNumber/number.component";
import {SelectComponent} from "../testSelect/select.component";
import {CheckboxComponent} from "../testCheckbox/checkbox.component";
import {IFormItem} from "../../types/form";


@Component({
  selector: "app-form",
  standalone: true,
  imports: [NgFor, InputComponent, NumberComponent, SelectComponent, CheckboxComponent],
  templateUrl: './form.component.html',
  styleUrls: ['../app.component.scss']
})
export class FormComponent {

  @Input() fields: IFormItem[] = [];

  submit($event: SubmitEvent) {
    $event.preventDefault();

    // @ts-ignore
    const data = new FormData($event.target)
    //отправляем данные на сервер

    // @ts-ignore
    console.log([...data])
  }
}
