import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Option } from '../../models/option.interface';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent implements OnInit {
  public myControl = new FormControl<string | Option>('')
  @Input({required: true}) public options!: Option[]
  public filteredOptions!: Observable<Option[]>
  @Input({required: true}) public label!: string
  @Output() public chosenOption = new EventEmitter<Option | null>

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    )
  }

  public displayFn(option: Option): string {
    return option && option.name ? option.name : '';
  }

  private _filter(option: string): Option[] {
    const filterValue = option.toLowerCase();

    if (typeof this.myControl.value === 'object') {
      this.chosenOption.emit(this.myControl.value)
    }

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public clear(): void {
    this.myControl.setValue('')
    this.chosenOption.emit(null)
  }
}
