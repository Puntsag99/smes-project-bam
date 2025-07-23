import { ReactNode } from "react";
import { UserSideBar } from "./components/UserSideBar";
import { Toaster } from "sonner";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      <UserSideBar />
      <div className="flex-1 bg-[#F9F9FB]">
        {children}
        <Toaster richColors position="top-right" />
      </div>
    </div>
  );
}
