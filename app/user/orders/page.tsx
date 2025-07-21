"use client";

import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { z } from "zod";

import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { ProductQuery } from "./productQuery";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useCreateProductMutation } from "@/app/generated";




  const Product = () => {
  const [product, setProduct] = useState("");

  const handleOrderSubmit = () => {
    if (!product) {
      toast.error("Бүтээгдэхүүн сонгоно уу!");
      return;
    }
    toast.success(`Захиалга илгээгдлээ: ${product}`);
  };
  

  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-2xl px-4 py-10">
    <Select onValueChange={setProduct}>
  <SelectTrigger
    className="w-full h-12 border rounded-md px-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <SelectValue placeholder="Бүтээгдэхүүн сонгох" />
  </SelectTrigger>
  <SelectContent className=" bg-gray-300 rounded-md border border-gray-200 shadow-md">
    <SelectItem
      value="Луувантай гурил"
      className="cursor-pointer px-4 py-2 text-sm hover:bg-blue-100 rounded-md"
    >
      Луувантай гурил
    </SelectItem>
    <SelectItem
      value="Сонгинотой гурил"
      className="cursor-pointer px-4 py-2 text-sm hover:bg-blue-100 rounded-md"
    >
   Сонгинотой гурил
    </SelectItem>
    <SelectItem
      value="Цуйвангийн гурил"
      className="cursor-pointer px-4 py-2 text-sm hover:bg-blue-100 rounded-md"
    >
Цуйвангийн гурил
    </SelectItem>
  </SelectContent>
</Select>

      <Button onClick={handleOrderSubmit} className="bg-blue-600 text-white hover:bg-blue-700 mt-5 ">
        Захиалга хийх
      </Button>
      
        <ProductQuery />
      </div>
    </motion.div>
  );
};

export default Product;
