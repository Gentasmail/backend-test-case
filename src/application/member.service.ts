import { Injectable } from '@nestjs/common';
import { Member } from '../domain/member/member.entity';
import { Book } from '../domain/book/book.entity';

@Injectable()
export class MemberService {
  private members = [
    { code: "M001", name: "Angga" },
    { code: "M002", name: "Ferry" },
    { code: "M003", name: "Putri" },
  ];

  findAllMembers() {
    return this.members;
  }

  borrowBook(memberCode: string, bookCode: string) {
    const member = this.members.find((m) => m.code === memberCode);
    if (member) {
      // Process borrowing logic here
      return `Member ${member.name} borrowed book with code ${bookCode}`;
    }
    return null;
  }

  returnBook(memberCode: string, bookCode: string) {
    const member = this.members.find((m) => m.code === memberCode);
    if (member) {
      // Process return logic here
      return `Member ${member.name} returned book with code ${bookCode}`;
    }
    return null;
  }
}
