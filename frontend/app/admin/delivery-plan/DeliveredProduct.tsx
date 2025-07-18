import { z } from "zod";
import { toast } from "sonner";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateProductDeliveryMutation } from "@/app/generated";
import { useProductQuery, useDeliveryPersonQuery } from "@/app/generated";

const initialForm = {
  productId: "",
  productType: "",
  deliveryPersonId: "",
  pieces: "",
  unitPrice: "",
};

const productDeliverySchema = z.object({
  productId: z.string().min(1, "Бүтээгдэхүүний нэрээ сонгоно уу."),
  productType: z.string().min(1, "Бүтээгдэхүүний төрлөө сонгоно уу."),
  deliveryPersonId: z.string().min(1, "Хүргэлтийн хүнээ сонгоно уу."),
  pieces: z
    .string()
    .min(1, "Бүтээгдэхүүний тоогоо оруулна уу.")
    .transform((val) => parseInt(val, 10)),

  unitPrice: z
    .string()
    .min(1, "Бүтээгдэхүүний үнээ оруулна уу.")
    .transform((val) => parseInt(val, 10)),
});

type DeliveredProductProps = {
  closeDialog: () => void;
};
export const DeliveredProduct = ({ closeDialog }: DeliveredProductProps) => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const [selectedProductId, setSelectedProductId] = useState("");

  const { data, error, loading } = useProductQuery();
  const {
    data: deliveryPersonData,
    error: deliveryPersonError,
    loading: deliveryPersonLoading,
  } = useDeliveryPersonQuery();

  const [CreateProductDelivery, { data: productDelivery }] =
    useCreateProductDeliveryMutation({
      onCompleted: () => {
        toast.success("Хүргэлт амжилттай бүртгэгдлээ!");
      },
      onError: (error) => {
        toast.error("Алдаа гарлаа: " + error.message);
      },
    });

  if (loading || deliveryPersonLoading) return <p>Уншиж байна...</p>;
  if (error || deliveryPersonError) return <p>Алдаа гарлаа...</p>;

  const selectedProduct = data?.product.find((p) => p.id === selectedProductId);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

  const handleChangeProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const selected = data?.product.find((p) => p.id === value);

    setSelectedProductId(value);

    setFormData((prev) => ({
      ...prev,
      productId: value,
      productType: selected?.type ?? "",
    }));

    setErrors((prev) => ({
      ...prev,
      productId: "",
      productType: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = productDeliverySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = { ...initialForm };

      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof typeof fieldErrors;
        fieldErrors[fieldName] = err.message;
      });

      setErrors(fieldErrors);
      toast.error("Та бүх талбарыг зөв бөглөнө үү!");
      return;
    }

    console.log("Амжилттай:", result.data);
    toast.success("Хүргэлт амжилттай бүртгэгдлээ!");

    CreateProductDelivery({
      variables: {
        input: result.data,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label className="text-sm font-medium">
          Хүргэх бүтээгдэхүүнээ сонгоно уу.
        </label>
        <select
          name="productId"
          value={selectedProductId}
          onChange={handleChangeProduct}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">--Сонгоно уу--</option>
          {data?.product.map((product) => (
            <option key={product.id} value={product.id}>
              {product.title}
            </option>
          ))}
        </select>
        {errors.productId && (
          <p className="text-red-500 text-sm mt-1">{errors.productId}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">
          Бүтээгдэхүүний төрөл автоматаар сонгогдоно.
        </label>
        <select
          name="productType"
          value={formData.productType}
          disabled
          className="w-full border rounded-md px-3 py-2 text-sm bg-gray-100 text-gray-600"
        >
          <option value="">{formData.productType || "-- Сонгоно уу --"}</option>
        </select>
        {errors.productType && (
          <p className="text-red-500 text-sm mt-1">{errors.productType}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">
          Хүргэлтийн хүнээ сонгоно уу.
        </label>
        <select
          name="deliveryPersonId"
          value={formData.deliveryPersonId}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">--Сонгоно уу--</option>
          {deliveryPersonData?.deliveryPerson.map((person) => (
            <option key={person.id} value={person.id ?? ""}>
              {person.name}
            </option>
          ))}
        </select>
        {errors.deliveryPersonId && (
          <p className="text-red-500 text-sm mt-1">{errors.deliveryPersonId}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Хүргэлтийн тоо</label>
        <Input
          type="number"
          name="pieces"
          value={formData.pieces}
          onChange={handleChange}
        />
        {errors.pieces && (
          <p className="text-red-500 text-sm mt-1">{errors.pieces}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Нэгж үнэ</label>
        <Input
          type="number"
          name="unitPrice"
          value={formData.unitPrice}
          onChange={handleChange}
        />
        {errors.unitPrice && (
          <p className="text-red-500 text-sm mt-1">{errors.unitPrice}</p>
        )}
      </div>

      <Button
        type="submit"
        className="bg-blue-600 text-white w-full hover:bg-blue-700"
      >
        Үүсгэх
      </Button>
    </form>
  );
};
