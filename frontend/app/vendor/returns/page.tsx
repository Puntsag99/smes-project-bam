"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReturnForm } from "./ReturnForm";
import { ReturnQuery } from "./ReturnQuery";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RotateCcw } from "lucide-react";

const Return = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full px-10 py-10">
        <Dialog>
          <DialogTrigger asChild>
            <div className="p-4 bg-white rounded-xl shadow-md flex items-center justify-between w-full mb-6">
              <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center gap-4">
                <div className="rounded-full bg-green-500 p-3 shadow-lg">
                  <RotateCcw className="text-white size-6" />
                </div>
                Буцаалт
              </DialogTitle>
              <Button className="bg-[#103651] text-white hover:bg-[#303651]">
                + Буцаалт бүртгэх
              </Button>
            </div>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">✨ Буцаалт бүртгэх</DialogTitle>
            </DialogHeader>
            <ReturnForm />
          </DialogContent>
        </Dialog>
        <div className="flex w-full justify-center ">
          <ReturnQuery />
        </div>
      </div>
    </motion.div>
  );
};

export default Return;
