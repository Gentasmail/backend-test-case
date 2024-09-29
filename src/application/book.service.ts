import { Injectable } from '@nestjs/common';
import { Book } from '../domain/book/book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [
    { id: 1, code: "JK-45", title: "Harry Potter", author: "J.K Rowling", stock: 1, isBorrowed: false },
    { id: 2, code: "SHR-1", title: "A Study in Scarlet", author: "Arthur Conan Doyle", stock: 1, isBorrowed: false },
    { id: 3, code: "TW-11", title: "Twilight", author: "Stephenie Meyer", stock: 1, isBorrowed: false },
    { id: 4, code: "HOB-83", title: "The Hobbit, or There and Back Again", author: "J.R.R. Tolkien", stock: 1, isBorrowed: false },
    { id: 5, code: "NRN-7", title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", stock: 1, isBorrowed: false },
  ];

  findAllBooks(): Book[] {
    return this.books;
  }

  borrowBook(bookCode: string): Book {
    const book = this.books.find((b) => b.code === bookCode);
    if (!book) {
      throw new Error('Book not found'); // Lempar error jika buku tidak ditemukan
    }
    if (book.stock > 0 && !book.isBorrowed) {
      book.stock--; // Mengurangi stok
      book.isBorrowed = true; // Set isBorrowed to true
      return book; // Kembalikan buku yang berhasil dipinjam
    } else if (book.isBorrowed) {
      throw new Error('Book is already borrowed'); // Lempar error jika buku sudah dipinjam
    } else {
      throw new Error('No stock available'); // Lempar error jika stok habis
    }
  }

  returnBook(bookCode: string): Book {
    const book = this.books.find((b) => b.code === bookCode);
    if (!book) {
      throw new Error('Book not found'); // Lempar error jika buku tidak ditemukan
    }
    book.stock++; // Menambah stok
    book.isBorrowed = false; // Set isBorrowed to false
    return book; // Kembalikan buku yang berhasil dikembalikan
  }
}
