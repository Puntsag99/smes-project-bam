import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUpdateDeliveryPersonMutation } from "@/app/generated";

interface EditModalProps {
  delivery: {
    id?: string | null;
    name?: string | null;
    phoneNumber?: string | null;
    image?: string | null;
  };
}

export const EditModal = ({ delivery }: EditModalProps) => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState(delivery.name ?? "");
  const [phone, setPhone] = useState(delivery.phoneNumber ?? "");

  const [updateDeliveryPerson] = useUpdateDeliveryPersonMutation();

  const handleUpdate = async () => {
    try {
      await updateDeliveryPerson({
        variables: {
          input: {
            id: delivery.id!,
            name,
            phoneNumber: phone,
          },
        },
      });
      toast.success("Амжилттай хадгалагдлаа ✅");
      setOpen(false);
    } catch (error) {
      toast.error("Хадгалах үед алдаа гарлаа ❌");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="text-blue-500 hover:underline mr-2">Засах</button>
        </DialogTrigger>
        <DialogContent className="max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Түгээгч засах
            </DialogTitle>
          </DialogHeader>

          {delivery.image && (
            <div className="flex justify-center">
              <div className="w-40 h-40 border border-dashed relative rounded-full overflow-hidden">
                <Image
                  src={delivery.image}
                  alt={delivery.name ?? "Түгээгч"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium">Нэр</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />

            <label className="block text-sm font-medium">Утас</label>
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button
              onClick={() => setOpen(false)}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Болих
            </Button>
            <Button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Хадгалах
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
