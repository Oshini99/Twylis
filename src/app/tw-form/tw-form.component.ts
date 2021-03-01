import { Component, OnInit } from '@angular/core';
import {Feature} from '../feature';
import {DataService} from '../data.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DocumentEvent} from '../document-event';

@Component({
  selector: 'app-tw-form',
  templateUrl: './tw-form.component.html',
  styleUrls: ['./tw-form.component.css']
})
export class TwFormComponent implements OnInit {

  featureForm!: FormGroup;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.featureForm = this.formBuilder.group({
      includeBorders: new FormControl(false),
      items: this.formBuilder.array([this.createItem()])
    });
  }

  get controls() {
    return this.featureForm.controls;
  }

  get items() {
    return this.controls.items as FormArray;
  }

  createItem(): FormGroup {
    return this.formBuilder.group(new Feature());

  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  // submit button action
  onSubmit() {
    const event: DocumentEvent = {
      includeBorders: this.controls.includeBorders.value,
      items: this.items.value
    };

    this.dataService.changeModel(event);
  }

}
