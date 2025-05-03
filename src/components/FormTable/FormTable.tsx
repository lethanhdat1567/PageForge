import { Input } from '@/components/ui/input'; // Shadcn UI Input
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from '@/components/ui/form'; // Shadcn UI Form components
import { tableBody, tableResType } from '@/schemaValidations/table.schema';
import { DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function FormTable() {
    const form = useForm<z.infer<typeof tableBody>>({
        resolver: zodResolver(tableBody),
        defaultValues: {
            location: '',
            capacity: 1,
            status: 'available',
        },
    });

    function onSubmit(values: tableResType) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Location Field */}
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Vị trí</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập vị trí" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Capacity Field */}
                <FormField
                    control={form.control}
                    name="capacity"
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

                {/* Status Field */}
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Trạng thái</FormLabel>
                            <FormControl>
                                <select className="w-full border p-2 rounded" {...field}>
                                    <option value="available">Có sẵn</option>
                                    <option value="is_use">Đang sử dụng</option>
                                    <option value="maintain">Bảo trì</option>
                                </select>
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

export default FormTable;
