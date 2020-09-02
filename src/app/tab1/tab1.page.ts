import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  registerTransactionForm: FormGroup
  transaction = {
    value: 0,
    description: '',
  };

  constructor(private fb: FormBuilder) {}

  buildForms(){
    return this.fb.group({
      value: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ])
    })
  }

  get value() {
    return this.registerTransactionForm.get('value');
  }

  get description() {
    return this.registerTransactionForm.get('description');
  }

}
