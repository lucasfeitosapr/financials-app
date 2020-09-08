import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExpenseModalPage } from 'src/app/expense-modal/expense-modal/expense-modal.page';

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

  allExpenses: Array<Expense> = new Array();
  titlesForTesting = ['Padaria', 'Mercado', 'Casa da pamonha', 'GoVegan'];
  valuesForTesting = [5.00, 50.37, 22.70, 50.00];
  descriptionForTesting = ['Pão', 'Compras da Semana', 'Almoço', 'Falafel, MijuMiju e Fritas.']
  tagsForTesting = [['padaria'], ['mercado'], ['almoço'], ['goVegan','lanche']];

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    
    this.populateListForTesting();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ExpenseModalPage,
      // cssClass: 'my-custom-class'
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data'])
        this.saveExpense(data['data'])
        // const user = data['data']; // Here's your selected user!
    });

    return await modal.present();
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

  saveExpense(newExpense){
    console.log()
    let parseNewExpense: Expense = {
      title: newExpense['title'],
      value: newExpense['value'],
      description: newExpense['description'],
      tag: newExpense['tag']
    }
    this.allExpenses.push(parseNewExpense)

    console.log(this.allExpenses)
  }

}
