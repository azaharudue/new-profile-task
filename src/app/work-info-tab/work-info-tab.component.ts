import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-work-info-tab',
  templateUrl: './work-info-tab.component.html',
  styleUrls: ['./work-info-tab.component.scss'],
})
export class WorkInfoTabComponent implements OnInit {
  panelOpenState = false;
  cityControl = new FormControl();

  streets: string[] = [
    'Max Plank str 1',
    'Albert Einstein Str 2',
    'Newton Str 3',
    'Al Khwarizmi Str 4',
  ];
  filteredStreets: Observable<string[]>;

  constructor() {
    this.filteredStreets = this.cityControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  ngOnInit(): void {}
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter((street) =>
      this._normalizeValue(street).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase();
  }
}
