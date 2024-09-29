import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MemberService } from '../application/member.service'; // Pastikan jalur ini benar
import { Member } from '../domain/member/member.entity'; // Pastikan Member didefinisikan dan jalur ini benar

@ApiTags('Members')
@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('borrow')
  async borrowBook(@Body() borrowData: { memberCode: string; bookCode: string }) {
    return this.memberService.borrowBook(borrowData.memberCode, borrowData.bookCode);
  }

  @Post('return')
  async returnBook(@Body() returnData: { memberCode: string; bookCode: string }) {
    return this.memberService.returnBook(returnData.memberCode, returnData.bookCode);
  }
}
