"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "./Form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Orders = () => {
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">
              Захиалах бараагаа сонгоно уу
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">Бараа захиалах</DialogTitle>
            </DialogHeader>
            <Form setProduct={setProduct} />
            <Button
              onClick={handleOrderSubmit}
              className="bg-blue-600 text-white hover:bg-blue-700 mt-5 "
            >
              Захиалах
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

export default Orders;
