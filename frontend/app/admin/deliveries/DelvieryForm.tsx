"use client";

import { z } from "zod";
import Image from "next/image";
import { toast } from "sonner";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCreateDeliveryPersonMutation } from "@/app/generated";

const initialForm = {
  profileImage: "",
  deliveryName: "",
  phoneNumber: "",
};

const deliverSchema = z.object({
  deliveryName: z.string().min(2, "Нэр хамгийн багадаа 2 тэмдэгт байх ёстой"),
  phoneNumber: z
    .string()
    .min(8, "Утасны дугаар хамгийн багадаа 8 оронтой байна")
    .regex(/^[0-9]+$/, "Зөвхөн тоо байх ёстой"),
  profileImage: z.string().min(1, "Зургаа оруулна уу"),
});

type Props = {
  onSuccess?: () => void;
};
export const DeliveryForm = ({ onSuccess }: Props) => {
  const [errors, setErrors] = useState(initialForm);
  const [previewLink, setPreviewLink] = useState("");
  const [formData, setFormData] = useState(initialForm);
  const [isUploading, setIsUploading] = useState(false);

  const [CreateDeliveryPerson] = useCreateDeliveryPersonMutation();

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setPreviewLink(URL.createObjectURL(file));
    setErrors((prev) => ({ ...prev, profileImage: "" }));

    const uploadForm = new FormData();
    uploadForm.append("file", file);

    setIsUploading(true);
    try {
      const res = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: uploadForm,
      });

      if (!res.ok) {
        toast.error("Зураг байршуулахад алдаа гарлаа.");
        return;
      }

      const data = await res.json();

      console.log("uploaded image data:", data);

      setFormData((prev) => ({
        ...prev,
        profileImage: data.imageUrl,
      }));
    } catch (error) {
      console.error("Сүлжээний алдаа:", error);
      toast.error("Сүлжээний алдаа гарлаа.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isUploading) {
      toast.error("Зураг байршиж байна, түр хүлээнэ үү...");
      return;
    }

    const result = deliverSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        profileImage: fieldErrors.profileImage?.[0] || "",
        phoneNumber: fieldErrors.phoneNumber?.[0] || "",
        deliveryName: fieldErrors.deliveryName?.[0] || "",
      });
      return;
    }

    CreateDeliveryPerson({
      variables: {
        input: {
          name: formData.deliveryName,
          phoneNumber: formData.phoneNumber,
          image: formData.profileImage,
        },
      },
    });

    console.log("✅ Амжилттай өгөгдөл:", formData);

    toast.success("Амжилттай үүсгэлээ!");
    setFormData(initialForm);
    setPreviewLink("");
    setErrors(initialForm);

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "phoneNumber" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const clearImage = () => {
    setPreviewLink("");
    setFormData((prev) => ({
      ...prev,
      profileImage: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div>
        <label className="text-sm font-medium">
          Түгээгчийн профайл зураг оруулна уу
        </label>
        <div className="flex flex-col items-center">
          <Input
            type="file"
            hidden
            id="profile-upload"
            onChange={handleImageChange}
          />

          <div
            onClick={() => document.getElementById("profile-upload")?.click()}
            className="w-40 h-40 border border-dashed rounded-full relative cursor-pointer"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {previewLink ? (
                <div className="relative w-full h-full">
                  <Image
                    src={previewLink}
                    alt="preview"
                    fill
                    className="object-cover rounded-full"
                    sizes="160px"
                  />
                  <Button
                    type="button"
                    onClick={clearImage}
                    className="absolute top-1 right-1 w-7 h-7 p-1 rounded-full bg-white shadow"
                  >
                    <X className="w-5 h-5 text-red-500" />
                  </Button>
                </div>
              ) : (
                <Image
                  width={28}
                  height={28}
                  alt="camera"
                  src="/images/camera.svg"
                />
              )}
            </div>
          </div>
          {errors.profileImage && (
            <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">
          Түгээгчийн нэрээ оруулна уу
        </label>
        <Input
          name="deliveryName"
          onChange={handleChange}
          value={formData.deliveryName}
        />
        {errors.deliveryName && (
          <p className="text-red-500 text-sm">{errors.deliveryName}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">
          Түгээгчийн утасны дугаар оруулна уу
        </label>
        <Input
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={8}
          type="text"
          name="phoneNumber"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
        )}
      </div>

      <Button
        disabled={isUploading}
        type="submit"
        className="bg-blue-600 text-white w-full hover:bg-blue-700"
      >
        {isUploading ? "Зураг байршиж байна..." : "Үүсгэх"}
      </Button>
    </form>
  );
};
