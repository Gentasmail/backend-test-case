import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Book } from '../../domain/book/book.entity';
import { Member } from '../../domain/member/member.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',  // Ubah sesuai host PostgreSQL Anda
  port: 5432,         // Port default PostgreSQL
  username: 'your-username', // Username PostgreSQL Anda
  password: 'your-password', // Password PostgreSQL Anda
  database: 'library',       // Nama database
  entities: [Book, Member],  // Entitas yang digunakan
  synchronize: true,         // Hanya untuk pengembangan
};
