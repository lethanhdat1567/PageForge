import https from '@/lib/http';

const reviewApiRequest = {
    // Lấy danh sách tất cả template
    getAll: ({ rating }: { rating: 'good' | 'neutral' | 'bad' }, sessionToken?: string) =>
        https.get(`/reviews?rating=${rating}`, {
            ...(sessionToken && {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
                cache: 'no-store',
            }),
        }),
    // Lấy danh sách reviews theo template_id
    getByTemplateId: (template_id: number, sessionToken?: string) =>
        https.get(`/reviews/template/${template_id}`, {
            ...(sessionToken && {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
            }),
        }),

    // Lấy 1 review cụ thể theo ID
    getById: (id: number, sessionToken?: string) =>
        https.get(`/reviews/${id}`, {
            ...(sessionToken && {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
            }),
        }),

    // Tạo review mới
    create: (
        data: {
            user_id: number;
            user_template_id: number;
            rating: 'good' | 'neutral' | 'bad';
            content?: string;
            parent_id?: number | null;
        },
        sessionToken?: string,
    ) =>
        https.post(`/reviews`, data, {
            ...(sessionToken && {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
            }),
        }),

    // Cập nhật review
    update: (
        id: number,
        data: {
            rating?: 'good' | 'neutral' | 'bad';
            content?: string;
        },
        sessionToken?: string,
    ) =>
        https.put(`/reviews/${id}`, data, {
            ...(sessionToken && {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
            }),
        }),

    // Xoá 1 review
    delete: (id: number, sessionToken?: string) =>
        https.delete(`/reviews/${id}`, {
            ...(sessionToken && {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
            }),
        }),

    // Xoá nhiều review (bulk delete)
    bulkDelete: (ids: number[], sessionToken?: string) =>
        https.post(
            `/reviews/bulk-delete`,
            { ids },
            {
                ...(sessionToken && {
                    headers: {
                        Authorization: `Bearer ${sessionToken}`,
                    },
                }),
            },
        ),
};

export default reviewApiRequest;
