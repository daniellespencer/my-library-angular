import { Component, OnInit, Input } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[];
  @Input() name: string;   

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

  removeBook(){
    let book = new Book(this.newTitle, this.newAuthor, this.newYear);
    let index = this.books.indexOf(book);
    this.books.splice(index, 1)
  }
}
