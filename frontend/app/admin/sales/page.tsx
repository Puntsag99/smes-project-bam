"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProductDeliveryQuery } from "@/app/generated";

const Sales = () => {
  const { data, loading, error } = useProductDeliveryQuery();
  console.log({ data }, "data");
  const totalUnitPrice =
    data?.productDelivery?.reduce((sum, p) => sum + (p.unitPrice || 0), 0) ?? 0;
  const formattedTotal = totalUnitPrice.toLocaleString();

  const totalAmout =
    data?.productDelivery.reduce((sum, p) => sum + (p.quantity || 0), 0) ?? 0;
  const formattedTotalPieces = totalAmout.toLocaleString();
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            Борлуулалтын бүртгэл
          </h1>
          <select className="border p-2 rounded-md">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>All-time</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-md">
            <p className="text-sm text-gray-600">Нийт Борлуулалт (₮)</p>
            <h2 className="text-xl font-semibold">{formattedTotal}₮</h2>
          </div>
          <div className="bg-green-100 p-4 rounded-md">
            <p className="text-sm text-gray-600">Нийт ширхэг</p>
            <h2 className="text-xl font-semibold">{formattedTotalPieces}</h2>
          </div>
          <div className="bg-red-100 p-4 rounded-md">
            <p className="text-sm text-gray-600">Буцаалт (₮)</p>
            <h2 className="text-xl font-semibold">1,200,000₮</h2>
          </div>
        </div>

        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Бүтээгдэхүүнээр хайх"
            className="p-2 border rounded-md w-1/3"
          />
          <Input
            type="text"
            placeholder="Борлуулагчийн нэрээр хайх"
            className="p-2 border rounded-md w-1/3"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-2 border">Огноо</th>
                <th className="p-2 border">Бүтээгдэхүүн</th>
                <th className="p-2 border">Төрөл</th>
                <th className="p-2 border">Ширхэг</th>
                <th className="p-2 border">Нийт үнэ</th>
                <th className="p-2 border">Борлуулагч</th>
                <th className="p-2 border">Төлбөр</th>
                <th className="p-2 border">Буцаалт</th>
              </tr>
            </thead>
            <tbody>
              {!data?.productDelivery ? (
                <tr>
                  <td colSpan={8} className="p-4 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : (
                data.productDelivery.map((p, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{p.createdAt?.slice(0, 10)}</td>
                    <td className="p-2 border">{p.product.title}</td>
                    <td className="p-2 border">{p.product.type}</td>
                    <td className="p-2 border">{p.product.stock}</td>
                    <td className="p-2 border">{p.unitPrice}</td>
                    <td className="p-2 border">{p.deliveryPerson.name}</td>
                    <td className="p-2 border">{p.transactionType}</td>
                    <td className="p-2 border text-red-500">3 ширхэг</td>
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

export default Sales;
