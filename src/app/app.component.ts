import { Component } from '@angular/core';
import { Book } from './books-list/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'my-library';

  toRead: Book[] = [
    new Book('Little Women', 'Louisa May Alcott', 2020),
    new Book('Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling', 1999)    
  ];
}
