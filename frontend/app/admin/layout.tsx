import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Header } from "./components/Header";
import { AdminSideBar } from "./components/AdminSideBar";
import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) return redirect("/login");

  const user = await clerkClient.users.getUser(userId);
  const role = user.publicMetadata.role;

  if (role !== "admin") {
    return redirect("/unauthorized");
  }

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />

      <div className="flex flex-1">
        <AdminSideBar />
        <div className="flex-1 bg-[#F9F9FB] overflow-y-auto">
          {children}
          <Toaster richColors position="top-right" />
        </div>
      </div>
    </div>
  );
}
