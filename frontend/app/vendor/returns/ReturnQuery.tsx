import { useReturnQuery } from "@/app/generated";

export const ReturnQuery = () => {
  const { data, loading, error } = useReturnQuery();

  if (loading) return <div>Уншиж байна...</div>;
  if (error) return <div>Алдаа гарлаа: {error.message}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Буцаалт бүртгэл</h2>
      <div className=" max-w-full">
        <table className="min-w-[900px] border-separate border-spacing-y-2 text-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-8 py-4 text-center font-semibold">#</th>
              <th className="border px-8 py-4 text-left font-semibold">
                Дэлгүүр
              </th>
              <th className="border px-8 py-4 text-left font-semibold">
                Бараа нэр
              </th>
              <th className="border px-8 py-4 text-center font-semibold">
                Тоо ширхэг
              </th>

              <th className="border px-8 py-4 text-left font-semibold">
                Хүлээн авагч
              </th>
              <th className="border px-8 py-4 text-center font-semibold">
                Огноо
              </th>
              <th className="border px-8 py-4 text-center font-semibold">
                Гарын үсэг
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.Return?.map((item, index) => (
              <tr
                key={item.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="border px-8 py-4">{index + 1}</td>
                <td className="border px-8 py-4 text-left">
                  {item.shop?.name}
                </td>
                <td className="border px-8 py-4">{item.product?.title}</td>
                <td className="border px-8 py-4 text-left">{item.pieces}</td>
                <td className="border px-8 py-4 text-left">
                  {item.deliveryPerson?.name}
                </td>
                <td className="border px-8 py-4">
                  {new Date(item.created_at).toLocaleDateString("mn-MN", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}{" "}
                  {new Date(item.created_at).toLocaleTimeString("mn-MN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="border px-8 py-4">
                  {item.signature ? (
                    <img
                      src={item.signature}
                      alt="Гарын үсэг"
                      className="h-20 object-contain mx-auto rounded"
                      title="Гарын үсгийн зураг"
                    />
                  ) : (
                    "Зураг алга"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
