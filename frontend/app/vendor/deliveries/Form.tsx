"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Form = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label>Хүргэсэн бараагаа сонгоно уу</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Бараа сонгох" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="product1">Сүү</SelectItem>
            <SelectItem value="product2">Тараг</SelectItem>
            <SelectItem value="product3">Аарц</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Хүргэсэн барааны төрөл</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Төрөл сонгох" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="liquid">Шингэн</SelectItem>
            <SelectItem value="solid">Хатуу</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Тоо ширхэг</Label>
        <Input type="number" name="pieces" placeholder="Жишээ: 100" />
      </div>

      <div>
        <Label>Нэгж үнэ (₮)</Label>
        <Input type="number" name="unitPrice" placeholder="Жишээ: 2500" />
      </div>

      <div>
        <Label>Хүргэсэн огноо</Label>
        <Input type="date" name="deliveryDate" />
      </div>

      <div>
        <Label>Хүргэлт хийсэн дэлгүүр</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Дэлгүүр сонгох" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="shop1">Сансар төв</SelectItem>
            <SelectItem value="shop2">Оргил худалдааны төв</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Тайлбар (сонголтоор)</Label>
        <Input name="note" placeholder="Жишээ: Бараа хугацаа дуусах дөхсөн" />
      </div>
    </form>
  );
};
