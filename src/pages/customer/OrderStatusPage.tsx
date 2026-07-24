import { useSearchParams } from "react-router-dom"
import { useOrder } from "@/hooks/useOrder"
import { Spinner } from "@/components/ui/spinner"



const OrderStatusPage = () => {
  const [searchParams] = useSearchParams()
  const orderId = searchParams.get('orderId') ?? ''

  const {data : order, isLoading} = useOrder(orderId)

   if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner className="size-8" />
      </div>
    );
  }

  if(!order) {
    return (
      <div className="p-4">Pesanan Tidak Di Temukan</div>
    )
  }

  return (
    <div className="p-4">
      <h1 className="font-bold text-lg">Status Pesanan</h1>
      <p>Meja : {order.table.name}</p>
      <p>Status : {order.status}</p>

      <div className="mt-4">
        {order.orderItems.map((item) => (
          <div className="flex justify-between border-b py-2" key={item.id}>
            <p>{item.menu.name} X {item.quantity}</p>
            <p>Rp. {(item.price * item.quantity).toLocaleString('id-ID')}</p>
          </div>
        ))}
      </div>

      <p className="font-bold mt-4">Total : Rp. {order.totalPrice.toLocaleString('id-ID')} </p>
    </div>
  )
}

export default OrderStatusPage