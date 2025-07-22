"use client";

import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useQueryQuery } from "@/app/generated";
import { useProductQuery } from "@/app/generated";
import { useDeliveryPersonQuery } from "@/app/generated";
import { useCreateProductReturnMutation } from "@/app/generated";
import { SignaturePadModal } from "./SignaturePadModel";

const initialForm = {
  deliveryPersonName: "",
  productName: "",
  shopName: "",
  returnQuantity: "",
  unitPrice: "",
  totalPrice: "",
  signature: "",
};

export const ReturnForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data, loading, error } = useProductQuery();
  const { data: ShopNameData } = useQueryQuery();
  const { data: DeliveryPersonName } = useDeliveryPersonQuery();

  const [CreateProductReturn] = useCreateProductReturnMutation();

  if (loading) return <p>Уншиж байна...</p>;
  if (error) return <p>Алдаа гарлаа: {error.message}</p>;

  const total =
    Number(formData.unitPrice) > 0 && Number(formData.returnQuantity) > 0
      ? Number(formData.unitPrice) * Number(formData.returnQuantity)
      : null;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignatureSave = (dataUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      signature: dataUrl,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // validation
    if (
      !formData.deliveryPersonName ||
      !formData.productName ||
      !formData.shopName ||
      !formData.returnQuantity ||
      !formData.unitPrice
    ) {
      toast.error("Бүх талбарыг бөглөнө үү.");
      return;
    }

    setShowConfirmModal(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>🚚 Буцаалт хүлээж авч буй хүнээ сонгоно уу.</Label>
          <select
            onChange={handleChange}
            name="deliveryPersonName"
            value={formData.deliveryPersonName}
            className="w-full border p-2 rounded"
          >
            <option value="">Сонгоно уу</option>
            {DeliveryPersonName?.deliveryPerson.map((person) => (
              <option key={person.id} value={person.id ?? ""}>
                {person.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>📦 Бараа сонгох</Label>
          <select
            name="productName"
            onChange={handleChange}
            value={formData.productName}
            className="w-full border p-2 rounded"
          >
            <option value="">Бараа сонгоно уу</option>
            {data?.product.map((product) => (
              <option key={product.id} value={product.id}>
                {product.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>🏪 Дэлгүүрээ сонгоно уу</Label>
          <select
            onChange={handleChange}
            value={formData.shopName}
            name="shopName"
            className="w-full border p-2 rounded"
          >
            <option value="">Дэлгүүр сонгох</option>
            {ShopNameData?.customer.map((shop) => (
              <option key={shop.id} value={shop.id}>
                {shop.companyName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>🔢 Буцаах тоо ширхэг</Label>
          <Input
            value={formData.returnQuantity}
            onChange={handleChange}
            type="number"
            name="returnQuantity"
            min={1}
          />
        </div>

        <div>
          <Label>💵 Нэгж үнэ</Label>
          <Input
            value={formData.unitPrice}
            onChange={handleChange}
            type="number"
            name="unitPrice"
            min={1}
          />
        </div>

        <div className="p-2 border rounded bg-gray-100">
          {total !== null ? `${total}₮` : "Нийт үнийг харуулах"}
        </div>

        <Button
          type="submit"
          className="bg-blue-600 text-white w-full hover:bg-blue-700"
        >
          Илгээх
        </Button>
      </form>

      {/* Confirm Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold">Буцаалтыг баталгаажуулах</h2>

            <div className="text-sm space-y-1">
              <p>
                🚚 Хүлээн авагч:{" "}
                {
                  DeliveryPersonName?.deliveryPerson.find(
                    (p) => p.id === formData.deliveryPersonName
                  )?.name
                }
              </p>
              <p>
                📦 Бараа:{" "}
                {
                  data?.product.find((p) => p.id === formData.productName)
                    ?.title
                }
              </p>
              <p>
                🏪 Дэлгүүр:{" "}
                {
                  ShopNameData?.customer.find((p) => p.id === formData.shopName)
                    ?.companyName
                }
              </p>
              <p>🔢 Тоо ширхэг: {formData.returnQuantity}</p>
              <p>💵 Нэгж үнэ: {formData.unitPrice}</p>
              <p>💰 Нийт үнэ: {total}₮</p>
            </div>

            <div>
              <Label>✍️ Гарын үсгээ зурна уу:</Label>
              <SignaturePadModal onSave={handleSignatureSave} />
              {formData.signature && (
                <div className="relative w-full h-32 border mt-2">
                  <Image
                    src={formData.signature}
                    alt="Signature"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setShowConfirmModal(false)}
              >
                Болих
              </Button>
              <Button
                onClick={async () => {
                  if (!formData.signature) {
                    toast.error("Гарын үсгээ зурна уу!");
                    return;
                  }

                  setIsSubmitting(true);
                  try {
                    await CreateProductReturn({
                      variables: {
                        input: {
                          deliveryPersonId: formData.deliveryPersonName,
                          productId: formData.productName,
                          shopId: formData.shopName,
                          pieces: Number(formData.returnQuantity),
                          unitPrice: Number(formData.unitPrice),
                          totalPrice: total ?? 0,
                          signature: formData.signature,
                        },
                      },
                    });

                    toast.success("Амжилттай үүслээ!");
                    setFormData(initialForm);
                    setShowConfirmModal(false);
                  } catch (err) {
                    console.error("Алдаа:", err);
                    toast.error("Алдаа гарлаа!");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                disabled={isSubmitting}
              >
                Баталгаажуулах
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
