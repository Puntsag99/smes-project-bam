"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  useProductDeliveryQuery,
  useShopQuery,
  useDeliveryPersonQuery,
} from "../generated";
import {
  Users,
  Package,
  DollarSign,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Admin = () => {
  const { data } = useShopQuery();
  const { data: productpdata } = useProductDeliveryQuery();
  const { data: deliveryPersons } = useDeliveryPersonQuery();

  const [filterDays, setFilterDays] = useState(7);
  const [selectedPerson, setSelectedPerson] = useState("");
  const allDeliveries = productpdata?.productDelivery ?? [];

const personFilteredDeliveries = selectedPerson
  ? allDeliveries.filter((d) => d.deliveryPerson?.id === selectedPerson)
  : allDeliveries;

const productCount = personFilteredDeliveries.length;

const totalUnitPrice = personFilteredDeliveries.reduce(
  (sum, p) => sum + (p.totalPrice || 0),
  0
);
const formattedTotal = totalUnitPrice.toLocaleString();

const payment = personFilteredDeliveries
  .filter(
    (p) =>
      p.transactionType === "BANK_TRANSFER" ||
      p.transactionType === "CASH" ||
      p.transactionType === "CREDIT"
  )
  .reduce((sum, p) => sum + (p.totalPrice || 0), 0);
const formartedPayment = payment.toLocaleString();

const shopCount = selectedPerson
  ? new Set(
      personFilteredDeliveries.map((d) => d.shop?.id).filter(Boolean)
    ).size
  : data?.shop.length ?? 0;




  const deliveries = productpdata?.productDelivery ?? [];
  const now = new Date();

  const filteredDeliveries = deliveries.filter((d) => {
    const date = new Date(d.createdAt ?? "");
    const daysAgo = new Date();
    daysAgo.setDate(now.getDate() - filterDays);

    if (date < daysAgo) return false;
    if (selectedPerson && d.deliveryPerson?.id !== selectedPerson) return false;

    return true;
  });

  const graphMap = new Map<string, number>();
  filteredDeliveries.forEach((d) => {
    const date = new Date(d.createdAt ?? "").toISOString().slice(0, 10);
    graphMap.set(date, (graphMap.get(date) ?? 0) + (d.totalPrice || 0));
  });

  const graphData = Array.from(graphMap.entries())
    .map(([date, total]) => ({ date, total }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

const sortedDeliveries = [...deliveries].sort(
  (a, b) => new Date(b.createdAt ?? "").getTime() - new Date(a.createdAt ?? "").getTime()
);

const lastFiveProductsByDeliveryPerson = sortedDeliveries
  .filter((d) => {
    if (!d.deliveryPerson?.id) return false;
    if (selectedPerson) return d.deliveryPerson.id === selectedPerson;
    return true;
  })
  .slice(0, selectedPerson ? 5 : 10);

const lastFiveTransactions = sortedDeliveries
  .filter((d) => {
    const validTransaction = d.transactionType === "BANK_TRANSFER" || d.transactionType === "CASH" || d.transactionType === "CREDIT";
    const matchesPerson = selectedPerson ? d.deliveryPerson?.id === selectedPerson : true;
    return validTransaction && matchesPerson;
  })
  .slice(0, selectedPerson ? 5 : 10);



  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6 bg-[#f5f7fa] min-h-screen text-gray-800 font-sans space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <ShoppingCart className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Нийт борлуулалт</p>
              <p className="text-lg font-bold">{formattedTotal}₮</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Package className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Бүтээгдэхүүн</p>
              <p className="text-lg font-bold">{productCount}</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Users className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Үйлчлүүлэгчид</p>
              <p className="text-lg font-bold">{shopCount}</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <DollarSign className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Төлбөр төлөгдсөн</p>
              <p className="text-lg font-bold">{formartedPayment}₮</p>
            </div>
          </div>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">    
        <div className="space-y-4 lg:col-span-1 flex flex-col h-full">

         <Card className="bg-white shadow-md border-none rounded-2xl flex-1">
          <CardContent className="p-4 h-full border-none">
          <h3 className="font-semibold mb-2">🕒 Борлуулагчийн хүргэсэн сүүлийн бүтээгдэхүүнүүд</h3>
            <ul className="space-y-2 text-sm">
      {lastFiveProductsByDeliveryPerson.length > 0 ? (
        lastFiveProductsByDeliveryPerson.map((item, index) => (
          <li key={item.id} className="text-gray-700">
            <span className="font-medium">
              {index + 1}. {item.product?.title ?? "Бүтээгдэхүүний нэр алга"}
            </span>
            <br />
            <span className="text-gray-500">
              {item.deliveryPerson?.name ?? "Тодорхойгүй"} –{" "}
              {new Date(item.createdAt ?? "").toLocaleDateString("mn-MN")} –{" "}
              {(item.totalPrice ?? 0).toLocaleString()}₮
            </span>
          </li>
        ))
      ) : (
        <li className="text-gray-400">Мэдээлэл алга</li>
      )}
    </ul>
  </CardContent>
</Card>

<Card className="bg-white shadow-md border-none rounded-2xl flex-1">
  <CardContent className="p-4 h-full border-none">
    <h3 className="font-semibold mb-2">💰 Сүүлийн төлбөрүүд</h3>
    <ul className="space-y-1 text-sm">
      {lastFiveTransactions.length > 0 ? (
        lastFiveTransactions.map((item, index) => (
          <li key={item.id}>
            {index + 1}. {item.deliveryPerson?.name ?? "Тодорхойгүй"} –{" "}
            {(item.totalPrice ?? 0).toLocaleString()}₮ –{" "}
            {new Date(item.createdAt ?? "").toLocaleDateString("mn-MN")}
          </li>
        ))
      ) : (
        <li className="text-gray-400">Мэдээлэл алга</li>
      )}
    </ul>
  </CardContent>
</Card>
  </div>

  <div className="bg-white rounded-3xl shadow-lg p-6 lg:col-span-2 flex flex-col justify-between">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
      📊 Борлуулалтын график
    </h3>
    <div className="flex gap-3">
      <select
        value={filterDays}
        onChange={(e) => setFilterDays(parseInt(e.target.value))}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 rounded-xl text-sm text-gray-700 transition duration-150 ease-in-out"
      >
        <option value={7}>7 хоног</option>
        <option value={30}>30 хоног</option>
        <option value={90}>90 хоног</option>
      </select>
      <select
        value={selectedPerson}
        onChange={(e) => setSelectedPerson(e.target.value)}
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 rounded-xl text-sm text-gray-700 transition duration-150 ease-in-out"
      >
        <option value="">Бүх борлуулагч</option>
        {deliveryPersons?.deliveryPerson.map((p) => (
          <option key={p.id} value={p.id ?? ""}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  </div>

  {graphData.length > 0 ? (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={graphData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip
          contentStyle={{ borderRadius: '10px' }}
          formatter={(value: number) => `${value.toLocaleString()}₮`}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#3b82f6"
          strokeWidth={3}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  ) : (
    <div className="h-64 flex items-center justify-center text-gray-400 text-sm">
      Мэдээлэл байхгүй
    </div>
  )}
</div>

</div>

      </div>
    </motion.div>
  );
};

export default Admin; 
