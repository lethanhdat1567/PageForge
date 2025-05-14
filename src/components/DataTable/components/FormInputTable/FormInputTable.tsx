/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import templateApiRequest from '@/HttpRequest/templateRequest';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

function FormInputTable({ id, value, field }: { id: any; value: any; field: 'template' }) {
    const router = useRouter();
    const [inputValue, setInputValue] = useState(value);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await templateApiRequest.updateFieldTemplate(id, { name: inputValue });
            router.refresh();
            toast.success('Cập nhật thành công');
        } catch (error) {
            console.log(error);
            toast.error('Cập nhật thất bại');
        }
        if (field === 'template') {
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Label htmlFor={`${id}-target`} className="sr-only">
                Target
            </Label>
            <Input
                className="h-8 w-full min-w-[120px] border-transparent bg-transparent text-center shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background"
                defaultValue={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                id={`${id}-target`}
            />
        </form>
    );
}

export default FormInputTable;
