"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "./Form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Deliveries = () => {
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
              + Түгээсэн бараагаа оруулна уу.
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">
                ✨ Түгээсэн бараа нэмэх
              </DialogTitle>
            </DialogHeader>
            <Form />
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

export default Deliveries;
