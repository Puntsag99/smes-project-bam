"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Package, ShoppingCart } from "lucide-react";

const summaryCards = [
  {
    icon: <ShoppingCart className="text-blue-600" />,
    label: "",
    value: "Захиалга өгөх",
  },
  {
    icon: <Package className="text-green-600" />,
    value: "Буцаалт хийх",
  },
];

const User = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 bg-[#f5f7fa] min-h-screen text-gray-800 font-sans space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="bg-gray-100 p-3 rounded-full">{card.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{card.label}</p>
                <p className="text-lg font-bold">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="space-y-4 lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">🕒 Сүүлд захиалсан бараа</h3>
                <ul className="space-y-1 text-sm">
                  <li>1. Луувантай гурил – 2025.07.01 – 110,000₮</li>
                  <li>2. Сонгинотой гурил – 2025.07.02 – 142,000₮</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">💰 Сүүлийн төлбөрүүд</h3>
                <ul className="space-y-1 text-sm">
                  <li>1. Батцэцэг – 95,000₮ – 2025.07.06</li>
                  <li>2. Дорж – 60,000₮ – 2025.07.05</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 lg:col-span-2">
            <h3 className="font-semibold mb-4">
              📊 Сүүлийн 30 хоногийн захиалга
            </h3>

            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
              [Graph байрлах хэсэг]
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default User;
