import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss']
})
export class DirectiveDemoComponent implements OnInit {

  flag = false;
  count = 4;
  products = [
    {pid: 101, pname: 'LG optical Mouse', pprice: 350},
    {pid: 102, pname: 'Dell Keyboard', pprice: 550},
    {pid: 103, pname: 'Samsung Monitor', pprice: 4500},
    {pid: 104, pname: 'Intel Motherboard', pprice: 5500}
  ];
  country = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.flag = !this.flag;
    this.count++;
    this.products[this.count] = {pid: this.count, pname: 'Product' + this.count, pprice: 5500};

  }

  handleChange(event) {
    this.country = event.target.value;
  }
}
