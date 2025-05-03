import { CheckCircle, Clock, Palette, Pencil, Store, UsersRound, XCircle } from 'lucide-react';
import { LayoutDashboard, CalendarCheck2, Table, Building2, Settings } from 'lucide-react';
import { FacebookIcon, LinkedIcon, TwitterIcon } from '../../public/icons/icons';
import { tableResType } from '@/schemaValidations/table.schema';
import { branchResType } from '@/schemaValidations/branch.schema';

export const navbarData = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Templates',
        path: '/templates',
    },
    {
        name: 'Contact us',
        path: '/contact',
    },
];

export const footerIcons = [
    {
        icon: LinkedIcon,
        link: '/',
    },
    {
        icon: FacebookIcon,
        link: '/',
    },
    {
        icon: TwitterIcon,
        link: '/',
    },
];

export const contactInfoData = [
    ' Email: info@positivus.com',
    'Phone: 555-567-8901',
    'Address: 1234 Main St Moonstone City, Stardust State 12345',
];

export const templatesType = [
    {
        id: 1,
        name: 'Link in Bio Page',
    },
    {
        id: 2,
        name: 'Portfolio Website',
    },
    {
        id: 3,
        name: 'Landing Page',
    },
    {
        id: 4,
        name: 'Event Landing Page',
    },
    {
        id: 5,
        name: 'Event Landing Page',
    },
    {
        id: 6,
        name: 'Event Landing Page',
    },
];

export const howItWorkData = [
    {
        icon: Pencil,
        title: '1. Create your free PageForge account',
        desc: 'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital',
    },
    {
        icon: Palette,
        title: '2. Choice your own custom PageForge',
        desc: 'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital',
    },
    {
        icon: UsersRound,
        title: '3. Connect and grow your cross-channel following',
        desc: 'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital',
    },
];

export const adminSidebar = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        path: '/admin',
    },
    {
        label: 'Quản lý Đặt Bàn',
        icon: CalendarCheck2,
        path: '/admin/reservations',
    },
    {
        label: 'Quản lý Bàn',
        icon: Table,
        path: '/admin/tables',
    },
    {
        label: 'Quản lý Chi Nhánh',
        icon: Building2,
        path: '/admin/branches',
    },
    {
        label: 'Giao diện trực tuyến',
        icon: Store,
        path: '/admin/store',
    },
    {
        label: 'Cài đặt',
        icon: Settings,
        path: '/admin/settings',
    },
];

export const cardDashboardData = [
    {
        title: 'Tổng số bàn',
        value: 100,
        icon: Table,
        color: '#3B82F6',
    },
    {
        title: 'Bàn đã đặt',
        value: 45,
        icon: CheckCircle,
        color: '#10B981',
    },
    {
        title: 'Bàn còn trống',
        value: 55,
        icon: XCircle,
        color: '#F97316',
    },
    {
        title: 'Đơn đặt bàn chờ xác nhận',
        value: 10,
        icon: Clock,
        color: '#F59E0B',
    },
];

export const tableMockData: tableResType[] = [
    {
        id: 1,
        location: 'Khu A, Tầng 1',
        capacity: 4,
        status: 'available',
    },
    {
        id: 2,
        location: 'Khu B, Tầng 2',
        capacity: 2,
        status: 'is_use',
    },
    {
        id: 3,
        location: 'Khu C, Tầng 3',
        capacity: 6,
        status: 'is_use',
    },
    {
        id: 4,
        location: 'Khu D, Tầng 1',
        capacity: 4,
        status: 'maintain',
    },
    {
        id: 5,
        location: 'Khu E, Tầng 2',
        capacity: 2,
        status: 'available',
    },
];
export const mockBranches: branchResType[] = [
    {
        id: 1,
        branch_name: 'Chi nhánh Hà Nội',
        num_of_table: 15,
    },
    {
        id: 2,
        branch_name: 'Chi nhánh TP. HCM',
        num_of_table: 20,
    },
    {
        id: 3,
        branch_name: 'Chi nhánh Đà Nẵng',
        num_of_table: 10,
    },
    {
        id: 4,
        branch_name: 'Chi nhánh Hải Phòng',
        num_of_table: 8,
    },
    {
        id: 5,
        branch_name: 'Chi nhánh Nha Trang',
        num_of_table: 12,
    },
];
