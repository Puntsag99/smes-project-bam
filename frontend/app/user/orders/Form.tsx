"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormProps = {
  setProduct: (product: string) => void;
};

export const Form = ({ setProduct }: FormProps) => {
  return (
    <form className="space-y-4">
      <div>
        <Label className="mb-2">Захиалга өгөх үйлдвэр</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Үйлдвэр сонгох" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Шар манжин гурилын цех">
              Шар манжин гурилын цех
            </SelectItem>
            <SelectItem value="fТаЧи нарийн боовны цех">
              ТаЧи нарийн боовны цех
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-2">Бүтээгдэхүүнээ сонгоно уу</Label>
        <Select onValueChange={(value) => setProduct(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Бараа сонгох" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Луувантай гурил">Луувантай гурил</SelectItem>
            <SelectItem value="Сонгинотой гурил">Сонгинотой гурил</SelectItem>
            <SelectItem value="Цуйвангийн гурил">Цуйвангийн гурил</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-2">Тоо ширхэг</Label>
        <Input type="number" name="pieces" placeholder="Жишээ: 10ш" />
      </div>

      <div>
        <Label className="mb-2">Захиалга хүргэгдэх огноо</Label>
        <Input type="date" name="deliveryDate" />
      </div>

      <div>
        <Label className="mb-2">Тайлбар</Label>
        <Input name="note" placeholder="Заавал биш" />
      </div>

      <div>
        <Label className="mb-2">Төлбөр</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Төлбөрийн хэрэгсэл сонгох" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="payment1">💳 Картаар</SelectItem>
            <SelectItem value="payment2">🏦 Дансаар</SelectItem>
            <SelectItem value="payment3">🧾 Зээлээр</SelectItem>
            <SelectItem value="payment4">
              💵 Хүргэгдэх үед бэлэн мөнгөөр
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
};
