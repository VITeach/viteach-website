import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const form = pgTable('form', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  message: text('message').notNull(),
});
