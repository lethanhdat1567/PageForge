import { cookies } from 'next/headers';

export async function POST(req: Request) {
    const cookieStore = await cookies();
    const { data } = await req.json();

    const sessionToken = data.data.token.accessToken;
    const role = data.data.account.role;
    const expiresValue = data.data.token.accessTokenExpiresIn;
    if (!sessionToken) {
        return Response.json(
            {
                message: 'Session token not found',
            },
            {
                status: 400,
            },
        );
    }
    const expiresAt = new Date(Date.now() + expiresValue);

    cookieStore.set({
        name: 'sessionToken',
        value: sessionToken,
        httpOnly: true,
        path: '/',
        expires: expiresAt,
    });
    cookieStore.set({
        name: 'role',
        value: role,
        httpOnly: true,
        path: '/',
        expires: expiresAt,
    });
    return Response.json(
        {
            sessionToken,
        },
        {
            status: 200,
        },
    );
}
