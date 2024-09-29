import { Module } from '@nestjs/common';
import { BookController } from './api/book.controller'; // Pastikan jalurnya benar
import { MemberController } from './api/member.controller'; // Pastikan jalurnya benar
import { BookService } from './application/book.service'; // Pastikan jalurnya benar
import { MemberService } from './application/member.service'; // Pastikan jalurnya benar

@Module({
  imports: [],
  controllers: [BookController, MemberController],
  providers: [BookService, MemberService],
})
export class AppModule {}
