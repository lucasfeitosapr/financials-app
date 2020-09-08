import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

interface Expense {
  title: string;
  value: number;
  description: string;
  tag: Array<string>;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  registerExpenseForm: FormGroup
  expense = {
    title: '',
    value: 0,
    description: '',
    tag:[]
  };

  allExpenses: Array<Expense> = new Array();
  titlesForTesting = ['Padaria', 'Mercado', 'Casa da pamonha', 'GoVegan'];
  valuesForTesting = [5.00, 50.37, 22.70, 50.00];
  descriptionForTesting = ['Pão', 'Compras da Semana', 'Almoço', 'Falafel, MijuMiju e Fritas.']
  tagsForTesting = [['padaria'], ['mercado'], ['almoço'], ['goVegan','lanche']];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerExpenseForm = this.buildForms();
    this.populateListForTesting();
  }

  populateListForTesting() {
    for(let i = 0; i < 4; i++){
      let newExpense: Expense = {
        title: this.titlesForTesting[i],
        value: this.valuesForTesting[i],
        description: this.descriptionForTesting[i],
        tag: this.tagsForTesting[i]
        
      }
      this.allExpenses.push(newExpense)
    }
  }

  saveExpense(){
    console.log()
    let newExpense: Expense = {
      title: this.title.value,
      value: this.value.value,
      description: this.description.value,
      tag: this.tag.value.split(/[.,\*+-/_]\s*/)
    }
    this.allExpenses.push(newExpense)

    console.log(this.allExpenses)
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
