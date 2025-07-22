import { useProductDeliveryQuery } from "@/app/generated";

export const DeliveredQuery = () => {
  const { data, loading, error } = useProductDeliveryQuery();
  if (loading)
    return <p className="text-center text-gray-600">Уншиж байна...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Алдаа гарлаа: {error.message}</p>
    );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
        Хүргэгдэх бүтээгдэхүүнүүд
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded-md">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-3 border">№</th>
              <th className="px-4 py-3 border">Бүтээгдэхүүний нэр</th>
              <th className="px-4 py-3 border">Төрөл</th>
              <th className="px-4 py-3 border">Хүргэх тоо</th>
              <th className="px-4 py-3 border">Нэгж үнэ</th>
              <th className="px-4 py-3 border">Нийт үнэ</th>
              <th className="px-4 py-3 border">Түгээгч</th>
              <th className="px-4 py-3 border">Дэлгүүр</th>
              <th className="px-4 py-3 border">Огноо</th>
            </tr>
          </thead>
          <tbody>
            {data?.productDelivery?.map((item, index) => (
              <tr
                key={item.id}
                className="text-sm text-gray-800 hover:bg-gray-50"
              >
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">
                  {item.product?.title ?? "—"}
                </td>
                <td className="px-4 py-2 border">
                  {item.product?.type ?? "—"}
                </td>
                <td className="px-4 py-2 border">{item.quantity}</td>
                <td className="px-4 py-2 border">
                  {(item.quantity * (item.unitPrice ?? 0)).toLocaleString()}₮
                </td>
                <td className="px-4 py-2 border">
                  {item.unitPrice != null
                    ? (item.quantity * item.unitPrice).toLocaleString() + "₮"
                    : "—"}
                </td>
                <td className="px-4 py-2 border">
                  {item.deliveryPerson?.name ?? "—"}
                </td>
                <td className="px-4 py-2 border">
                  {item.shopId ? item.shop?.name ?? "—" : "—"}
                </td>
                <td className="px-4 py-2 border">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString("mn-MN")
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {data?.productDelivery?.length === 0 && (
          <p className="text-center text-gray-500 py-6">
            Одоогоор хүргэлтийн мэдээлэл алга.
          </p>
        )}
      </div>
    </div>
  );
};
