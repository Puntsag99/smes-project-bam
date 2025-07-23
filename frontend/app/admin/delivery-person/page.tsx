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

const DeliveryPerson = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full px-10 py-10 ">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <DialogHeader>
              <DialogTitle className="text-xl">
                ✨Түгээгчийн мэдээлэл
              </DialogTitle>
              <Button className="bg-[#203651] hover:bg-[#213677]  text-white  ml-auto">
                + Түгээгч нэмэх
              </Button>
            </DialogHeader>
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

export default DeliveryPerson;
