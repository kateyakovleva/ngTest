import {Component, Input} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {IFormItem} from "../../types/form";
import {NgIf} from "@angular/common";

@Component({
  selector: "app-number",
  standalone: true,
  templateUrl: './number.component.html',
  imports: [ReactiveFormsModule, NgIf],
  styleUrls: ['./number.component.scss', '../app.component.scss']
})
export class NumberComponent {
  @Input() field: IFormItem | undefined;
  age: number = 18; //placeholder

  constructor() {
    if (this.field?.value) {
      this.age = this.field.value;
    }
  }

  increase() {
    this.age++;
  }

  decrease() {
    if (this.age > 1) {
      this.age--;
    }
  }
}
