import { Component, OnInit, Input } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() booksToRead: Book[];

  books: Book[] = [
    new Book('Little Women', 'Louisa May Alcott', 2020),
    new Book('Harry Potter', 'J. K. Rowling', 2000)    
  ];

  constructor() { }

  ngOnInit() {
  }

}
