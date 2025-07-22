"use client";

import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Бүртгэлтэй хаягаараа нэвтэрнэ үү
      </h1>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <SignIn routing="hash" forceRedirectUrl="/redirect" />
      </div>
    </div>
  );
};

export default LoginPage;
