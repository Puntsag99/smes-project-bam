"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Undo2, History, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const latestOrder = {
  id: "123456",
  date: "2025-07-22",
  status: "Хүргэлтэд байна",
  items: ["Үхрийн мах", "Аарц", "Цөцгий"],
};

export default function UserDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Нийт захиалга</p>
              <p className="text-xl font-bold">12</p>
            </div>
            <ShoppingCart className="h-6 w-6 text-blue-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Сүүлд захиалсан</p>
              <p className="text-xl font-bold">2025-07-22</p>
            </div>
            <History className="h-6 w-6 text-green-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Буцаалт</p>
              <p className="text-xl font-bold">1 удаа</p>
            </div>
            <Undo2 className="h-6 w-6 text-red-500" />
          </CardContent>
        </Card>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Сүүлд хийсэн захиалга</h2>

        <div className="border rounded-lg p-4 space-y-2 bg-white shadow">
          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Захиалга № {latestOrder.id}</p>
            <Badge variant="outline" className="text-blue-600 border-blue-400">
              {latestOrder.status}
            </Badge>
          </div>

          <p className="text-sm text-gray-500">Огноо: {latestOrder.date}</p>

          <div className="text-sm text-gray-700">
            <span className="font-medium">Бараанууд:</span>{" "}
            {latestOrder.items.join(", ")}
          </div>

          <Button variant="outline" size="sm">
            Дэлгэрэнгүй харах
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Шууд холбоос</h2>
        <div className="flex gap-4 flex-wrap">
          <Link href="/user/orders">
            <Button variant="secondary">Захиалга хийх</Button>
          </Link>
          <Link href="/user/order-history">
            <Button variant="secondary">Захиалгын түүх</Button>
          </Link>
          <Link href="/user/returns">
            <Button variant="secondary">Буцаалт илгээх</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
