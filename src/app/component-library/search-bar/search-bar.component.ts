import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Search from 'src/app/component-library/models/Search';
import Option from '../models/option';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() public title: string;
  @Input() public searchCategories: Option[] = [];
  @Output() public searchUpdated = new EventEmitter<Search>();

  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  public search(): void {
    this.searchUpdated.emit(this.searchForm.value);
  }

  public ngOnInit(): void {
    this.searchForm = this.fb.group({
      facility: new FormControl(),
      searchTerm: new FormControl(),
    });
  }
}
