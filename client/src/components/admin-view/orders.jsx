import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import AdminOrdersDetailsView from "./orders-details";
import { useDispatch, useSelector } from "react-redux";
import { getALlOrdersForAdmin, getOrderDetailsForAdmin, resetOrderDetails } from "@/store/admin/order-slice/order-slice";
import { Badge } from "../ui/badge";

function AdminOrdersView() {
   const [openDetailsDialog, setOpenDetailsDialog] = useState(false)
 const { orderList, orderDetails } = useSelector((state) => state.adminOrder)

  const dispatch = useDispatch()

  const handleFetchOrderDetails = (getId) => {
    dispatch(getOrderDetailsForAdmin(getId))
  }

  useEffect(() => {
    dispatch(getALlOrdersForAdmin())
  },[dispatch])

  useEffect(()=> {
    if(orderDetails !== null) setOpenDetailsDialog(true)
  },[orderDetails])
   
 
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order Id</TableHead>
              <TableHead>Order Data</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Order Price</TableHead>
              <TableHead>
                <span className="sr-only">Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>
           <TableBody>
            {
              orderList && orderList.length > 0 ?
              orderList.map((orderItem)=> 
              <TableRow>
              <TableCell>{orderItem?._id}</TableCell>
              <TableCell>{orderItem?.orderDate ? orderItem.orderDate.split('T')[0] : '-'}</TableCell>

              <TableCell><Badge className={`py-1 px-3 ${orderItem?.orderStatus === 'confirmed' ? 'bg-green-500' : 'bg-black'}`}>{orderItem?.orderStatus}</Badge>
                </TableCell>
              <TableCell>{orderItem?.totalAmount}</TableCell>
              <TableCell>
                <Dialog
                  open={openDetailsDialog}
                  onOpenChange={()=> {
                    setOpenDetailsDialog(false)
                    dispatch(resetOrderDetails())
                  }}
                >
                  <Button onClick={()=>handleFetchOrderDetails(orderItem?._id)}>
                    View Details
                  </Button>
                  <AdminOrdersDetailsView orderDetails={orderDetails} />
                </Dialog>
              </TableCell>
            </TableRow>) : null
            }
            
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default AdminOrdersView;
