"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useProductDeliveryQuery } from "@/app/generated";
import { CreditCard } from "lucide-react";

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
        {/* Header + Filter */}
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Title Section */}
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-indigo-500 p-3 shadow-lg">
              <CreditCard className="text-white size-6" />
            </div>
            <span className="text-lg font-semibold text-gray-800">
              Төлбөрийн <span className="text-indigo-600">мэдээлэл</span>
            </span>
          </div>

          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none w-full sm:w-auto shadow-sm hover:bg-gray-50"
            >
              <option value="all">Бүх төлбөр</option>
              <option value="CASH">Бэлэн</option>
              <option value="BANK_TRANSFER">Банк</option>
              <option value="CREDIT">Зээл</option>
            </select>
            <Input
              type="text"
              placeholder="Хайлт (дэлгүүр, төрөл, борлуулагч)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg px-3 py-5 shadow-sm focus:ring-2 focus:ring-indigo-500 hover:bg-gray-50 w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100 text-gray-700 text-xs md:text-sm">
              <tr>
                <th className="p-3 border-b">Огноо</th>
                <th className="p-3 border-b">Дэлгүүр</th>
                <th className="p-3 border-b">Төрөл</th>
                <th className="p-3 border-b">Ширхэг</th>
                <th className="p-3 border-b">Нийт үнэ</th>
                <th className="p-3 border-b">Борлуулагч</th>
                <th className="p-3 border-b">Төлбөр</th>
              </tr>
            </thead>
            <tbody>
              {!filteredData.length ? (
                <tr>
                  <td colSpan={7} className="p-6 text-center text-gray-500">
                    Мэдээлэл олдсонгүй
                  </td>
                </tr>
              ) : (
                filteredData.map((p, index) => (
                  <tr
                    key={index}
                    className="hover:bg-indigo-50 transition-colors text-gray-700"
                  >
                    <td className="p-3 border-b">
                      {p.createdAt?.slice(0, 10)}
                    </td>
                    <td className="p-3 border-b">{p.shop?.name}</td>
                    <td className="p-3 border-b">{p.product.type}</td>
                    <td className="p-3 border-b">{p.quantity}</td>
                    <td className="p-3 border-b">
                      {p.totalPrice?.toLocaleString()}₮
                    </td>
                    <td className="p-3 border-b">{p.deliveryPerson.name}</td>
                    <td className="p-3 border-b capitalize">
                      {p.transactionType}
                    </td>
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
