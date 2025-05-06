import { CheckCircle, Clock, LifeBuoy, Palette, Pencil, PhoneIncoming, Store, User2, Users, UsersRound, XCircle } from 'lucide-react';
import { LayoutDashboard, CalendarCheck2, Table, Building2, Settings } from 'lucide-react';
import { FacebookIcon, LinkedIcon, TwitterIcon } from '../../public/icons/icons';
import { tableResType } from '@/schemaValidations/table.schema';
import { branchResType } from '@/schemaValidations/branch.schema';
import { UserResType } from '@/schemaValidations/user.schema';
import { BookingType } from '@/lib/type';

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

export const adminPanelSidebar = [
    {
        label: 'Tổng quan hệ thống',
        icon: LayoutDashboard,
        path: '/panel',
    },
    {
        label: 'Quản lý Người dùng',
        icon: User2,
        path: '/panel/users',
    },
    {
        label: 'Quản lý Booking',
        icon: CalendarCheck2,
        path: '/panel/bookings',
    },
    {
        label: 'Quản lý Giao diện',
        icon: Palette,
        path: '/panel/templates',
    },
    {
        label: 'Hỗ trợ & Phản hồi',
        icon: LifeBuoy,
        path: '/panel/support',
    },
    {
        label: 'Cài đặt hệ thống',
        icon: Settings,
        path: '/panel/settings',
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

export const cardPanelDashboardData = [
    {
        title: 'Tổng người dùng',
        value: 100,
        icon: Users,
        color: '#3B82F6',
    },
    {
        title: 'Tổng số booking',
        value: 45,
        icon: PhoneIncoming,
        color: '#10B981',
    },
    {
        title: 'Tổng template',
        value: 55,
        icon: Store,
        color: '#F97316',
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
export const mockUsers: UserResType[] = [
    {
        id: 1,
        username: 'lethanhdat',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        email: 'lethanhdat@example.com',
        createAt: new Date('2024-05-01T08:30:00'),
        updatedAt: new Date('2024-05-06T10:15:00'),
    },
    {
        id: 2,
        username: 'hoangminh',
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        email: 'hoangminh@example.com',
        createAt: new Date('2024-04-25T12:45:00'),
        updatedAt: new Date('2024-05-04T09:20:00'),
    },
    {
        id: 3,
        username: 'ngocanh',
        avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
        email: 'ngocanh@example.com',
        createAt: new Date('2024-03-10T14:00:00'),
        updatedAt: new Date('2024-04-20T16:05:00'),
    },
    {
        id: 4,
        username: 'tranquocbao',
        avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
        email: 'tranquocbao@example.com',
        createAt: new Date('2024-01-15T11:30:00'),
        updatedAt: new Date('2024-05-01T13:30:00'),
    },
    {
        id: 5,
        username: 'phuonglinh',
        avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
        email: 'phuonglinh@example.com',
        createAt: new Date('2023-12-20T09:00:00'),
        updatedAt: new Date('2024-04-29T08:40:00'),
    },
    {
        id: 6,
        username: 'quanghuy',
        avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
        email: 'quanghuy@example.com',
        createAt: new Date('2024-02-02T07:15:00'),
        updatedAt: new Date('2024-05-02T17:50:00'),
    },
    {
        id: 7,
        username: 'tramy',
        avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
        email: 'tramy@example.com',
        createAt: new Date('2024-03-05T10:10:00'),
        updatedAt: new Date('2024-04-30T12:10:00'),
    },
    {
        id: 8,
        username: 'khanhduy',
        avatar: 'https://randomuser.me/api/portraits/men/88.jpg',
        email: 'khanhduy@example.com',
        createAt: new Date('2024-04-01T15:00:00'),
        updatedAt: new Date('2024-05-03T11:15:00'),
    },
    {
        id: 9,
        username: 'thuylinh',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        email: 'thuylinh@example.com',
        createAt: new Date('2024-01-10T13:45:00'),
        updatedAt: new Date('2024-05-05T14:30:00'),
    },
    {
        id: 10,
        username: 'minhchau',
        avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
        email: 'minhchau@example.com',
        createAt: new Date('2024-02-28T18:20:00'),
        updatedAt: new Date('2024-05-06T09:10:00'),
    },
];
export const mockBookings: BookingType[] = [
    {
        id: 1,
        username: 'Nguyễn Văn A', // Người đặt bàn (quản lý hoặc nhân viên)
        customer: 'Nguyễn Thị C', // Tên khách hàng
        customerEmail: 'nguyen.c@example.com', // Email khách hàng
        customerPhone: '0912345678', // Số điện thoại khách hàng
        members: 4, // Số người đặt bàn
        bookingDate: new Date('2024-04-01T18:30:00'), // Ngày và giờ đặt bàn
        createdAt: new Date('2024-03-28T10:00:00'), // Thời gian tạo booking
        updatedAt: new Date('2024-03-28T10:15:00'), // Thời gian cập nhật booking
    },
    {
        id: 2,
        username: 'Trần Thị B', // Người đặt bàn
        customer: 'Lê Hoàng D', // Tên khách hàng
        customerEmail: 'hoangd@example.com', // Email khách hàng
        customerPhone: '0987654321', // Số điện thoại khách hàng
        members: 2, // Số người đặt bàn
        bookingDate: new Date('2024-04-02T19:00:00'), // Ngày và giờ đặt bàn
        createdAt: new Date('2024-03-30T12:30:00'), // Thời gian tạo booking
        updatedAt: new Date('2024-03-30T12:45:00'), // Thời gian cập nhật booking
    },
    {
        id: 3,
        username: 'Nguyễn Minh T', // Người đặt bàn
        customer: 'Hoàng Thị E', // Tên khách hàng
        customerEmail: 'hoang.e@example.com', // Email khách hàng
        customerPhone: '0915678945', // Số điện thoại khách hàng
        members: 3, // Số người đặt bàn
        bookingDate: new Date('2024-04-05T20:00:00'), // Ngày và giờ đặt bàn
        createdAt: new Date('2024-04-01T11:00:00'), // Thời gian tạo booking
        updatedAt: new Date('2024-04-01T11:30:00'), // Thời gian cập nhật booking
    },
    {
        id: 4,
        username: 'Lê Hoàng C', // Người đặt bàn
        customer: 'Vũ Minh D', // Tên khách hàng
        customerEmail: 'minhd@example.com', // Email khách hàng
        customerPhone: '0934123456', // Số điện thoại khách hàng
        members: 5, // Số người đặt bàn
        bookingDate: new Date('2024-04-07T17:00:00'), // Ngày và giờ đặt bàn
        createdAt: new Date('2024-04-02T09:30:00'), // Thời gian tạo booking
        updatedAt: new Date('2024-04-02T10:00:00'), // Thời gian cập nhật booking
    },
];
