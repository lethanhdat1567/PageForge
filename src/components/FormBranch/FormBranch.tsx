'use client';

import { Input } from '@/components/ui/input'; // Shadcn UI Input
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form'; // Shadcn UI Form components
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { branchBody, branchResType } from '@/schemaValidations/branch.schema';

function FormBranch() {
    // Set default values for the form fields
    const form = useForm<z.infer<typeof branchBody>>({
        resolver: zodResolver(branchBody),
        defaultValues: {
            id: 0, // Default ID value
            branch_name: '', // Default branch name (empty string)
            num_of_table: 1, // Default number of tables (1)
        },
    });

    function onSubmit(values: branchResType) {
        console.log(values); // Process the form data or API call
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Branch Name Field */}
                <FormField
                    control={form.control}
                    name="branch_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên chi nhánh</FormLabel>
                            <FormControl>
                                <Input placeholder="Tên chi nhánh" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Capacity Field */}
                <FormField
                    control={form.control}
                    name="num_of_table"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sức chứa</FormLabel>
                            <FormControl>
                                <Input type="number" min={1} placeholder="Nhập sức chứa" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <DialogFooter>
                    <Button type="submit">Lưu thay đổi</Button>
                </DialogFooter>
            </form>
        </Form>
    );
}

export default FormBranch;
