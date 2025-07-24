"use client";
import { z } from "zod";
import { toast } from "sonner";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TransactionEnum,
  useCreateProductDeliveryMutation,
  useShopQuery,
  useStockQuery,
  useProductQuery,
  useDeliveryPersonQuery,
} from "@/app/generated";
import { SignaturePadModal } from "../../returns/SignaturePadModel";
import Image from "next/image";

const productDeliverySchema = z.object({
  productId: z.string().min(1, "Бүтээгдэхүүнээ сонгоно уу."),
  productType: z.string().min(1, "Бүтээгдэхүүний төрлөө сонгоно уу."),
  deliveryPersonId: z.string().min(1, "Хүргэлтийн хүнээ сонгоно уу."),
  shopId: z.string().min(1, "Дэлгүүрээ сонгоно уу."),
  transactionType: z.nativeEnum(TransactionEnum, {
    errorMap: () => ({ message: "Төлбөрийн нөхцөл сонгоно уу." }),
  }),
  unitPrice: z.number().min(1, "Бүтээгдэхүүний үнээ оруулна уу."),
  quantity: z.number().min(1, "Бүтээгдэхүүний тоог оруулна уу."),
  signature: z.string().min(1, "Гарын үсгээ зурна уу."),
  totalPrice: z.number().min(1, "Нийт үнийг тооцно уу"),
});

type ProductDeliveryFormType = z.infer<typeof productDeliverySchema>;

const initialForm: ProductDeliveryFormType = {
  productId: "",
  productType: "",
  deliveryPersonId: "",
  shopId: "",
  signature: "",
  transactionType: TransactionEnum.NotPayment,
  unitPrice: 0,
  quantity: 0,
  totalPrice: 0,
};

type DeliveredProductProps = {
  closeDialog?: () => void;
};

export const DeliveredProduct = ({ closeDialog }: DeliveredProductProps) => {
  const [formData, setFormData] =
    useState<ProductDeliveryFormType>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ProductDeliveryFormType, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data, loading, error } = useProductQuery();
  const {
    data: deliveryPersonData,
    loading: deliveryPersonLoading,
    error: deliveryPersonError,
  } = useDeliveryPersonQuery();
  const {
    data: shopdata,
    loading: shopLoading,
    error: shopError,
  } = useShopQuery();
  const { refetch } = useStockQuery();

  const [createProductDelivery] = useCreateProductDeliveryMutation({
    onCompleted: () => {
      toast.success("Хүргэлт амжилттай бүртгэгдлээ!");
      refetch();
      setIsSubmitting(false);
      if (closeDialog) closeDialog();
    },
    onError: (error) => {
      toast.error("Алдаа гарлаа: " + error.message);
      setIsSubmitting(false);
    },
  });

  if (loading || deliveryPersonLoading || shopLoading)
    return <p>Уншиж байна...</p>;
  if (error || deliveryPersonError || shopError) return <p>Алдаа гарлаа...</p>;

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

    setFormData((prev) => ({
      ...prev,
      productId: value,
      productType: selected?.type ?? "",
      unitPrice: selected?.price ?? 0,
      totalPrice: selected ? (selected.price ?? 0) * prev.quantity : 0,
    }));

    setErrors((prev) => ({
      ...prev,
      productId: "",
      productType: "",
    }));
  };

  const handleSignatureSave = (signatureDataUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      signature: signatureDataUrl,
    }));
    setErrors((prev) => ({ ...prev, signature: "" }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value, 10) || 0;
    const totalPrice = quantity * formData.unitPrice;

    setFormData((prev) => ({
      ...prev,
      quantity,
      totalPrice,
    }));
    setErrors((prev) => ({ ...prev, quantity: "", totalPrice: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // double submit хамгаалалт
    setIsSubmitting(true);

    const result = productDeliverySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<
        Record<keyof ProductDeliveryFormType, string>
      > = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof ProductDeliveryFormType;
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Та бүх талбарыг зөв бөглөнө үү!");
      setIsSubmitting(false);
      return;
    }

    await createProductDelivery({
      variables: {
        input: result.data,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      {/* дэлгүүр сонгох */}
      <div>
        <label className="text-sm font-medium">Дэлгүүр</label>
        <select
          name="shopId"
          value={formData.shopId}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value=""></option>
          {shopdata?.shop.map((shop) => (
            <option key={shop.id} value={shop.id ?? ""}>
              {shop.name}
            </option>
          ))}
        </select>
        {errors.shopId && (
          <p className="text-red-500 text-sm mt-1">{errors.shopId}</p>
        )}
      </div>

      {/* бүтээгдэхүүн сонгох */}
      <div>
        <label className="text-sm font-medium">Борлуулалтын бүтээгдэхүүн</label>
        <select
          name="productId"
          value={formData.productId}
          onChange={handleChangeProduct}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value=""></option>
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

      {/* төрөл ба үнэ */}
      <div className="flex justify-between">
        <div>
          <label className="text-sm font-medium">Бүтээгдэхүүний төрөл</label>
          <Input
            type="text"
            name="productType"
            value={formData.productType}
            readOnly
          />
        </div>
        <div>
          <label className="text-sm font-medium">Нэгж үнэ</label>
          <Input
            type="text"
            name="unitPrice"
            value={
              formData.unitPrice
                ? `${formData.unitPrice.toLocaleString("mn-MN")} ₮`
                : ""
            }
            readOnly
          />
        </div>
      </div>

      {/* тоо ширхэг ба нийт үнэ */}
      <div className="flex justify-between">
        <div>
          <label className="text-sm font-medium">Хүргэлтийн тоо</label>
          <Input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleQuantityChange}
            min={0}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Нийт үнэ</label>
          <Input
            type="text"
            name="totalPrice"
            value={
              formData.totalPrice
                ? `${formData.totalPrice.toLocaleString("mn-MN")} ₮`
                : ""
            }
            readOnly
          />
        </div>
      </div>

      {/* хүргэлтийн хүн */}
      <div>
        <label className="text-sm font-medium">Хүргэлтийн хүн</label>
        <select
          name="deliveryPersonId"
          value={formData.deliveryPersonId}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value=""></option>
          {deliveryPersonData?.deliveryPerson.map((person) => (
            <option key={person.id} value={person.id ?? ""}>
              {person.name}
            </option>
          ))}
        </select>
      </div>

      {/* төлбөрийн нөхцөл */}
      <div>
        <label className="text-sm font-medium">Төлбөрийн нөхцөл</label>
        <select
          name="transactionType"
          value={formData.transactionType}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          {Object.values(TransactionEnum).map((type) => (
            <option key={type} value={type}>
              {type === "NOT_PAYMENT"
                ? ""
                : type === "BANK_TRANSFER"
                ? "Дансаар"
                : type === "CREDIT"
                ? "Зээл"
                : type === "CASH"
                ? "Бэлэн"
                : type}
            </option>
          ))}
        </select>
      </div>

      {/* гарын үсэг */}
      <div>
        <SignaturePadModal onSave={handleSignatureSave} />
        {formData.signature && (
          <div className="relative w-full h-32 border mt-2">
            <Image
              src={formData.signature}
              alt="Signature"
              unoptimized
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#103651] text-white hover:bg-[#303651] w-full"
      >
        {isSubmitting ? "Илгээж байна..." : "Үүсгэх"}
      </Button>
    </form>
  );
};
