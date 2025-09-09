import { pgTable, text, timestamp, boolean, json } from 'drizzle-orm/pg-core';

export const formSubmission = pgTable('form_submission', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  user_id: text('user_id').notNull(),
  reg_number: text('reg_number').notNull(),
  year: text('year').notNull(),
  introduction: text('introduction').notNull(),
  why: text('why').notNull(),
  departments: json('departments').$type<string[]>().notNull(),
  why_dep: text('why_dep').notNull(),
  how_time: text('how_time').notNull(),
  agree: boolean('agree').notNull(),
  is_approved: boolean('is_approved')
    .$defaultFn(() => false)
    .notNull(),
  createdAt: timestamp('created_at')
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: timestamp('updated_at')
    .$defaultFn(() => new Date())
    .notNull(),
});
