'use server';
import { actionClient } from './safe-action';
import { formSchema } from '../lib/schema';
import { db } from '@/db';
import { formSubmission } from '@/db/schema/form-schema';

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    try {
      await db.insert(formSubmission).values({
        user_id: parsedInput.user_id || 'anonymous', // Provide fallback value
        reg_number: parsedInput.reg_number,
        year: parsedInput.year,
        introduction: parsedInput.introduction,
        why: parsedInput.why,
        departments: parsedInput.departments,
        why_dep: parsedInput.why_dep,
        how_time: parsedInput.how_time,
        agree: parsedInput.agree,
        is_approved: false,
      });

      console.log('Form submission received:', parsedInput);

      return {
        success: true,
        message:
          'Application submitted successfully! We will contact you via email shortly.',
      };
    } catch (error) {
      console.error('Server action error:', error);
      throw new Error('Failed to submit application. Please try again.');
    }
  });
