import {Component, Input} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from '@ng-select/ng-select';
import {NgForOf, NgIf} from "@angular/common";
import {IFormItem, IOptionItem} from "../../types/form";

@Component({
  selector: "app-select",
  standalone: true,
  imports: [ReactiveFormsModule, NgSelectModule, FormsModule, NgForOf, NgIf],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss', '../app.component.scss']
})
export class SelectComponent {
  @Input() field: IFormItem | undefined;
  selected?: IOptionItem;

  constructor() {
    this.selected = this.field?.choices?.find(f => f.value === this.field?.value)
  }
}
