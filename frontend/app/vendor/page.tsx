"use client";

import { motion } from "framer-motion";
import { Card } from "./components/Card";
import { PackageCheck, DollarSign, RotateCcw } from "lucide-react";
import Delivery from "./components/delivery-plan/page";

const VendorHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Сайн байна уу, Борлуулагч!</h1>

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
