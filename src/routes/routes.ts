/* eslint-disable @typescript-eslint/no-explicit-any */
import Collection from '@/app/theme/(store)/test1/(routes)/Collection/Collection';
import Home from '@/app/theme/(store)/test1/(routes)/Home/Home';

type Route = {
    path: string;
    children: React.FC;
    layout?: any;
};

export const test1Routes: Route[] = [
    {
        path: '',
        children: Home,
    },
    {
        path: 'collection',
        children: Collection,
    },
];
