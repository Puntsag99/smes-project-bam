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
      <p className="w-full flex justify-center pt-30">Түр хүлээнэ үү...</p>
    );
  if (error) return <p>Алдаа гарлаа: {error.message}</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
        Нэмсэн Бүтээгдэхүүн
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full  border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">№</th>
              <th className="px-6 py-3 text-left">Нэр</th>
              <th className="px-6 py-3 text-left">Төрөл</th>
              <th className="px-6 py-3 text-left">Орц</th>
              <th className="px-6 py-3 text-left">Үнэ</th>
              <th className="px-6 py-3 text-center">Дэлгэрэнгүй</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {data?.product.map((product, index) => (
              <tr
                key={product.id}
                className="hover:bg-blue-50 transition-colors duration-200"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{product.title}</td>
                <td className="px-6 py-4">{product.type}</td>
                <td className="px-6 py-4">{product.ingredient}</td>
                <td className="px-6 py-4">{product.price}</td>

                <td className="px-6 py-4 text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-150">
                        → Үзэх
                      </button>
                    </DialogTrigger>

                    <DialogContent className="max-w-md bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold">
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
                            className="rounded-md"
                          />
                        </div>
                      )}

                      <div className="space-y-2 text-sm text-gray-700">
                        <p>
                          <strong>Төрөл:</strong> {product.type}
                        </p>
                        <p>
                          <strong>Код:</strong> {product.barcode}
                        </p>
                        <p>
                          <strong>Үлдэгдэл:</strong> {product.stock}
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
