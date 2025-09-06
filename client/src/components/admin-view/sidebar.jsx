import { ChartGantt } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { SendToBack,ShoppingCart, LayoutDashboard } from "lucide-react"
import { Sheet,SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"

   const adminSidebarMenuItems =[
    {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/admin/dashboard',
        icon: <LayoutDashboard />
    },
    {
        id: 'products',
        label:'Products',
        path: '/admin/products',
        icon: <SendToBack />
    },
    {
        id: 'orders',
        label: 'Orders',
        path: '/admin/orders',
        icon:<ShoppingCart />
        
    }
]


  const MenuItems = () => {
    const navigate = useNavigate()
    return <nav className="mt-8 flex-col flex gap-2">
      {
        adminSidebarMenuItems.map(menuItem=> <div key={menuItem.id} onClick={() =>navigate(menuItem.path)} className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">
          {menuItem.icon}
          <span>{menuItem.label}</span>

        </div>)
      }

    </nav>
  }


const AdminSidebar = ({open, setOpen}) => {

  const navigate = useNavigate()

  return (
    <>
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-64">
        <div className="flex flex-col h-full">
          <SheetHeader className='border-b'>
            <SheetTitle>
              <ChartGantt size={30}/>
              Admin Panel
            </SheetTitle>
          </SheetHeader>
          <MenuItems/>
        </div>
      </SheetContent>
    </Sheet>

    <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
      <div onClick={() => navigate("/admin/dashboard")} className="flex cursor-pointer items-center gap-2">
        
        <h1 className="text-xl font-extrabold">Admin Panel</h1>
      </div>
      <MenuItems/>
    </aside>
    </>
  )
}

export default AdminSidebar
