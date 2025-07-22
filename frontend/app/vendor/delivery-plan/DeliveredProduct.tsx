import { z } from "zod";
import { toast } from "sonner";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TransactionEnum,
  useCreateProductDeliveryMutation,
  useShopQuery,
} from "@/app/generated";
import { useProductQuery, useDeliveryPersonQuery } from "@/app/generated";

const initialForm: Record<keyof ProductDeliveryFormType, any> = {
  productId: "",
  productType: "",
  deliveryPersonId: "",
  shopId: "",
  transactionType: "",
  unitPrice: "",
  quantity: "",
  totalPrice: "",
};
type ProductDeliveryFormType = z.infer<typeof productDeliverySchema>;
const productDeliverySchema = z.object({
  productId: z.string().min(1, "Бүтээгдэхүүний нэрээ сонгоно уу."),
  productType: z.string().min(1, "Бүтээгдэхүүний төрлөө сонгоно уу."),
  deliveryPersonId: z.string().min(1, "Хүргэлтийн хүнээ сонгоно уу."),
  shopId: z.string().min(1, "Дэлгүүрээ сонгоно уу."),
  transactionType: z.nativeEnum(TransactionEnum, {
    errorMap: () => ({ message: "Төлбөрийн нөхцөл сонгоно уу." }),
  }),
  unitPrice: z
    .string()
    .min(1, "Бүтээгдэхүүний үнээ оруулна уу.")
    .transform((val) => parseInt(val, 10)),

  quantity: z
    .string()
    .min(1, "Бүтээгдэхүүний үнээ оруулна уу.")
    .transform((val) => parseInt(val, 10)),
  totalPrice: z
    .string()
    .optional()
    .transform((val) => parseInt(val ?? "", 10)),
});

type DeliveredProductProps = {
  closeDialog: () => void;
};
export const DeliveredProduct = ({ closeDialog }: DeliveredProductProps) => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedShopId, setSelectedShopId] = useState("");

  const { data, error, loading } = useProductQuery();
  const {
    data: deliveryPersonData,
    error: deliveryPersonError,
    loading: deliveryPersonLoading,
  } = useDeliveryPersonQuery();
  // console.log(deliveryPersonData, "datat");
  const {
    data: shopdata,
    error: shopError,
    loading: shopLoading,
  } = useShopQuery();

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
      unitPrice: selected?.price?.toString() ?? "",
    }));

    setErrors((prev) => ({
      ...prev,
      productId: "",
      productType: "",
      unitPrice: "",
    }));
  };

  const handleChangeShop = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const selected = shopdata?.shop.find((p) => p.id === value);
    setSelectedShopId(value);

    setFormData((prev) => ({
      ...prev,
      shopId: value,
    }));
    setErrors((prev) => ({
      ...prev,
      shopId: "",
    }));
  };
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value, 10) || 0;
    const unitPrice = parseInt(formData.unitPrice || "0", 10);
    const totalPrice = quantity * unitPrice;

    setFormData((prev) => ({
      ...prev,
      quantity: e.target.value,
      totalPrice: totalPrice.toString(), // Хэрвээ string хэлбэрээр хадгалж байвал
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = productDeliverySchema.safeParse(formData);
    console.log(result, "result");
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

      <div className="flex justify-between">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Бүтээгдэхүүний төрөл</label>
          <input
            type="text"
            name="productType"
            value={formData.productType}
            readOnly
            className="w-full border rounded-md px-3 py-2 text-sm bg-gray-100 text-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Нэгж үнэ</label>
          <input
            type="text"
            name="unitPrice"
            value={
              formData.unitPrice
                ? `${Number(formData.unitPrice).toLocaleString("mn-MN")} ₮`
                : ""
            }
            readOnly
            className="w-full border rounded-md px-3 py-2 text-sm bg-gray-100 text-gray-600"
          />
        </div>

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
        <label className="text-sm font-medium">Дэлгүүр</label>
        <select
          name="deliveryPersonId"
          value={formData.shopId}
          onChange={handleChangeShop}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">--Сонгоно уу--</option>
          {shopdata?.shop.map((person) => (
            <option key={person.id} value={person.id ?? ""}>
              {person.name}
            </option>
          ))}
        </select>
        {errors.shopId && (
          <p className="text-red-500 text-sm mt-1">{errors.shopId}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Хүргэлтийн тоо</label>
        <Input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleQuantityChange}
        />
        <input
          type="text"
          name="totalPrice"
          value={
            formData.totalPrice
              ? `${Number(formData.totalPrice).toLocaleString("mn-MN")} ₮`
              : ""
          }
          readOnly
          className="w-full border rounded-md px-3 py-2 text-sm bg-gray-100 text-gray-600"
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
        )}
      </div>

      <div>
        <select
          name="transactionType"
          value={formData.transactionType}
          onChange={(e) =>
            setFormData((f) => ({
              ...f,
              transactionType: e.target.value as TransactionEnum,
            }))
          }
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">--Сонгоно уу--</option>
          {Object.values(TransactionEnum).map((type) => (
            <option key={type} value={type}>
              {type === "CASH"
                ? "Бэлэн"
                : type === "BANK_TRANSFER"
                ? "Дансаар"
                : type === "CREDIT"
                ? "Зээл"
                : type === "NOT_PAYMENT"
                ? "Төлөөгүй"
                : type}
            </option>
          ))}
        </select>

        {errors.transactionType && (
          <p className="text-red-500 text-sm mt-1">{errors.transactionType}</p>
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
