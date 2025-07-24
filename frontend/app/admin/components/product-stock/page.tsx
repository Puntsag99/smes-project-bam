"use client";
import { useState } from "react";
import {
  useCreateStockMutation,
  useProductQuery,
  useStockQuery,
} from "@/app/generated";
import { Card } from "@/app/vendor/components/Card";
import { PackageCheck } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const ProductStock = () => {
  const { data: products } = useProductQuery();
  const { data: stockData, refetch } = useStockQuery();

  const [createStock] = useCreateStockMutation({
    onCompleted: () => {
      toast.success("амжилттай бүртгэгдлээ!");
      refetch(); // stock дахин ачаалуулах
    },
    onError: (error) => toast.error("Алдаа гарлаа: " + error.message),
  });

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [selectedProductName, setSelectedProductName] = useState<string | null>(
    null
  );
  const [pieces, setPieces] = useState<number>(1);
  const [isDelivered, setIsDelivered] = useState(false);

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedProductId) return;

    await createStock({
      variables: {
        input: {
          product: selectedProductId,
          pieces,
          is_delivered: isDelivered,
        },
      },
    });

    // form reset
    setSelectedProductId(null);
    setSelectedProductName(null);
    setPieces(0);
    setIsDelivered(false);
  };

  const getStockPieces = (productId: string) => {
    if (!stockData?.stock) return 0;
    return stockData.stock
      .filter((s) => s.productId === productId)
      .reduce((sum, s) => sum + s.pieces, 0);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products?.product.map((p) => {
          const quantity = getStockPieces(p.id);
          return (
            <div
              key={p.id}
              onClick={() => {
                setSelectedProductId(p.id);
                setSelectedProductName(p.title);
              }}
            >
              <Card
                title={p.title}
                value={`${quantity} ш`}
                icon={<PackageCheck />}
              />
            </div>
          );
        })}
      </div>

      {/* Modal form */}
      {selectedProductId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <form
            onSubmit={handleCreate}
            className="bg-white p-6 rounded-lg w-96 space-y-4"
          >
            <h2 className="text-lg font-bold">
              {selectedProductName} → Stock нэмэх
            </h2>
            <div>
              <label className="block text-sm font-medium mb-1">Ширхэг</label>
              <Input
                type="number"
                value={pieces}
                onChange={(e) =>
                  setPieces(
                    e.target.value === "" ? 0 : parseInt(e.target.value)
                  )
                }
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                className="size-5"
                type="checkbox"
                checked={isDelivered}
                onChange={(e) => setIsDelivered(e.target.checked)}
              />
              <span>Хүргэлт хийгдсэн</span>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedProductId(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Болих
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Хадгалах
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductStock;
