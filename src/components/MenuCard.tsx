import type { Menu } from "@/types/menu"
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import MenuDetailDialog from "./MenuDetailDialog"

interface MenuCardProps {
    menu: Menu
}

const MenuCard = ({ menu }: MenuCardProps) => {
    return (
        <Card>
            <img src={menu.imageUrl} alt={menu.name} className="w-full h-40 object-cover rounded-t-lg" />
            <CardContent>
                <h3 className="font-semibold">{menu.name}</h3>
                <p className="text-sm text-muted-foreground">{menu.description}</p>
                <p className="font-bold">Rp. {menu.price.toLocaleString('id-ID')}</p>
                {!menu.available && <Badge variant={'destructive'}>Habis</Badge>}
            </CardContent>
            <CardFooter>
                <MenuDetailDialog menu={menu} />
            </CardFooter>
        </Card>
    )
}

export default MenuCard