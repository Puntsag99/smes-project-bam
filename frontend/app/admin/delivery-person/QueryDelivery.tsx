import { toast } from "sonner";
import { EditModal } from "./EditModal";
import { useDeliveryPersonQuery } from "@/app/generated";
import { useDeleteDeliveryPersonMutation } from "@/app/generated";

export const QueryDelivery = () => {
  const { loading, error, data } = useDeliveryPersonQuery();

  const [deleteDeliveryPerson] = useDeleteDeliveryPersonMutation();

  const handleDelete = async (id: string) => {
    if (!confirm("Та энэ түгээгчийг устгахдаа итгэлтэй байна уу?")) return;

    try {
      await deleteDeliveryPerson({ variables: { deleteDeliveryPersonId: id } });
      toast.success("Амжилттай устгалаа");
    } catch (error) {
      console.error("Устгах үед алдаа гарлаа:", error);
      toast.error("Устгах үед алдаа гарлаа");
    }
  };

  if (loading) return <p className="text-center py-4">Түр хүлээнэ үү...</p>;

  if (error) {
    console.error(error);
    return <p className="text-red-500 text-center py-4">Алдаа гарлаа</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full ">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
        Нэмсэн Түгээгч
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr className="">
              <th className="px-6 py-3 text-left">№</th>
              <th className="px-6 py-3 text-left">Нэр</th>
              <th className="px-6 py-3 text-left">Утасны дугаар</th>
              <th className="px-6 py-3 text-left">🔧 Үйлдэл</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data?.deliveryPerson.map((delivery, index) => (
              <tr
                key={delivery.id}
                className="hover:bg-blue-50 transition-colors duration-200  "
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{delivery.name}</td>
                <td className="px-6 py-4">{delivery.phoneNumber}</td>
                <td className="px-4 py-2">
                  <EditModal delivery={delivery} />
                  <button
                    onClick={() => handleDelete(delivery.id!)}
                    className="text-red-500 hover:underline"
                  >
                    Устгах
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
