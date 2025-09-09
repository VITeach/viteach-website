'use client';
import * as z from 'zod';
import { formSchema } from '@/lib/schema';
import { serverAction } from '@/actions/server-action';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useAction } from 'next-safe-action/hooks';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectTrigger,
  MultiSelectValue,
} from '@/components/ui/multi-select';
import { Checkbox } from '@/components/ui/checkbox';

export function DraftForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reg_number: '',
      year: '',
      introduction: '', // Fixed: Changed from 'Textarea-7' to 'introduction'
      why: '',
      departments: [],
      why_dep: '',
      how_time: '',
      agree: false,
    },
  });

  const doSthAction = useAction(serverAction, {
    onSuccess: () => {
      form.reset();
    },
    onError: (error) => {
      console.error('Form submission error:', error);
    },
  });

  const handleSubmit = form.handleSubmit(doSthAction.execute);
  const isPending = doSthAction.status === 'executing';

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-2 md:p-5 w-full mx-auto rounded-md max-w-3xl gap-2 border"
        >
          <h1 className="mt-6 font-extrabold text-3xl tracking-tight text-red-900">
            It all starts here
          </h1>
          <p className="tracking-wide text-muted-foreground mb-6 text-wrap text-sm">
            Please fill out the form below to be a part of VITeach family
          </p>

          <FormField
            control={form.control}
            name="reg_number"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-gray-800 font-medium">
                  Registration Number *
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    value={field.value}
                    onChange={field.onChange} // Simplified
                    placeholder="Enter your Registration Number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => {
              const options = [
                { label: 'First year', value: '1' },
                { label: 'Second year', value: '2' },
                { label: 'Third year', value: '3' },
                { label: 'Fourth year', value: '4' },
                { label: 'Fifth year', value: '5' },
              ];
              return (
                <FormItem className="w-full">
                  <FormLabel className="text-gray-800 font-medium">
                    Which year are you in? *
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map(({ label, value }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="introduction"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">
                  Introduce yourself *
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Tell us about yourself..."
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="why"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">
                  Why do you want to join VITeach? *
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your text"
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="departments"
            render={({ field }) => {
              const options = [
                { value: 'casm', label: 'Content and Social Media' },
                { value: 'design', label: 'Design' },
                { value: 'events', label: 'Events and Human Resource' },
                { value: 'outreach', label: 'Outreach' },
                { value: 'school', label: 'School' },
                { value: 'technical', label: 'Technical' },
              ];
              return (
                <FormItem className="w-full">
                  <FormLabel className="text-gray-800 font-medium">
                    Which department(s) are you interested in? *
                  </FormLabel>
                  <MultiSelect
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <MultiSelectTrigger>
                        <MultiSelectValue placeholder="Pick one or more Departments" />
                      </MultiSelectTrigger>
                    </FormControl>
                    <MultiSelectContent>
                      <MultiSelectList>
                        {options.map(({ label, value }) => (
                          <MultiSelectItem key={value} value={value}>
                            {label}
                          </MultiSelectItem>
                        ))}
                      </MultiSelectList>
                    </MultiSelectContent>
                  </MultiSelect>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="why_dep"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">
                  Why do you want to join the department(s) you selected? *
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your text"
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="how_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">
                  Being part of a club is time-consuming. How would you manage
                  your time with academics? *
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter your text"
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-gray-800 font-medium">
                    I agree to share my information with VITeach Board members.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="flex justify-end items-center w-full pt-3">
            <Button
              type="submit"
              className="rounded-lg"
              size="sm"
              disabled={isPending}
            >
              {isPending ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
