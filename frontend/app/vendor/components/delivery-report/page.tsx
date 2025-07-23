"use client";
import { motion } from "framer-motion";
import {
  useDeliveryPersonQuery,
  useProductDeliveryQuery,
  useShopQuery,
} from "@/app/generated";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const transactionTypeMap: Record<string, string> = {
  NOT_PAYMENT: "",
  BANK_TRANSFER: "Дансаар",
  CREDIT: "Зээл",
  CASH: "Бэлэн",
};

const DeliveryReport = () => {
  const [filterDays, setFilterDays] = useState("allday");
  const [selectedShopId, setSelectedShopId] = useState("");
  const [selectedDeliveryPersonId, setSelectedDeliveryPersonId] = useState("");

  const { data: shopdata } = useShopQuery();
  const { data: persondata } = useDeliveryPersonQuery();
  const { data } = useProductDeliveryQuery();

  const now = new Date();
  const getDaysAgo = (days: number) => {
    const date = new Date();
    date.setDate(now.getDate() - days);
    return date;
  };

  const deliveries = data?.productDelivery ?? [];
  const hasFilter =
    (filterDays && filterDays !== "allday") ||
    selectedShopId ||
    selectedDeliveryPersonId;

  const filteredDeliveries = hasFilter
    ? deliveries.filter((d) => {
        const created = d.createdAt ? new Date(d.createdAt) : null;
        if (filterDays === "sevenday" && created && created < getDaysAgo(7))
          return false;
        if (filterDays === "thirtyday" && created && created < getDaysAgo(30))
          return false;
        if (filterDays === "ninetyday" && created && created < getDaysAgo(90))
          return false;
        if (selectedShopId && d.shop?.id !== selectedShopId) return false;
        if (
          selectedDeliveryPersonId &&
          d.deliveryPerson?.id !== selectedDeliveryPersonId
        )
          return false;
        return true;
      })
    : deliveries;

  const sortedDeliveries = [...filteredDeliveries].sort((a, b) => {
    const dateA = new Date(a.createdAt ?? "").getTime();
    const dateB = new Date(b.createdAt ?? "").getTime();
    return dateB - dateA; // хамгийн сүүлд үүссэн эхэнд
  });

  return (
    <div>
      {/* Header */}
      <div className="p-4 bg-white rounded-xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        {/* Title */}
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-blue-500 p-3 shadow-lg">
            <ShoppingCart className="text-white size-6" />
          </div>
          <span className="text-lg font-semibold text-gray-800">
            Борлуулалтын <span className="text-blue-600">бүртгэл</span>
          </span>
        </div>

        {/* Filter section */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
          <select
            value={selectedShopId}
            onChange={(e) => setSelectedShopId(e.target.value)}
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 
             outline-none w-full sm:w-auto shadow-sm hover:bg-gray-100 transition"
          >
            <option value="">Бүх дэлгүүр</option>
            {shopdata?.shop.map((shop) => (
              <option key={shop.id} value={shop.id}>
                {shop.name}
              </option>
            ))}
          </select>

          <select
            value={selectedDeliveryPersonId}
            onChange={(e) => setSelectedDeliveryPersonId(e.target.value)}
            className="border border-y-sky-400 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 
             outline-none w-full sm:w-auto shadow-sm hover:bg-gray-100 transition"
          >
            <option value="">Бүх хүргэлтийн ажилтан</option>
            {persondata?.deliveryPerson.map((person) => (
              <option key={person.id} value={person.id ?? ""}>
                {person.name}
              </option>
            ))}
          </select>

          <select
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 
             outline-none w-full sm:w-auto shadow-sm hover:bg-gray-100 transition"
            value={filterDays}
            onChange={(e) => setFilterDays(e.target.value)}
          >
            <option value="sevenday">7 хоног</option>
            <option value="thirtyday">30 хоног</option>
            <option value="ninetyday">90 хоног</option>
            <option value="allday">Бүгд</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#203651] text-white  text-xs md:text-sm">
              <tr>
                {[
                  "Дэлгүүр",
                  "Бүтээгдэхүүн",
                  "Төрөл",
                  "Ширхэг",
                  "Нэгж үнэ ₮",
                  "Нийт үнэ ₮",
                  "Борлуулагч",
                  "Төлбөр",
                  "Огноо",
                ].map((header, idx) => (
                  <th key={idx} className="p-2 md:p-3 text-left border-b">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {!data ? (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : sortedDeliveries.length > 0 ? (
                sortedDeliveries.map((p) => (
                  <tr
                    key={p.id}
                    className="hover:bg-indigo-50 transition-colors text-gray-700"
                  >
                    <td className="p-2 md:p-3 border-b">{p.shop?.name}</td>
                    <td className="p-2 md:p-3 border-b">{p.product.title}</td>
                    <td className="p-2 md:p-3 border-b">{p.product.type}</td>
                    <td className="p-2 md:p-3 border-b">{p.quantity}</td>
                    <td className="p-2 md:p-3 border-b">{p.unitPrice}₮</td>
                    <td className="p-2 md:p-3 border-b">{p.totalPrice}₮</td>
                    <td className="p-2 md:p-3 border-b">
                      {p.deliveryPerson?.name}
                    </td>
                    <td className="p-2 md:p-3 border-b">
                      {p.transactionType
                        ? transactionTypeMap[p.transactionType] ??
                          p.transactionType
                        : "—"}
                    </td>
                    <td className="p-2 md:p-3 border-b">
                      {p.createdAt?.slice(0, 10)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-gray-500">
                    Мэдээлэл байхгүй
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryReport;
