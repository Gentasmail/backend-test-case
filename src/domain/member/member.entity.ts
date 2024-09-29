import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// member.entity.ts
export class Member {
    id: number;
    code: string;
    name: string;
    booksBorrowed: string[];
    penaltyUntil: Date | null;
  
    constructor(id: number, code: string, name: string, booksBorrowed: string[] = [], penaltyUntil: Date | null = null) {
      this.id = id;
      this.code = code;
      this.name = name;
      this.booksBorrowed = booksBorrowed;
      this.penaltyUntil = penaltyUntil;
    }
  }
  
