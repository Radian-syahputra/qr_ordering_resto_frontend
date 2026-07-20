import { useState } from "react";
import type { Menu } from "@/types/menu";
import { useCartStore } from "@/store/cartStore";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface MenuDetailDialogProps {
  menu: Menu;
}

const MenuDetailDialog = ({ menu }: MenuDetailDialogProps) => {
const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ menu, quantity, note });
    setQuantity(1);
    setNote("");
    setOpen(false);
    toast.success('Berhasil Menambahkan Ke Cart')
};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={<Button disabled={!menu.available} className="w-full" />}>
        Tambah Ke Cart
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{menu.name}</DialogTitle>
        </DialogHeader>

        <img
          src={menu.imageUrl}
          alt={menu.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <p className="text-sm text-muted-foreground">{menu.description}</p>
        <p className="font-bold">Rp. {menu.price.toLocaleString("id-ID")}</p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
            -
          </Button>
          <span>{quantity}</span>
          <Button
            variant="outline"
            onClick={() => setQuantity((prev) => prev + 1)}>
            +
          </Button>
        </div>

        <Textarea
          placeholder="Catatan (opsional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <DialogFooter>
          <Button onClick={handleAddToCart}>Tambah ke Cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuDetailDialog;
