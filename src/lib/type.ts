import { StaticImageData } from 'next/image';

export type ServiceType = {
    title: string;
    subTitle: string;
    variant: 'outline' | 'primary' | 'secondary';
    linkVariant: string;
    image: StaticImageData;
    path: string;
};

export type userType = {
    id: number;
    username: string;
    email: string;
    avatar: string;
};

export type tokensType = {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: number;
};

export type BookingType = {
    id: number;
    username: string;
    customer: string;
    customerEmail: string;
    customerPhone: string;
    members: number;
    bookingDate: Date;
    createdAt: Date;
    updatedAt: Date;
};
