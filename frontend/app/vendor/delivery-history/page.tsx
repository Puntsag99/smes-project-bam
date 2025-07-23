"use client";
import { motion } from "framer-motion";
import DeliveryReport from "../components/delivery-report/page";

const DeliveryHistory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="p-4 md:p-8"
    >
      <DeliveryReport />
    </motion.div>
  );
};

export default DeliveryHistory;
