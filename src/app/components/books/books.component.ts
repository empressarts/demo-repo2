import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Book } from 'src/app/models/Book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book: Book = {
    title: '',
    author: '',
    read: false
  };

  @ViewChild('bookForm') form: any;

  books: Book[];
  showBookForm: boolean = false;

  constructor(private dataService: DataService) {
    this.books = [];
  }

  ngOnInit(): void {
    this.books = this.dataService.getBooks();
  }

  onSubmit({ value, valid }: NgForm) {
    if (!valid) {
      console.log('Error');
    } else {
      this.dataService.addBook(value);
      this.form.reset();
    }
  }

}
