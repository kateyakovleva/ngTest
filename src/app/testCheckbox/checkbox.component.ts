import {Component, Input} from "@angular/core";
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import * as uuid from 'uuid';
import {IFormItem} from "../../types/form";

@Component({
  selector: "app-checkbox",
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgForOf],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss', '../app.component.scss']
})
export class CheckboxComponent {
  @Input() field: IFormItem | undefined;
  id: string = uuid.v4();
  allChecked: boolean = false;
  all: boolean = false;

  selectAll(event: any) {
    this.allChecked = Boolean(event.target?.checked)
    this.all = this.allChecked
  }

  checkSkill(event: any) {
    if (!event.target?.checked) {
      this.all = false
    }
  }
}
