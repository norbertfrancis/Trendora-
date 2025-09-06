import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader,SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { addProductFormElements } from "@/config"
import { useState } from "react"
import CommonForm from "@/components/common/form"

const initialFormData = {
  image: null,
  title: '',
  description:'' ,
  category:'',
  brand: '',
  price: '',
  salePrice: '',
  totalStock: ''
}


const AdminProducts = () => {
  const [openCreateProductsDialog,setOpenCreateProductsDialog] = useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const onSubmit =() => {

  }
  return (
    <>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() =>setOpenCreateProductsDialog(true)}> Add New Products</Button>
      </div>
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>

    <Sheet open={openCreateProductsDialog} onOpenChange={() => {
      setOpenCreateProductsDialog(false)
    }}>
      <SheetContent side="right" className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Add New Product</SheetTitle>
          <SheetDescription>Fill the details to create a product.</SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <CommonForm onSubmit={onSubmit} formData={formData} setFormData={setFormData} buttonText='Add'
          formControls={addProductFormElements}
          />
        </div>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default AdminProducts
