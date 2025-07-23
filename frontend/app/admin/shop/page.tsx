"use client";

import { z } from "zod";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateShopMutation, useShopQuery } from "@/app/generated";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const ShopSchema = z.object({
  name: z.string().min(1, { message: "Нэр заавал байх ёстой" }),
  address: z.string().min(1, { message: "Хаяг заавал байх ёстой" }),
  email: z.string().email({ message: "Зөв имэйл хаяг оруулна уу" }),
  is_active: z.boolean({
    invalid_type_error: "Идэвхтэй эсэхийг зөв boolean төрлөөр оруулна уу",
  }),
  phone_number: z
    .string()
    .min(8, { message: "Утасны дугаар хамгийн багадаа 8 оронтой байх ёстой" })
    .regex(/^[0-9+]+$/, {
      message: "Утасны дугаар зөвхөн цифр эсвэл + тэмдэг агуулна",
    }),
});

const initialForm = {
  name: "",
  address: "",
  email: "",
  is_active: false,
  phone_number: "",
};
const initialErrors = {
  name: "",
  address: "",
  email: "",
  is_active: "",
  phone_number: "",
};

const Shop = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [formData, setFormData] = useState(initialForm);

  const [createshop] = useCreateShopMutation({
    onCompleted: () => {
      toast.success("Хүргэлт амжилттай бүртгэгдлээ!");
    },
    onError: (error) => {
      toast.error("Алдаа гарлаа: " + error.message);
    },
  });

  const { data, loading } = useShopQuery();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = ShopSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0] || "",
        address: fieldErrors.address?.[0] || "",
        email: fieldErrors.email?.[0] || "",
        is_active: fieldErrors.is_active?.[0] || "",
        phone_number: fieldErrors.phone_number?.[0] || "",
      });
      return;
    }

    setFormData(initialForm);
    setErrors({
      name: "",
      address: "",
      email: "",
      is_active: "",
      phone_number: "",
    });

    try {
      await createshop({
        variables: {
          input: formData,
        },
      });

      setOpen(false);
      toast.success("Амжилттай үүслээ!");
    } catch (err) {
      console.error("Хадгалах үед алдаа гарлаа:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full px-4 py-10">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <DialogHeader>
              <DialogTitle className="text-xl">✨ Дэлгүүрүүд</DialogTitle>
              <Button className=" text-white bg-[#203651] hover:bg-[#213677] ml-auto ">
                + Дэлгүүр үүсгэх
              </Button>
            </DialogHeader>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">✨ Дэлгүүр нэмэх</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium">Дэлгүүрийн нэр</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Жишээ: ABC ХХК"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Байршил</label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Жишээ: УБ, Хан-Уул"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Жишээ: example@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Идэвхтэй эсэх</label>
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleChange}
                  className="ml-2"
                />
                {errors.is_active && (
                  <p className="text-red-500 text-sm">{errors.is_active}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Утасны дугаар</label>
                <Input
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  maxLength={8}
                  pattern="[0-9]{8}"
                  // onInput={(e) => {
                  //   e.currentTarget.value = e.currentTarget.value.replace(
                  //     /[^0-9]/g,
                  //     ""
                  //   );
                  // }}
                  placeholder="Жишээ: 88112233"
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm">{errors.phone_number}</p>
                )}
              </div>

              <Button
                type="submit"
                className=" text-white w-full bg-[#203651] hover:bg-[#213677]"
              >
                Үүсгэх
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {loading ? (
          <p className="w-full flex justify-center">Түр хүлээнэ үү.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Дэлгүүрүүд
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    <th className="px-4 py-2 border-b">🏢Дэлгүүр</th>
                    <th className="px-4 py-2 border-b">📧Email</th>
                    <th className="px-4 py-2 border-b">🗺️ Байршил</th>
                    <th className="px-4 py-2 border-b">📞 Утасны дугаар</th>
                    <th className="px-4 py-2 border-b">🟢 Төлөв</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-800">
                  {data?.shop.map((p, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{p.name}</td>
                      <td className="px-4 py-2 border-b">{p.email}</td>
                      <td className="px-4 py-2 border-b">{p.address}</td>
                      <td className="px-4 py-2 border-b">{p.phone_number}</td>
                      <td className="px-4 py-2 border-b">
                        <span
                          className={`text-xl ${
                            p.is_active ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          ●
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Shop;
