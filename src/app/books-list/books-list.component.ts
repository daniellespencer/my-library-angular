import { Component, OnInit, Input } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() booksToRead: Book[];

  newTitle: string;
  newAuthor: string;
  newYear: number;

  books: Book[] = [
    new Book('Little Women', 'Louisa May Alcott', 2020),
    new Book('Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling', 1999)    
  ];

  constructor() { }

  ngOnInit() {
  }

  addBook(){
    let book = new Book(this.newTitle, this.newAuthor, this.newYear)
    this.books.push(book);
  }
}
