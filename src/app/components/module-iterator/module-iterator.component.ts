import { Component, Input } from '@angular/core';
import { Module } from '../../models/module.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-module-iterator',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
  ],
  templateUrl: './module-iterator.component.html',
  styleUrl: './module-iterator.component.scss'
})
export class ModuleIteratorComponent {
  @Input() public modules!: Module[];

  constructor() {}
}
