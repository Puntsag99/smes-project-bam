import { useProductQuery } from "@/app/generated";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export const ProductQuery = () => {
  const { data, loading, error } = useProductQuery();

  if (loading)
    return (
      <p className="w-full flex justify-center pt-20 text-gray-500">
        Түр хүлээнэ үү...
      </p>
    );
  if (error)
    return (
      <p className="text-red-500 font-medium text-center">
        Алдаа гарлаа: {error.message}
      </p>
    );

  return (
    <div className="p-4 md:p-8 bg-white shadow-md rounded-xl mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        🛍️ Нэмсэн бүтээгдэхүүн
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 rounded-lg">
          <thead className="bg-[#203651] text-white">
            <tr>
              {["№", "Нэр", "Төрөл", "Орц", "Үнэ", "Дэлгэрэнгүй"].map(
                (header, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-3 text-left font-medium border-b"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {data?.product.map((product, index) => (
              <tr
                key={product.id}
                className="hover:bg-indigo-50 transition-colors"
              >
                <td className="px-4 py-3 border-b">{index + 1}</td>
                <td className="px-4 py-3 border-b">{product.title}</td>
                <td className="px-4 py-3 border-b">{product.type}</td>
                <td className="px-4 py-3 border-b">
                  {product.ingredient || "—"}
                </td>
                <td className="px-4 py-3 border-b">{product.price}₮</td>

                <td className="px-4 py-3 border-b text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
                        → Үзэх
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-md bg-white rounded-xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-gray-900">
                          {product.title}
                        </DialogTitle>
                      </DialogHeader>

                      {product.imageURL && (
                        <div className="mb-4">
                          <Image
                            src={product.imageURL}
                            alt={product.title}
                            width={400}
                            height={300}
                            className="rounded-lg shadow-md"
                          />
                        </div>
                      )}

                      <div className="space-y-2 text-gray-700 text-sm">
                        <p>
                          <strong>Төрөл:</strong> {product.type}
                        </p>
                        <p>
                          <strong>Код:</strong> {product.barcode || "—"}
                        </p>
                        <p>
                          <strong>Үлдэгдэл:</strong> {product.stock || 0}
                        </p>
                        <p>
                          <strong>Найрлага:</strong> {product.ingredient || "—"}
                        </p>
                        <p>
                          <strong>Үнэ:</strong> {product.price}₮
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
