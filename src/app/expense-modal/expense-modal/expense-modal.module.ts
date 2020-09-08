import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseModalPageRoutingModule } from './expense-modal-routing.module';

import { ExpenseModalPage } from './expense-modal.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExpenseModalPage]
})
export class ExpenseModalPageModule {}
