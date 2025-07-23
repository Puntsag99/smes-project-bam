"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReturnForm } from "./ReturnForm";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Return = () => {
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
              + Шинэ буцаалт нэмэх.
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">✨ Буцаалт нэмэх</DialogTitle>
            </DialogHeader>
            <ReturnForm />
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

export default Return;
