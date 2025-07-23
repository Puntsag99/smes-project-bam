"use client";
import { PackageCheck, RotateCcw, MessageCircle, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export const VendorSideBar = () => {
  const router = useRouter();
  const navItems = [
    {
      label: "Нүүр",
      href: "/vendor",
      icon: <Home className="h-5 w-5" />,
    },

    {
      label: "Түгээсэн Бараа",
      href: "/vendor/delivery-report",
      icon: <PackageCheck className="h-5 w-5" />,
    },

    {
      label: "Буцаалт Бүртгэх",
      href: "/vendor/returns",
      icon: <RotateCcw className="h-5 w-5" />,
    },
  ];
  return (
    <div className="flex flex-col bg-[#203651] h-full w-64 text-white p-4 gap-y-2">
      <p className="flex gap-x-2 items-center text-lg font-semibold mb-4">
        <MessageCircle className="h-5 w-5" />
        Vendor
      </p>

      {navItems.map((item, index) => (
        <div
          key={index}
          onClick={() => router.push(item.href)}
          className="flex items-center gap-x-2 py-2 px-3 rounded-md hover:bg-[#2d4a6a] transition-colors cursor-pointer"
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};
