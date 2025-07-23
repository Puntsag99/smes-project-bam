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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [product, setProduct] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">✨ Сүүлийн Захиалга</h2>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                + Захиалга үүсгэх
              </Button>
            </DialogTrigger>

            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle className="text-xl">✨ Захиалга</DialogTitle>
              </DialogHeader>
              <Form setProduct={setProduct} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
};

export default Orders;
