import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.page.html',
  styleUrls: ['./expense-modal.page.scss'],
})
export class ExpenseModalPage implements OnInit {

  registerExpenseForm: FormGroup
  expense = {
  title: '',
  value: 0,
  description: '',
  tag:[]
  };

constructor(private fb: FormBuilder, private modalCtrl: ModalController) {}


ngOnInit(){
  this.registerExpenseForm = this.buildForms();
}

saveExpense() {
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  this.modalCtrl.dismiss({
    'title': this.title.value,
    'value': this.value.value,
    'description': this.description.value,
    'tag': this.tag.value.split(/[.,\*+-/_]\s*/)
  });
}

buildForms(){
  return this.fb.group({
    title: new FormControl('', [
      Validators.required
    ]),
    value: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    tag: new FormControl('', [
      Validators.required
    ])
  })
}

get title() {
  return this.registerExpenseForm.get('title');
}

get value() {
  return this.registerExpenseForm.get('value');
}

get description() {
  return this.registerExpenseForm.get('description');
}

get tag() {
  return this.registerExpenseForm.get('tag');
}

}
