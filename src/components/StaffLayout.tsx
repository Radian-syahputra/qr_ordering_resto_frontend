import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { logout } from "@/api/authApi";
import { Button } from '@/components/ui/button'


const StaffLayout = () => {
    const user = useAuthStore((state) => state.user)
    const clearUser = useAuthStore((state) => state.clearUser)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        clearUser()
        navigate('/login')
    }

  return (
    <div className="flex min-h-screen">
        <aside className="w-56 border-r p-4 flex flex-col gap-2">
            <p className="font-bold mb-4">{user?.name}</p>
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/category">Kategori</Link>
                <Link to="/admin/menu">Menu</Link>
                <Link to="/admin/table">Meja</Link>
                <Link to="/admin/order">Order</Link>

                <Button onClick={handleLogout} variant={'outline'} className={'mt-auto'}>Logout</Button>
        </aside>

        <main className="flex-1 p-4">
            <Outlet/>
        </main>
    </div>
  )
}

export default StaffLayout