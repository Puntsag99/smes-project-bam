import Link from "next/link";
import {
  MessageCircle,
  Home,
  ShoppingCart,
  Undo2,
  History,
} from "lucide-react";

export const UserSideBar = () => {
  const navItems = [
    {
      label: "Нүүр",
      href: "/user",
      icon: <Home className="h-5 w-5" />,
    },
    {
      label: "Захиалга",
      href: "/user/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      label: "Захиалгийн түүх",
      href: "/user/order-history",
      icon: <History className="h-5 w-5" />,
    },
    {
      label: "Буцаалт",
      href: "/user/returns",
      icon: <Undo2 className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex flex-col bg-[#203651] h-full w-64 text-white p-4 gap-y-2">
      <p className="flex gap-x-2 items-center text-lg font-semibold mb-4">
        <MessageCircle className="h-5 w-5" />
        Дэлгүүр
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
