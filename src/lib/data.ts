import {
  CheckCircle,
  Clock,
  Palette,
  Pencil,
  UsersRound,
  XCircle,
} from "lucide-react";
import {
  LayoutDashboard,
  CalendarCheck2,
  Table,
  Users,
  Building2,
  Bell,
  Settings,
} from "lucide-react";
import {
  FacebookIcon,
  LinkedIcon,
  TwitterIcon,
} from "../../public/icons/icons";

export const navbarData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Templates",
    path: "/templates",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
];

export const footerIcons = [
  {
    icon: LinkedIcon,
    link: "/",
  },
  {
    icon: FacebookIcon,
    link: "/",
  },
  {
    icon: TwitterIcon,
    link: "/",
  },
];

export const contactInfoData = [
  " Email: info@positivus.com",
  "Phone: 555-567-8901",
  "Address: 1234 Main St Moonstone City, Stardust State 12345",
];

export const templatesType = [
  {
    id: 1,
    name: "Link in Bio Page",
  },
  {
    id: 2,
    name: "Portfolio Website",
  },
  {
    id: 3,
    name: "Landing Page",
  },
  {
    id: 4,
    name: "Event Landing Page",
  },
  {
    id: 5,
    name: "Event Landing Page",
  },
  {
    id: 6,
    name: "Event Landing Page",
  },
];

export const howItWorkData = [
  {
    icon: Pencil,
    title: "1. Create your free PageForge account",
    desc: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital",
  },
  {
    icon: Palette,
    title: "2. Choice your own custom PageForge",
    desc: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital",
  },
  {
    icon: UsersRound,
    title: "3. Connect and grow your cross-channel following",
    desc: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital",
  },
];

export const adminSidebar = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    label: "Quản lý Đặt Bàn",
    icon: CalendarCheck2,
    path: "/reservations",
  },
  {
    label: "Quản lý Bàn",
    icon: Table,
    path: "/tables",
  },
  {
    label: "Quản lý Người Dùng",
    icon: Users,
    path: "/users",
  },
  {
    label: "Quản lý Chi Nhánh",
    icon: Building2,
    path: "/branches",
  },
  {
    label: "Thông báo",
    icon: Bell,
    path: "/notifications",
  },
  {
    label: "Cài đặt hệ thống",
    icon: Settings,
    path: "/settings",
  },
];

export const cardDashboardData = [
  {
    title: "Tổng số bàn",
    value: 100,
    icon: Table,
    color: "#3B82F6", // Blue 500
  },
  {
    title: "Bàn đã đặt",
    value: 45,
    icon: CheckCircle,
    color: "#10B981", // Emerald 500
  },
  {
    title: "Bàn còn trống",
    value: 55,
    icon: XCircle,
    color: "#F97316", // Orange 500
  },
  {
    title: "Đơn đặt bàn chờ xác nhận",
    value: 10,
    icon: Clock,
    color: "#F59E0B", // Amber 500
  },
];
