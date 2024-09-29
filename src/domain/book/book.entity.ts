import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// book.entity.ts
export class Book {
    id: number;
    code: string;
    title: string;
    author: string;
    stock: number;
    isBorrowed: boolean;
  
    constructor(id: number, code: string, title: string, author: string, stock: number, isBorrowed: boolean = false) {
      this.id = id;
      this.code = code;
      this.title = title;
      this.author = author;
      this.stock = stock;
      this.isBorrowed = isBorrowed;
    }
  }
  