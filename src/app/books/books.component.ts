import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { books } from '../interfaces/books.interface';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
    cardData!: books[];

    searchFormControl = new FormControl();
    filteredBooks$: Observable<any>;
    constructor(private api: ApiService) {
        this.filteredBooks$ = this.searchFormControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value))
        );
    }
    ngOnInit(): void {
        this.getBooksData();
    }
    private _filter(value: string) {
        let filterValue = '';
        if (value) {
            filterValue = value.toLowerCase();
        }
        let filteredValues = [];

        // To avoid loop if filtervalue empty -> faster intial load
        if (filterValue !== '') {
            filteredValues = this.cardData.filter((option: any) => {
                //Added if clause to avoid error if module_m3_data == 0
                if (option.volumeInfo.title.toLowerCase().includes(filterValue)) {
                    return option;
                }
            });
        } else {
            filteredValues = this.cardData;
        }

        return filteredValues;
    }
    getBooksData() {
        this.api.generic_get_api('books/v1/volumes?q=kaplan%20test%20prep').subscribe(
            (res) => {
                this.cardData = res.items;
                this.searchFormControl.setValue('');
            },
            (err) => {
                console.log('Error while fetching data');
            }
        );
    }
}
