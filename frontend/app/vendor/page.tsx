"use client";

import { motion } from "framer-motion";
import { Card } from "./components/Card";
import Delivery from "./components/delivery-plan/page";
import { PackageCheck, DollarSign, RotateCcw, UserPen } from "lucide-react";

const VendorHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
          <div className="rounded-full bg-indigo-500 p-3 shadow-lg">
            <UserPen className="text-white size-6" />
          </div>
          <span className="text-lg font-semibold text-gray-800">
            Сайн байна уу, <span className="text-indigo-600">Борлуулагч!</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card title="Түгээсэн бараа" value="12ш" icon={<PackageCheck />} />
          <Card title="Борлуулалт" value="180,000₮" icon={<DollarSign />} />
          <Card title="Буцаалт" value="2ш" icon={<RotateCcw />} />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <Delivery />
        </div>
      </div>
    </motion.div>
  );
};

export default VendorHome;
