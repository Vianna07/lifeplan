import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit, Renderer2 } from '@angular/core';
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
export class LpSelectComponent implements OnInit, AfterViewInit {
  // @Input({required: true}) public width!: string
  @Input({required: true}) public items: any = null
  @Input() public selectLabel: string | null = null
  @Output() public onChangeSelected: EventEmitter<string> = new EventEmitter()
  public selectedValue: string | null = null
  public inputField: string | null = ''

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.items.sort((a, b) => a.name.localeCompare(b.name));
  }

  ngAfterViewInit(): void {
    // const select = this.renderer.selectRootElement('.select', this.renderer.selectRootElement('.app-lp-select-wrapper'))
    // console.log(select);

    // this.renderer.setStyle(select, 'width', this.width)

  }

  public onChangeSelect(value: any): void {
    this.onChangeSelected.emit(value)
  }
}
