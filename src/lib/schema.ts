import * as z from 'zod';

// eslint-disable-next-line
export interface ActionResponse<T = any> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}

export const formSchema = z.object({
  reg_number: z.string().min(1, 'Registration number is required'),
  year: z.string().min(1, 'Year selection is required'),
  introduction: z.string().min(10, 'Please write at least 10 characters'),
  why: z
    .string()
    .min(10, 'Please explain why you want to join (minimum 10 characters)'),
  departments: z
    .array(z.string())
    .min(1, 'Please select at least one department'),
  why_dep: z
    .string()
    .min(10, 'Please explain your department choice (minimum 10 characters)'),
  how_time: z
    .string()
    .min(
      10,
      'Please explain your time management strategy (minimum 10 characters)'
    ),
  agree: z.boolean().refine((val) => val === true, {
    message: 'You must agree to share your information',
  }),
});
