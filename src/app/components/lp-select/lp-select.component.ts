import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-lp-select',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    NgFor
  ],
  templateUrl: './lp-select.component.html',
  styleUrl: './lp-select.component.scss'
})
export class LpSelectComponent implements OnInit {
  @Input() public items: any = null
  @Input() public selectLabel: string | null = null
  @Output() public onChangeSelected: EventEmitter<string> = new EventEmitter()
  public selectedValue: string | null = null
  public inputField: string | null = ''

  constructor(

  ) { }

  ngOnInit(): void {
    this.items.sort((a, b) => a.name.localeCompare(b.name));
  }

  public onChangeSelect(value: any): void {
    this.onChangeSelected.emit(value)
  }
}
