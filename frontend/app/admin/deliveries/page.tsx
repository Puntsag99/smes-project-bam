"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { DeliveryForm } from "./DelvieryForm";
import { useState } from "react";
import { QueryDelivery } from "./QueryDelivery";

const Deliveries = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-2xl px-4 py-10">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">
              + Түгээгч нэмэх
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">✨ Түгээгч нэмэх</DialogTitle>
            </DialogHeader>

            <DeliveryForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
        <QueryDelivery />
      </div>
    </motion.div>
  );
};

export default Deliveries;
