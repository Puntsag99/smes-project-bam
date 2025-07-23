import { useProductDeliveryQuery } from "@/app/generated";

const transactionTypeMap: Record<string, string> = {
  NOT_PAYMENT: "",
  BANK_TRANSFER: "Дансаар",
  CREDIT: "Зээл",
  CASH: "Бэлэн",
};

export const DeliveredQuery = () => {
  const { data, loading, error } = useProductDeliveryQuery();

  if (loading)
    return <p className="text-center text-gray-600 py-10">Уншиж байна...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 py-10">
        Алдаа гарлаа: {error.message}
      </p>
    );

  const deliveries =
    data?.productDelivery?.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt ?? "").getTime();
      const dateB = new Date(b.createdAt ?? "").getTime();
      return dateB - dateA; // Сүүлд үүссэн эхэнд
    }) ?? [];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
        Борлуулалт
      </h2>

      {deliveries.length === 0 ? (
        <p className="text-center text-gray-500 py-6">
          Одоогоор хүргэлтийн мэдээлэл алга.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#203651] text-white text-xs md:text-sm">
              <tr>
                {[
                  "№",
                  "Дэлгүүр",
                  "Бүтээгдэхүүний нэр",
                  "Төрөл",
                  "Хүргэсэн тоо",
                  "Нэгж үнэ",
                  "Нийт үнэ",
                  "Түгээгч",
                  "Төлбөр",
                  "Огноо",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className="p-2 md:p-3 text-left border-b font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {deliveries.slice(0, 10).map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-indigo-50 transition-colors text-gray-700"
                >
                  <td className="p-2 md:p-3 border-b">{index + 1}</td>
                  <td className="p-2 md:p-3 border-b">
                    {item.shopId ? item.shop?.name ?? "—" : "—"}
                  </td>
                  <td className="p-2 md:p-3 border-b">
                    {item.product?.title ?? "—"}
                  </td>
                  <td className="p-2 md:p-3 border-b">
                    {item.product?.type ?? "—"}
                  </td>
                  <td className="p-2 md:p-3 border-b">{item.quantity}</td>
                  <td className="p-2 md:p-3 border-b">{item.unitPrice}₮</td>
                  <td className="p-2 md:p-3 border-b">
                    {item.unitPrice != null
                      ? (item.quantity * item.unitPrice).toLocaleString() + "₮"
                      : "—"}
                  </td>
                  <td className="p-2 md:p-3 border-b">
                    {item.deliveryPerson?.name ?? "—"}
                  </td>
                  <td className="p-2 md:p-3 border-b">
                    {item.transactionType
                      ? transactionTypeMap[item.transactionType] ??
                        item.transactionType
                      : "—"}
                  </td>
                  <td className="p-2 md:p-3 border-b">
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString("mn-MN")
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
