/*
 * This file is used to define the schema for the database.
 * Standard procedure is to create a new file for each collective group of tables.
 * This file is used to export all the tables from the schema.
 */

import { user, session, account, verification } from './auth-schema';
import { formSubmission } from './form-schema';

export { user, session, account, verification, formSubmission };
