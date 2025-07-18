"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const SmartHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleLoginAs = (role: string) => {
    setIsModalOpen(false);
    router.push(`/${role.toLowerCase()}/login`);
  };

  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
        <div className="text-2xl font-bold text-blue-600">MENA</div>

        <div>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            Нэвтрэх
          </Button>
        </div>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gray-50">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl flex flex-col font-bold text-gray-800 gap-x-2">
            Үйлдвэрүүдийн борлуулалтыг
            <span className="text-blue-600">автоматжуулъя</span>
          </h1>
        </div>
        <Image
          width={600}
          height={500}
          alt="factory"
          src="/images/factory-dashboard.png"
          className="w-full md:w-auto rounded-md"
        />
      </section>

      <section id="benefits" className="px-8 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Дараах давуу талууд үүснэ:</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">⏱ Цаг хэмнэлт</h3>
            <p>Гараар шивэх, падан бичих процессыг халж, системтэй болгоно.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">📊 Бодит мэдээлэл</h3>
            <p>
              Борлуулалтын, үлдэгдлийн, төлбөрийн тайланг шууд хянах боломж.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              👥 Хэрэглэгчийн хяналт
            </h3>
            <p>
              Admin, Vendor, хэрэглэгч бүр өөрийн үүргээрээ системийг ашиглана.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 bg-gray-100 text-gray-600 text-sm">
        © 2025 MENA — Бүх эрх хуулиар хамгаалагдсан.
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl space-y-4 w-[90%] max-w-md">
            <h2 className="text-xl font-bold text-center text-gray-700">
              Та аль хэрэглэгч вэ?
            </h2>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => handleLoginAs("admin")}
                className="cursor-pointer hover:bg-blue-700"
              >
                Admin
              </Button>
              <Button
                onClick={() => handleLoginAs("vendor")}
                className="cursor-pointer hover:bg-blue-700"
              >
                Vendor
              </Button>
              <Button
                onClick={() => handleLoginAs("shop")}
                className="cursor-pointer hover:bg-blue-700"
              >
                Shop
              </Button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-sm text-gray-500 underline hover:text-gray-800"
              >
                Болих
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
