import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Spinner } from "./components/ui/spinner";
import { Toaster } from "./components/ui/sonner";

// Customer
import MenuPage from "./pages/customer/MenuPage";
import CartPage from "./pages/customer/CartPage";
import CheckoutPage from "./pages/customer/CheckoutPage";
import OrderStatusPage from "./pages/customer/OrderStatusPage";

// Staff
import CategoryPage from "./pages/staff/CategoryPage";
import DashboardPage from "./pages/staff/DashboardPage";
import LoginPage from "./pages/staff/LoginPage";
import RegisterPage from "./pages/staff/RegisterPage";
import MenuManagePage from "./pages/staff/MenuManagePage";
import OrderManagePage from "./pages/staff/OrderManagePage";
import TableManagePage from "./pages/staff/TableManagePage";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes = () => {
  const { isLoading } = useAuth();

 if (isLoading) {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Spinner className="size-8" />
        </div>
    )
}

  return (
    <>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          {/* Custumer */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/status" element={<OrderStatusPage />} />

          {/* Staff */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/category" element={<CategoryPage />} />
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/admin/menu" element={<MenuManagePage />} />
            <Route path="/admin/order" element={<OrderManagePage />} />
            <Route path="/admin/table" element={<TableManagePage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
