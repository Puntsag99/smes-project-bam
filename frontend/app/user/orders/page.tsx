// "use client";

// import { motion } from "framer-motion";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { toast } from "sonner";
// import React, { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";

// const Orders = () => {
//   const [product, setProduct] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   const handleOrderSubmit = () => {
//     if (!product) {
//       toast.error("Бүтээгдэхүүн сонгоно уу!");
//       return;
//     }
//     toast.success(`Захиалга илгээгдлээ: ${product}`);
//   };

//   const increaseQuantity = () => setQuantity((prev) => prev + 1);
//   const decreaseQuantity = () =>
//     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 100 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -100 }}
//       transition={{ duration: 0.4 }}
//     >
//       <div className="mx-auto max-w-2xl px-4 py-10">
//         <Select onValueChange={setProduct}>
//           <SelectTrigger className="w-full h-12 border rounded-md px-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             <SelectValue placeholder="Бүтээгдэхүүн сонгох" />
//           </SelectTrigger>
//           <SelectContent className=" bg-gray-200 rounded-md border border-gray-200 shadow-md">
//             <SelectItem
//               value="Луувантай гурил"
//               className="cursor-pointer px-4 py-2 text-sm hover:bg-blue-100 rounded-md"
//             >
//               Луувантай гурил
//             </SelectItem>
//             <SelectItem
//               value="Сонгинотой гурил"
//               className="cursor-pointer px-4 py-2 text-sm hover:bg-blue-100 rounded-md"
//             >
//               Сонгинотой гурил
//             </SelectItem>
//             <SelectItem
//               value="Цуйвангийн гурил"
//               className="cursor-pointer px-4 py-2 text-sm hover:bg-blue-100 rounded-md"
//             >
//               Цуйвангийн гурил
//             </SelectItem>
//           </SelectContent>
//         </Select>

//         <div className="flex items-center gap-3 mt-5">
//           <span className="text-sm font-medium">Тоо ширхэг :</span>
//           <div className="flex items-center border rounded-md px-3 py-1 bg-white">
//             <button
//               onClick={decreaseQuantity}
//               className="text-lg px-2 text-gray-600 hover:text-blue-600"
//             >
//               –
//             </button>
//             <span className="mx-2 w-6 text-center">{quantity}</span>
//             <button
//               onClick={increaseQuantity}
//               className="text-lg px-2 text-gray-600 hover:text-blue-600"
//             >
//               +
//             </button>
//           </div>
//         </div>
//         <Button
//           onClick={handleOrderSubmit}
//           className="bg-blue-600 text-white hover:bg-blue-700 mt-5 "
//         >
//           Захиалга хийх
//         </Button>
//       </div>
//     </motion.div>
//   );
// };

// export default Orders;

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
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";

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
