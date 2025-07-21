import { ReactNode } from "react";
import { Toaster } from "sonner";
import { VendorSideBar } from "./components/VendorSideBar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      <VendorSideBar />
      <div className="flex-1 bg-[#F9F9FB]">
        {children}
        <Toaster richColors position="top-right" />
      </div>
    </div>
  );
}
