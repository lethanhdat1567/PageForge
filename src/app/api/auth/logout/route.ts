import authApiRequest from '@/HttpRequest/authRequest';
import { HttpError } from '@/lib/http';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    const cookiesStore = await cookies();
    const { refreshToken, force } = await req.json();

    if (force) {
        cookiesStore.delete('sessionToken');
        cookiesStore.delete('role');
        return Response.json(
            {
                message: 'Buộc đăng xuất thành công',
            },
            {
                status: 200,
            },
        );
    }

    if (!refreshToken) {
        return Response.json(
            {
                message: 'Refresh token not found',
            },
            {
                status: 400,
            },
        );
    }

    try {
        const result = await authApiRequest.logoutFromNextServerToServer(refreshToken);
        cookiesStore.delete('sessionToken');
        cookiesStore.delete('role');
        return Response.json(result.payload, {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        if (error instanceof HttpError) {
            return Response.json(error.payload, {
                status: error.status,
            });
        } else {
            return Response.json(
                {
                    message: 'Loi khong xac dinh',
                },
                { status: 500 },
            );
        }
    }
}
