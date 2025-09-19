import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

function ShoppingOrderDetailsView() {
  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>121212</Label>
          </div>
          <div className="flex mt-1 items-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label>19.09.2025</Label>
          </div>
          <div className="flex mt-1 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>In Process</Label>
          </div>
          <div className="flex mt-1 items-center justify-between">
            <p>Order Price</p>
            <Label>12300</Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span>Product One</span>
                <span>Rs 12300</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>David Miller</span>
              <span>Address</span>
              <span>City</span>
              <span>Landmark</span>
              <span>Pincode</span>
              <span>Phone</span>
              <span>Notes</span>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default ShoppingOrderDetailsView;
