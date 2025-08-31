/*
 * This file is used to configure the authentication system.
 * Here we are using the drizzle adapter to connect to the database.
 * In case of adding a new provider, make changes here.
 */

import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import * as schema from '@/db/schema';
import { nextCookies } from 'better-auth/next-js';
import 'dotenv/config';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  plugins: [nextCookies()], // Make sure this is the last plugin in the array
  emailAndPassword: {
    enabled: true,
  },
});
