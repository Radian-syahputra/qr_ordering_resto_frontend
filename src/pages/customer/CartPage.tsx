import { useCartStore } from "@/store/cartStore"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"


const CartPage = () => {
  const items = useCartStore((state) => state.items)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const navigate = useNavigate()

  const totalPrice = items.reduce((total, item) => total + (item.menu.price * item.quantity), 0)
  

  if (items.length === 0) {
    return (
      <div>
        <div className="p-4">Cart kamu masih kosong.</div>
      </div>
    )
  }

  return (
    <div className="p-4">
      {items.map((item) => (
                <div key={item.menu.id} className="flex justify-between items-center border-b py-2">
                    <div>
                        <p className="font-semibold">{item.menu.name}</p>
                        <p className="text-sm text-muted-foreground">
                            Rp {item.menu.price.toLocaleString('id-ID')} x {item.quantity}
                        </p>
                        {item.note && <p className="text-xs italic">Catatan: {item.note}</p>}
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" onClick={() => updateQuantity(item.menu.id, Math.max(1, item.quantity - 1))}>-</Button>
                        <span>{item.quantity}</span>
                        <Button variant="outline" onClick={() => updateQuantity(item.menu.id, item.quantity + 1)}>+</Button>
                        <Button variant="destructive" onClick={() => removeItem(item.menu.id)}>Hapus</Button>
                    </div>
                </div>
            ))}

            <div className="mt-4 flex justify-between items-center">
                <p className="font-bold text-lg">Total: Rp {totalPrice.toLocaleString('id-ID')}</p>
                <Button onClick={() => navigate('/checkout')}>Checkout</Button>
            </div>
    </div>
  )
}

export default CartPage