"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const SmartHome = () => {
  const router = useRouter();

  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
        <div className="text-2xl font-bold text-blue-600">MENA</div>

        <div>
          <Button
            onClick={() => router.push("/login")}
            className="bg-blue-600 text-white hover:bg-blue-700"
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
    </div>
  );
};
