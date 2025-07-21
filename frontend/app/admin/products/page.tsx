"use client";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { z } from "zod";
import Image from "next/image";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { ProductQuery } from "./productQuert";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useCreateProductMutation } from "@/app/generated";

const initialForm = {
  title: "",
  stock: "",
  ingredient: "",
  barcode: "",
  price: "",
  imageURL: "",
  type: "",
};

const ProductSchema = z.object({
  title: z.string().min(1, "Бүтээгдэхүүний нэрээ оруулна уу."),
  type: z.string().min(1, "Бүтээгдэхүүний төрлөө оруулна уу."),
  stock: z.string().min(1, "Үлдэгдэл оруулна уу."),
  ingredient: z.string().min(1, "Орцоо оруулна уу."),
  barcode: z.string().min(1, "Кодо оруулна уу."),
  price: z.string().min(1, "Үнээ оруулна уу."),
  imageURL: z.string().min(1, "Зургаа оруулна уу."),
});

const Product = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState(initialForm);
  const [previewLink, setPreviewLink] = useState("");
  const [formData, setFormData] = useState(initialForm);
  const [isUploading, setIsUploading] = useState(false);

  const [CreateProduct, { error }] = useCreateProductMutation();

  const imageURLRef = useRef<string | null>(null);

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

    const result = ProductSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        title: fieldErrors.title?.[0] || "",
        type: fieldErrors.type?.[0] || "",
        stock: fieldErrors.stock?.[0] || "",
        ingredient: fieldErrors.ingredient?.[0] || "",
        barcode: fieldErrors.barcode?.[0] || "",
        price: fieldErrors.price?.[0] || "",
        imageURL: fieldErrors.imageURL?.[0] || "",
      });
      return;
    }

    if (isUploading) {
      toast.error("Зураг байршиж байна, түр хүлээнэ үү...");
      return;
    }

    if (!imageURLRef.current) {
      toast.error("Зураг оруулна уу!");
      return;
    }

    try {
      await CreateProduct({
        onCompleted: () => {
          console.log("first");
        },
        variables: {
          input: {
            ...formData,
            imageURL: imageURLRef.current,
            price: Number(formData.price),
            stock: Number(formData.stock),
          },
        },
      });

      setFormData(initialForm);
      setErrors(initialForm);
      setOpen(false);
      toast.success("Амжилттай үүслээ!");
      setPreviewLink("");
    } catch (error) {
      console.error("Хадгалах үед алдаа гарлаа:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  const inputImageRef = useRef<HTMLInputElement>(null);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    setPreviewLink(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    setIsUploading(true);

    try {
      const res = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        setIsUploading(false);
        return toast.error("Зураг байршуулахад алдаа гарлаа.");
      }

      const data = await res.json();

      const uploadedUrl = data.imageUrl || data.url || data.Location;

      if (!uploadedUrl) {
        toast.error("Зураг байршуулж чадсангүй.");
        return;
      }

      imageURLRef.current = uploadedUrl;

      setFormData((prev) => ({
        ...prev,
        imageURL: uploadedUrl,
      }));

      setErrors((prev) => ({
        ...prev,
        imageURL: "",
      }));
    } catch (error) {
      toast.error("Зураг байршуулах үед алдаа гарлаа.");
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const openBrowse = () => {
    inputImageRef.current?.click();
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
              + Бүтээгдэхүүн нэмэх
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl">
                ✨ Бүтээгдэхүүн нэмэх
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="text-sm font-medium">
                  Бүтээгдэхүүний нэр
                </label>
                <Input
                  name="title"
                  onChange={handleChange}
                  value={formData.title}
                  placeholder="Жишээ:Гурил"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">
                  Бүтээгдэхүүний төрөл
                </label>
                <Input
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  placeholder="Жишээ:Өргөн гурил"
                />
                {errors.type && (
                  <p className="text-red-500 text-sm">{errors.type}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">
                  Бүтээгдэхүүний үлдэгдэл
                </label>
                <Input
                  name="stock"
                  onChange={handleChange}
                  value={formData.stock}
                  placeholder="Жишээ:25"
                  type="number"
                />
                {errors.stock && (
                  <p className="text-red-500 text-sm">{errors.stock}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">
                  Бүтээгдэхүүний орц
                </label>
                <Input
                  onChange={handleChange}
                  value={formData.ingredient}
                  name="ingredient"
                  placeholder="Жишээ:Сүү сахар"
                />
                {errors.ingredient && (
                  <p className="text-red-500 text-sm">{errors.ingredient}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Барааны код</label>
                <Input
                  onChange={handleChange}
                  value={formData.barcode}
                  name="barcode"
                  placeholder="Жишээ:061949..."
                />
                {errors.barcode && (
                  <p className="text-red-500 text-sm">{errors.barcode}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">
                  Бүтээгдэхүүний үнээ оруулна уу.
                </label>
                <Input
                  onChange={handleChange}
                  value={formData.price}
                  name="price"
                  placeholder="Жишээ:2000₮"
                  type="number"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">
                  Бүтээгдэхүүний зургаа оруулна уу.
                </label>

                <Input
                  type="file"
                  name="imageURL"
                  ref={inputImageRef}
                  hidden
                  onChange={handleInputChange}
                />
                {errors.imageURL && (
                  <p className="text-red-500 text-sm">{errors.imageURL}</p>
                )}
                <div
                  onClick={openBrowse}
                  className="h-45 bg-[#7F7F800D] rounded-md flex justify-center items-center cursor-pointer relative"
                >
                  {!previewLink && (
                    <span className="text-gray-500">Browse or Drop image</span>
                  )}
                  {previewLink && (
                    <div className="absolute inset-0 group">
                      <Image
                        alt="img"
                        src={previewLink as string}
                        fill
                        className="object-cover rounded-md"
                      />

                      <button
                        type="button"
                        onClick={() => {
                          setPreviewLink("");
                          imageURLRef.current = "";
                          setFormData((prev) => ({ ...prev, imageURL: "" }));
                        }}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md group-hover:opacity-100 opacity-70"
                      >
                        ❌
                      </button>
                    </div>
                  )}
                </div>
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
        <ProductQuery />
      </div>
    </motion.div>
  );
};

export default Product;
