import https from '@/lib/http';

const userTemplateApiRequest = {
    getAll: () => https.get('user-template'),
    getById: (user_id: number | undefined) =>
        https.get(`user-template/${user_id}`, {
            cache: 'no-cache',
        }),
    getTemplateByStorename: (storename: string | undefined) => https.get(`user-template/template-by-store?store=${storename}`),
    create: (body: { userId: number; templateId: number; status: string }) => https.post(`user-template`, body),
    update: (user_id: number | undefined, template_id: number | undefined, body: { status: string }) =>
        https.patch(`user-template/${user_id}/${template_id}`, body),
    updatePublish: (user_id: number | undefined, template_id: number | undefined) =>
        https.patch(`user-template/user/${user_id}/${template_id}`, null),
    destroy: (id: number | undefined) => https.delete(`user-template/${id}`, null),
};

export default userTemplateApiRequest;
