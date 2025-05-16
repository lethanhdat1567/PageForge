/* eslint-disable @typescript-eslint/no-explicit-any */
import envConfig from '@/config';
import { EntityError } from '@/lib/http';
import { tokensType, userType } from '@/lib/type';
import { clsx, type ClassValue } from 'clsx';
import { UseFormSetError } from 'react-hook-form';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const normalizePath = (url: string | undefined) => {
    if (url) {
        return url.startsWith('/') ? url.slice(1) : url;
    } else {
        throw new Error('Khong tim thay url');
    }
};

export const getToken = (): tokensType => {
    return JSON.parse(localStorage.getItem('tokens') as string);
};

export const getUser = (): userType => {
    return JSON.parse(localStorage.getItem('user') as string);
};

export const handleErrorApi = ({ error, setError }: { error: any; setError?: UseFormSetError<any> }) => {
    if (error instanceof EntityError && setError) {
        error.payload.errors.forEach((error) => {
            setError(error.field, {
                type: 'server',
                message: error.message,
            });
        });
    } else {
        toast.error(error.payload?.message ?? 'Lỗi hệ thống');
    }
};

export const resolveImgUrl = (url: string | undefined) => {
    if (url) {
        if (url.startsWith('https://lh3.googleusercontent.com') || url.startsWith('blob')) {
            return url;
        }
        const filterUrl = url ? (url.startsWith('/') ? url : `/${url}`) : '';
        const fullUrl = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}${filterUrl}`;

        return fullUrl;
    } else {
        return '';
    }
};

export const formatDate = (date: string) => {
    if (date) {
        const formatDate = new Date(date);
        return formatDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
    return '';
};
