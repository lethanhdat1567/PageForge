import https from '@/lib/http';

const templateApiRequest = {
    // Lấy danh sách tất cả template
    getAll: ({ status, search, sort }: { status?: string; search?: string; sort?: string }, sessionToken?: string) =>
        https.get(`/templates?status=${status || ''}&search=${search || ''}&sort=${sort}`, {
            ...(sessionToken && {
                headers: {
                    Authorization: `Bearer ${sessionToken}`,
                },
                cache: 'no-store',
            }),
        }),

    // Lấy chi tiết 1 template theo ID
    getById: (id: number | string | undefined) => https.get(`/templates/${id}`),

    // Tạo mới template (dùng FormData để upload file)
    createTemplate: (formData: FormData) => {
        return https.post('/templates', formData);
    },

    updateTemplate: (id: number, body: FormData) => {
        return https.put(`/templates/${id}`, body);
    },

    updateFieldTemplate: (id: number | undefined, body: { name?: string; status?: string }) => {
        return https.patch(`/templates/${id}`, body, {
            cache: 'no-cache',
        });
    },

    // Xoá template
    deleteTemplate: (id: number) => https.delete(`/templates/${id}`, null),
    bulkDeleteTemplate: (ids: number[]) => https.delete(`/templates/bulk`, { ids }),
};

export default templateApiRequest;
