"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useProductDeliveryQuery } from "@/app/generated";

const Payments = () => {
  const { data } = useProductDeliveryQuery();
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData =
    data?.productDelivery
      ?.filter((p) =>
        filterType === "all" ? true : p.transactionType === filterType
      )
      ?.filter((p) => {
        const keyword = searchTerm.toLowerCase();
        return (
          p.shop?.name?.toLowerCase().includes(keyword) ||
          p.product?.type?.toLowerCase().includes(keyword) ||
          p.deliveryPerson?.name?.toLowerCase().includes(keyword)
        );
      }) ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Төлбөрийн мэдээлэл
          </h1>
          <div className="relative inline-block w-52">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="appearance-none w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
            >
              <option value="all">Бүх төлбөр</option>
              <option value="CASH">Бэлэн</option>
              <option value="BANK_TRANSFER">Банк</option>
              <option value="CREDIT">Зээл</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              ▼
            </div>
          </div>
        </div>

       
        <div className="max-w-sm">
          <Input
            type="text"
            placeholder="Хайлт (дэлгүүр, төрөл, борлуулагч)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border">Огноо</th>
                <th className="p-3 border">Дэлгүүр</th>
                <th className="p-3 border">Төрөл</th>
                <th className="p-3 border">Ширхэг</th>
                <th className="p-3 border">Нийт үнэ</th>
                <th className="p-3 border">Борлуулагч</th>
                <th className="p-3 border">Төлбөр</th>
              </tr>
            </thead>
            <tbody>
              {!filteredData.length ? (
                <tr>
                  <td colSpan={8} className="p-4 text-center text-gray-500">
                    Мэдээлэл олдсонгүй
                  </td>
                </tr>
              ) : (
                filteredData.map((p, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 border">{p.createdAt?.slice(0, 10)}</td>
                    <td className="p-3 border">{p.shop?.name}</td>
                    <td className="p-3 border">{p.product.type}</td>
                    <td className="p-3 border">{p.quantity}</td>
                    <td className="p-3 border">{p.totalPrice?.toLocaleString()}</td>
                    <td className="p-3 border">{p.deliveryPerson.name}</td>
                    <td className="p-3 border capitalize">{p.transactionType}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Payments;
