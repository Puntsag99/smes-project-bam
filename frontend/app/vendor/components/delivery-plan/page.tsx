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
      <div className="flex flex-col">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogHeader className="flex justify-between">
            <DialogTitle className="text-xl">✨ Сүүлийн борлуулалт</DialogTitle>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 ">
                + Борлуулалт үүсгэх
              </Button>
            </DialogTrigger>
          </DialogHeader>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">✨ Борлуулалт</DialogTitle>
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
