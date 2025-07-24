"use client";

import { useProductQuery, useStockQuery } from "@/app/generated";
import { Card } from "@/app/vendor/components/Card";
import { PackageCheck } from "lucide-react";

const VendorStock = () => {
  const { data: products } = useProductQuery();
  const { data: stockData, refetch } = useStockQuery();
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
            <div key={p.id} onClick={() => {}}>
              <Card
                title={p.title}
                value={`${quantity} ш`}
                icon={<PackageCheck />}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VendorStock;
