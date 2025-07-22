// app/redirect/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function RoleRedirectPage() {
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      router.push("/login");
      return;
    }

    const role = user?.publicMetadata?.role;

    if (role === "admin") {
      router.replace("/admin");
    } else if (role === "vendor") {
      router.replace("/vendor");
    }
  }, [isLoaded, isSignedIn, router, user]);

  return <p className="text-center p-8">Нэвтрэлт хийж байна...</p>;
}
