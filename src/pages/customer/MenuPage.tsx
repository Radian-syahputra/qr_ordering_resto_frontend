import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useMenus } from "@/hooks/useMenus";
import { useCategories } from "@/hooks/useCategories";

import MenuCard from "@/components/MenuCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const MenuPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | undefined>(undefined);

  const [searchParams] = useSearchParams();
  const tableId = searchParams.get("table");
  const setTableId = useCartStore((state) => state.setTableId);

  useEffect(() => {
    if (tableId) {
      setTableId(tableId);
    }
  }, [tableId, setTableId]);

  const { data: menus, isLoading: menusLoading } = useMenus(search, category);
  const { data: categories, isLoading: categoriesLoading } = useCategories();

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Input
        placeholder="Cari menu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select
        value={category ?? "all"}
        onValueChange={(value) =>
          setCategory(value === "all" ? undefined : value ?? undefined)
        }>
        <SelectTrigger>
          <SelectValue placeholder="Semua Kategori">
            {(value: string) => {
              if (value === "all") return "Semua Kategori";
              return (
                categories?.find((cat) => cat.id === value)?.name ??
                "Semua Kategori"
              );
            }}
          </SelectValue>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value={"all"}>Semua Kategori</SelectItem>
          {categories?.map((cat) => (
            <SelectItem value={cat.id} key={cat.id}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {menus?.map((menu) => (
        <MenuCard menu={menu} key={menu.id} />
      ))}
    </div>
  );
};

export default MenuPage;
