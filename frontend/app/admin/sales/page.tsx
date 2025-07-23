"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useProductDeliveryQuery, useReturnQuery } from "@/app/generated";
import { DollarSign, Package, RotateCcw } from "lucide-react";
import DeliveryReport from "@/app/vendor/components/delivery-report/page";

const transactionTypeMap = {
  NOT_PAYMENT: "",
  BANK_TRANSFER: "Дансаар",
  CREDIT: "Зээл",
  CASH: "Бэлэн",
};

const Sales = () => {
  const { data } = useProductDeliveryQuery();
  const { data: returndata } = useReturnQuery();

  const totalReturn =
    returndata?.Return.reduce((sum, p) => sum + (p.pieces || 0), 0) ?? 0;
  const formattedTotalReturn = totalReturn.toLocaleString();

  const totalUnitPrice =
    data?.productDelivery?.reduce((sum, p) => sum + (p.totalPrice || 0), 0) ??
    0;
  const formattedTotal = totalUnitPrice.toLocaleString();

  const totalAmout =
    data?.productDelivery?.reduce((sum, p) => sum + (p.quantity || 0), 0) ?? 0;
  const formattedTotalPieces = totalAmout.toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="p-4 md:p-8"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Борлуулалтын бүртгэл
        </h1>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <DollarSign className="text-blue-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Нийт Борлуулалт (₮)</p>
            <h2 className="text-2xl font-semibold text-blue-700">
              {formattedTotal}₮
            </h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full">
            <Package className="text-green-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Нийт ширхэг</p>
            <h2 className="text-2xl font-semibold text-green-700">
              {formattedTotalPieces}
            </h2>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-full">
            <RotateCcw className="text-red-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Буцаалт</p>
            <h2 className="text-2xl font-semibold text-red-700">
              {formattedTotalReturn}
            </h2>
          </div>
        </div>
      </div>

      {/* Search Fields */}

      <DeliveryReport />
    </motion.div>
  );
};

export default Sales;
