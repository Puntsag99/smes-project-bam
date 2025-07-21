"use client";

import { DeliveredQuery } from "./DeliveredQuery";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DeliveredProduct } from "./DeliveredProduct";
import { useState } from "react";

const Delivery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-2xl px-4 py-10">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">
              + Хүргэгдэх бүтээгдэхүүн үүсгэх
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">
                ✨ Хүргэлтийн бүтээгдэхүүн нэмэх
              </DialogTitle>
            </DialogHeader>

            <DeliveredProduct closeDialog={() => setIsDialogOpen(false)} />
          </DialogContent>
        </Dialog>
        <DeliveredQuery />
      </div>
    </motion.div>
  );
};

export default Delivery;
