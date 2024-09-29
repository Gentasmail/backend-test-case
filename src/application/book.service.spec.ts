import { BookService } from './book.service';
import { Book } from '../domain/book/book.entity'; // Adjust the import based on your actual file structure

describe('BookService', () => {
    let bookService: BookService;
    let bookRepository: Partial<{ findOne: jest.Mock; /* other methods */ }>;

    beforeEach(() => {
        // Mock the initial state of the books
        bookService = new BookService(); // Initialize without repository since it's not being used here
    });

    it('should return a book when it is borrowed', () => {
        const bookCode = 'JK-45';
        // Mocking a book that exists in the service
        const book = bookService.borrowBook(bookCode);
        expect(book).toBeTruthy();
        expect(book.code).toBe(bookCode);
        expect(book.stock).toBe(0); // Stock should be decreased by 1
        expect(book.isBorrowed).toBe(true); // Book should now be marked as borrowed
    });

    it('should throw an error if the book does not exist', () => {
        const invalidBookCode = 'INVALID-CODE';
        expect(() => bookService.borrowBook(invalidBookCode)).toThrow('Book not found');
    });

    it('should throw an error if the book is already borrowed', () => {
        const bookCode = 'JK-45';
        // First borrow the book
        bookService.borrowBook(bookCode);
        // Try to borrow it again
        expect(() => bookService.borrowBook(bookCode)).toThrow('Book is already borrowed');
    });

    it('should return a book when it is returned', () => {
        const bookCode = 'JK-45';
        bookService.borrowBook(bookCode); // First borrow the book
        const returnedBook = bookService.returnBook(bookCode);
        expect(returnedBook).toBeTruthy();
        expect(returnedBook.code).toBe(bookCode);
        expect(returnedBook.stock).toBe(1); // Stock should be increased by 1
        expect(returnedBook.isBorrowed).toBe(false); // Book should now be marked as not borrowed
    });

    it('should throw an error when returning a non-existent book', () => {
        const invalidBookCode = 'INVALID-CODE';
        expect(() => bookService.returnBook(invalidBookCode)).toThrow('Book not found');
    });
});
