"use client";

import { z } from "zod";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQueryQuery } from "@/app/generated";
import { useCreateCustomerMutation } from "@/app/generated";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const CustomersSchema = z.object({
  companyNumber: z
    .string()
    .regex(/^\d{8}$/, "Утасны дугаар 8 оронтой тоо байх ёстой"),
  companyLocation: z.string().min(1, "Байршил хоосон байж болохгүй"),
  companyName: z.string().min(1, "Байгууллагын нэр хоосон байж болохгүй"),
});

const initialForm = {
  companyName: "",
  companyLocation: "",
  companyNumber: "",
};

const Customers = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState(initialForm);
  const [formData, setFormData] = useState(initialForm);

  const [createCustomer, { error }] = useCreateCustomerMutation();

  const { data, loading } = useQueryQuery();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = CustomersSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        companyName: fieldErrors.companyName?.[0] || "",
        companyLocation: fieldErrors.companyLocation?.[0] || "",
        companyNumber: fieldErrors.companyNumber?.[0] || "",
      });
      return;
    }

    setFormData({
      companyName: "",
      companyLocation: "",
      companyNumber: "",
    });

    setErrors({
      companyName: "",
      companyLocation: "",
      companyNumber: "",
    });

    try {
      await createCustomer({
        variables: {
          input: formData,
        },
      });

      setFormData(initialForm);
      setErrors(initialForm);
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
      <div className="mx-auto max-w-2xl px-4 py-10">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full">
              + Харилцагч байгууллага үүсгэх
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">
                ✨ Байгууллага нэмэх
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium">Байгууллагын нэр</label>
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Жишээ: ABC ХХК"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Байршил</label>
                <Input
                  name="companyLocation"
                  value={formData.companyLocation}
                  onChange={handleChange}
                  placeholder="Жишээ: УБ, Хан-Уул"
                />
                {errors.companyLocation && (
                  <p className="text-red-500 text-sm">
                    {errors.companyLocation}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Утасны дугаар</label>
                <Input
                  name="companyNumber"
                  value={formData.companyNumber}
                  onChange={handleChange}
                  maxLength={8}
                  pattern="[0-9]{8}"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                  }}
                  placeholder="Жишээ: 88112233"
                />
                {errors.companyNumber && (
                  <p className="text-red-500 text-sm">{errors.companyNumber}</p>
                )}
              </div>

              <Button
                type="submit"
                className="bg-blue-600 text-white w-full hover:bg-blue-700"
              >
                Үүсгэх
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {loading ? (
          <p>Түр хүлээнэ үү.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Үүсгэсэн байгууллагууд
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    <th className="px-4 py-2 border-b">🏢 Байгууллагын нэр</th>
                    <th className="px-4 py-2 border-b">📞 Утасны дугаар</th>
                    <th className="px-4 py-2 border-b">🗺️ Байршил</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-800">
                  {data?.customer.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">
                        {customer.companyName}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {customer.companyNumber}
                      </td>
                      <td className="px-4 py-2 border-b">
                        {customer.companyLocation}
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

export default Customers;
