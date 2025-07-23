import { useReturnQuery } from "@/app/generated";

export const ReturnQuery = () => {
  const { data, loading, error } = useReturnQuery();

  if (loading)
    return <p className="text-center text-gray-600">Уншиж байна...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Алдаа гарлаа: {error.message}</p>
    );

  const returns = data?.Return ?? [];

  return (
    <div className="w-full h-full p-0">
      <div className="w-full h-full bg-white rounded-xl shadow-none overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm border-collapse">
          <thead className="bg-[#203651] text-white text-xs md:text-sm">
            <tr>
              {[
                "№",
                "Дэлгүүр",
                "Бараа нэр",
                "Тоо ширхэг",
                "Хүлээн авагч",
                "Огноо",
                "Гарын үсэг",
              ].map((header, idx) => (
                <th
                  key={idx}
                  className="p-3 text-left border-b border-gray-200"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {returns.length > 0 ? (
              returns
                .slice()
                .sort(
                  (a, b) =>
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                )
                .map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-indigo-50 transition-colors text-gray-700"
                  >
                    <td className="p-3 border-b">{index + 1}</td>
                    <td className="p-3 border-b">{item.shop?.name ?? "—"}</td>
                    <td className="p-3 border-b">
                      {item.product?.title ?? "—"}
                    </td>
                    <td className="p-3 border-b">{item.pieces}</td>
                    <td className="p-3 border-b">
                      {item.deliveryPerson?.name ?? "—"}
                    </td>
                    <td className="p-3 border-b">
                      {item.created_at
                        ? `${new Date(item.created_at).toLocaleDateString(
                            "mn-MN"
                          )} ${new Date(item.created_at).toLocaleTimeString(
                            "mn-MN",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}`
                        : "—"}
                    </td>
                    <td className="p-3 border-b text-center">
                      {item.signature ? (
                        <img
                          src={item.signature}
                          alt="Гарын үсэг"
                          className="h-14 w-auto object-contain mx-auto rounded"
                        />
                      ) : (
                        <span className="text-gray-400">Зураг алга</span>
                      )}
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={7} className="p-6 text-center text-gray-500">
                  Мэдээлэл байхгүй
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
