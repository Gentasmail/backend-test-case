import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from '../application/book.service'; // Pastikan jalur ini benar

@ApiTags('Books')
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('borrow')
  async borrowBook(@Body('code') bookCode: string) {
    return this.bookService.borrowBook(bookCode);
  }

  @Post('return')
  async returnBook(@Body('code') bookCode: string) {
    return this.bookService.returnBook(bookCode);
  }
}
