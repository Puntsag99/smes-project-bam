import Link from "next/link";
import {
  MessageCircle,
  Home,
  Users,
  Package,
  BarChartHorizontal,
  BarChart2,
  Truck,
  DollarSign,
  ClipboardList,
} from "lucide-react";

export const AdminSideBar = () => {
  const navItems = [
    {
      label: "Нүүр",
      href: "/admin",
      icon: <Home className="h-5 w-5" />,
    },
    {
      label: "Харилцагч байгууллагууд",
      href: "/admin/customers",
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Бүтээгдэхүүн",
      href: "/admin/products",
      icon: <Package className="h-5 w-5" />,
    },
    {
      label: "Борлуулалт",
      href: "/admin/sales",
      icon: <BarChartHorizontal className="h-5 w-5" />,
    },
    {
      label: "График Тайлан",
      href: "/admin/reports",
      icon: <BarChart2 className="h-5 w-5" />,
    },
    {
      label: "Төлбөр Тооцоо",
      href: "/admin/payments",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      label: "Түгээгч",
      href: "/admin/deliveries",
      icon: <Truck className="h-5 w-5" />,
    },

    {
      label: "Түгээлтийн төлөвлөгөө",
      href: "/admin/delivery-plan",
      icon: <ClipboardList className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex flex-col bg-[#203651] h-full w-64 text-white p-4 gap-y-2">
      <p className="flex gap-x-2 items-center text-lg font-semibold mb-4">
        <MessageCircle className="h-5 w-5" />
        Admin
      </p>

      {navItems.map((item, index) => (
        <Link href={item.href} key={index}>
          <div className="flex items-center gap-x-2 py-2 px-3 rounded-md hover:bg-[#2d4a6a] transition-colors cursor-pointer">
            {item.icon}
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
