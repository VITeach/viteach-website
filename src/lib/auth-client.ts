/*
 * This file is used to export the necessary functions for the auth related operations.
 */

import { createAuthClient } from 'better-auth/react';
const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

export const { signIn, signUp, signOut, useSession } = authClient;
