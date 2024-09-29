"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
var book_entity_1 = require("../../domain/book/book.entity");
var member_entity_1 = require("../../domain/member/member.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost', // Ubah sesuai host PostgreSQL Anda
    port: 5432, // Port default PostgreSQL
    username: 'your-username', // Username PostgreSQL Anda
    password: 'your-password', // Password PostgreSQL Anda
    database: 'library', // Nama database
    entities: [book_entity_1.Book, member_entity_1.Member], // Entitas yang digunakan
    synchronize: true, // Hanya untuk pengembangan
};
