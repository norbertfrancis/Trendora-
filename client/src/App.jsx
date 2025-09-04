import { Routes, Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthRegister from "./pages/auth/register"
import AuthLogin from "./pages/auth/login"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminFeatures from "./pages/admin-view/features"
import AdminOrders from "./pages/admin-view/orders"

function App() {

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* common components */}
      <h1>Header components</h1>

      <Routes>

        <Route path="/auth" element={<AuthLayout/>}>
            <Route path="login" element={<AuthLogin/>}/>
            <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="orders" element={<AdminOrders/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
            
        </Route>

      </Routes>


    </div>
  )
}

export default App
