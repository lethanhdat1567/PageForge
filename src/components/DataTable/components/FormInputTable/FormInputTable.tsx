/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

function FormInputTable({ id, value }: { id: number; value: any }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
                    loading: `Saving`,
                    success: 'Done',
                    error: 'Error',
                });
            }}
        >
            <Label htmlFor={`${id}-target`} className="sr-only">
                Target
            </Label>
            <Input
                className="h-8 w-full min-w-[120px] border-transparent bg-transparent text-center shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background"
                defaultValue={value}
                id={`${id}-target`}
            />
        </form>
    );
}

export default FormInputTable;
