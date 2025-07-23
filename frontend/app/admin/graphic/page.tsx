"use client";

import { useProductDeliveryQuery } from "@/app/generated";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type ChartEntry = {
  date: string;
  totalIncome: number;
};

const GraphicPage = () => {
  const { data, loading, error } = useProductDeliveryQuery();

  if (loading) return <p>Уншиж байна...</p>;
  if (error) return <p>Алдаа гарлаа: {error.message}</p>;

  const deliveries = data?.productDelivery || [];

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const chartData: ChartEntry[] = deliveries
    .reduce((acc: ChartEntry[], item) => {
      const dateStr = item.createdAt?.slice(0, 10);
      if (!dateStr) return acc;

      const date = new Date(dateStr);
      if (date < sevenDaysAgo) return acc;

      const price = (item.unitPrice || 0) * (item.unitPrice || 1);
      const existing = acc.find((entry) => entry.date === dateStr);

      if (existing) {
        existing.totalIncome += price;
      } else {
        acc.push({ date: dateStr, totalIncome: price });
      }

      return acc;
    }, [])
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="w-2/4 p-4 rounded-xl bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-center">
        7 хоногийн орлого
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" fontSize={10} />
          <YAxis fontSize={10} />
          <Tooltip />
          <Bar dataKey="totalIncome" fill="#4f46e5" name="Нийт орлого" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphicPage;
