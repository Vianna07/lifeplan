import { Component, Input } from '@angular/core';
import { Module } from '../../models/module.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-module-iterator',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
  ],
  templateUrl: './module-iterator.component.html',
  styleUrl: './module-iterator.component.scss'
})
export class ModuleIteratorComponent {
  @Input({required: true}) public modules!: Module[];

  constructor() {}
}
