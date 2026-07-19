import { useAuthStore } from "@/store/authStore"
import { Navigate, Outlet } from "react-router-dom"


const GuestRoute = () => {

    const user = useAuthStore((state) => state.user)

    if(user) {
        return <Navigate to={'/admin/dashboard'} replace />
    }
  return <Outlet/>
}

export default GuestRoute