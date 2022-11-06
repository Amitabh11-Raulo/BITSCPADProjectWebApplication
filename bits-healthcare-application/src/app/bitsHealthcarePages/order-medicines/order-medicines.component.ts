import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-medicines',
  templateUrl: './order-medicines.component.html',
  styleUrls: ['./order-medicines.component.scss']
})
export class OrderMedicinesComponent implements OnInit {

  public isCardOpen = false;
  public isItemAdded = false;
  public drugDeatail: any;

  constructor() { }

  ngOnInit(): void {
  }

  keyword = 'name';
  public drugs = [
    {name : "Abacavir Sulfate"},
    {name : "Abatacept"},
    {name : "Abilify"},
    {name : "Acamprosate Calcium"},
    {name : "Accretropin"},
    {name : "Aceon"},
    {name : "Aci-Jel"},
    {name : "Acthrel"},
    {name : "Actimmune"},
    {name : "Actisite"},
    {name : "Acular"},
    {name : "Acular LS"},
    {name : "Acuvail"},
    {name : "Adagen"}
  ]

  selectEvent(item: any) {
    this.isCardOpen = true;
    this.drugDeatail = item.name;
  }

  onChangeSearch(search: string) {
    console.log(search)
  }

  oninputCleared() {
    this.isCardOpen = false;
  }

  onFocused(e: any) {
    console.log(e)
  }

  addItem() {
    this.isItemAdded = true;
  }
}
