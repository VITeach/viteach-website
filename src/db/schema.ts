/*
 * This file is used by drizzle to create the tables in the database.
 * It is used to export all the tables from the schema folder.
 */

import { user, session, account, verification } from './schema/';
import { formSubmission } from './schema/form-schema';

export { user, session, account, verification, formSubmission };
