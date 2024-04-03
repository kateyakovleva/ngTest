import {Component, Input} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import * as uuid from 'uuid';
import {IFormItem} from "../../types/form";

@Component({
  selector: "app-input",
  standalone: true,
  templateUrl: './input.component.html',
  imports: [ReactiveFormsModule, NgIf, NgForOf],
  styleUrls: ['./input.component.scss', '../app.component.scss']
})


export class InputComponent {
  @Input() field!: IFormItem;
  items: string[] = [uuid.v4()];

  removeField(index: number) {
    this.items = this.items.filter((item: any, i: number) => index != i)
  }

  addField() {
    this.items.push(uuid.v4())
  }
}
