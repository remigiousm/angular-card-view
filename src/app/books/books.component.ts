import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { books } from '../interfaces/books.interface';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
    cardData: books[] = [];
    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.getBooksData();
    }

    getBooksData() {
        this.api.generic_get_api('books/v1/volumes?q=kaplan%20test%20prep').subscribe((res) => {
            this.cardData = res.items;
        });
    }
}
