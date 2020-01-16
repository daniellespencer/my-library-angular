import { Component, OnInit, Input } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[];
  

  newTitle: string;
  newAuthor: string;
  newYear: number;  

  constructor() { }

  ngOnInit() {
  }

  addBook(){
    let book = new Book(this.newTitle, this.newAuthor, this.newYear)
    this.books.push(book);
  }
}
