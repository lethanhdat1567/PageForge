/* eslint-disable @typescript-eslint/no-explicit-any */
import https from '@/lib/http';

const accountApiRequest = {
    getAll: () => https.get('account'),
    getById: (id: number | undefined) => https.get(`account/${id}`),
    update: (id: number | undefined, body: any) => https.patch(`account/${id}`, body),
    destroy: (id: number | undefined) => https.delete(`account/${id}`, null),
};

export default accountApiRequest;
