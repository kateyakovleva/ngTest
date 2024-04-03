import {Component} from "@angular/core";
import {FormComponent} from "./testForm/form.component";
import {formFields} from "../testData/generate.json";
import {IFormItem} from "../types/form";

@Component({
  selector: "my-app",
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    FormComponent
  ],
  styleUrls: ['./app.component.scss']

})
export class AppComponent {

  fields: IFormItem[] = formFields;

}
