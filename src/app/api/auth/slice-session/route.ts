/* eslint-disable @typescript-eslint/no-explicit-any */
import authApiRequest from '@/HttpRequest/authRequest';
import { HttpError } from '@/lib/http';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    const cookieStore = await cookies();
    const { refreshToken } = await req.json();

    if (!refreshToken) {
        return Response.json(
            {
                message: 'refreshToken token not found',
            },
            {
                status: 400,
            },
        );
    }
    try {
        const result = await authApiRequest.sliceSessionFromNextServerToServer(refreshToken);
        const newExpiresAt = new Date((result.payload as any).data.expiresAt);
        cookieStore.set({
            name: 'sessionToken',
            value: (result.payload as any).data.accessToken,
            httpOnly: true,
            path: '/',
            expires: newExpiresAt,
        });
        return Response.json(result.payload, {
            status: 200,
        });
    } catch (error) {
        if (error instanceof HttpError) {
            return Response.json(error.payload, {
                status: error.status,
            });
        } else {
            console.log(error);

            return Response.json(
                {
                    message: 'Loi khong xac dinh',
                },
                { status: 500 },
            );
        }
    }
}
