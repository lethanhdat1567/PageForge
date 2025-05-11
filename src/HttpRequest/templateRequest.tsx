import https from '@/lib/http';

const templateApiRequest = {
    // Lấy danh sách tất cả template
    getAll: (sessionToken: string | undefined) =>
        https.get('/templates', {
            headers: {
                Authorization: `Bearer ${sessionToken}`,
            },
        }),

    // Lấy chi tiết 1 template theo ID
    getById: (id: number, sessionToken: string | undefined) =>
        https.get(`/templates/${id}`, {
            headers: {
                Authorization: `Bearer ${sessionToken}`,
            },
        }),

    // Tạo mới template (dùng FormData để upload file)
    createTemplate: (formData: FormData) => {
        return https.post('/templates', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },

    updateTemplate: (id: number, body: FormData) => {
        return https.put(`/templates/${id}`, body);
    },

    // Xoá template
    deleteTemplate: (id: number) => https.delete(`/templates/${id}`, null),
};

export default templateApiRequest;
