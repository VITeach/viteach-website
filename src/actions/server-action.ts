'use server';
import { actionClient } from './safe-action';
import { formSchema } from '../lib/schema';
import { db } from '@/db';
// Import your form table from schema if you want to save to database
// import { form } from '@/db/schema/form-schema';

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    try {
      // Here you can save the form data to your database
      // Example:
      // await db.insert(form).values({
      //   id: crypto.randomUUID(),
      //   name: parsedInput.name, // adjust based on your actual schema
      //   email: parsedInput.email,
      //   // ... other fields
      // });

      // Log the form data for now
      console.log('Form submission received:', parsedInput);

      // You could also send an email notification here
      // await sendEmailNotification(parsedInput);

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
