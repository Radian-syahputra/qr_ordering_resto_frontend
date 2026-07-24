import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { useCartStore } from "@/store/cartStore";
import { createOrder } from "@/api/orderApi";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const CheckoutPage = () => {
  const items = useCartStore((state) => state.items);
  const tableId = useCartStore((state) => state.tableId);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.menu.price,
    0
  );

  const { mutate, isPending } = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      clearCart();
      toast.success("Pesanan Berhasil Di Buat");
      navigate(`/status?orderId=${data.id}`);
    },
    onError: () => {
      toast.error("Gagal Membuat Pesanan");
    },
  }); 

  const handleCheckOut = () => {
    if (!tableId) {
      toast.error("Meja Tidak Terdeteksi");
      return;
    }

    const orderItem = items.map((item) => ({
      menuId: item.menu.id,
      quantity: item.quantity,
      note : item.note
    }));

    mutate({items: orderItem, tableId})
  };

  return (
    <div className="p-4">
      {items.map((item) => (
        <div className="flex justify-between p-2 border-b" key={item.menu.id}>
          <p>{item.menu.name} X {item.quantity}</p>
          <p className="">Rp. {(item.menu.price * item.quantity).toLocaleString('id-ID')}</p>
        </div>
      ))}

      <p className="font-bold text-lg mt-4">Total : Rp. {totalPrice.toLocaleString('id-ID')}</p>

      <Button onClick={handleCheckOut} disabled={isPending} className={'w-full mt-4'}>
        {isPending ? <Spinner className="text-center"/> : "Check Out"}
      </Button>
    </div>
  );
};

export default CheckoutPage;
