import { ReactNode } from "react";
import { AdminSideBar } from "./components/AdminSideBar";
import { Toaster } from "sonner";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      <AdminSideBar />
      <div className="flex-1 bg-[#F9F9FB]">
        {children}
        <Toaster richColors position="top-right" />
      </div>
    </div>
  );
}
