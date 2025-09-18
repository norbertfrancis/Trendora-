import CommonForm from "@/components/common/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addressFormControls } from "@/config";
import { addNewAddress, fetchAllAddresses } from "@/store/shop/address-slice/address-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

  const initialAddressFormData = {
    address: "",
    city: "",
    landmark: "",
    phone: "",
    pincode: "",
    notes: "",
  };

function Address() {
  const [formData, setFormData] = useState(initialAddressFormData);
  const {user} = useSelector((state) => state.auth);
  const {addressList} = useSelector((state) => state.shopAddress);

  const dispatch = useDispatch();

  const handleManageAddress = (e) => {
    e.preventDefault();
    dispatch(addNewAddress({
        ...formData,
        userId : user?.id 
    })).then(data=> {
        console.log(data);
        if(data?.payload?.success) {
            dispatch(fetchAllAddresses(user?.id))
            setFormData(initialAddressFormData)
        }
    });
  };

  const isFormValid = () => {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  };

  useEffect(()=> {
    dispatch(fetchAllAddresses(user?.id))
  },[dispatch])
 


 
  return (
    <Card>
      <div>Address Lists</div>
      <CardHeader>
        <CardHeader> Add New Address</CardHeader>
      </CardHeader>
      <CardContent className="space-y-3">
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={"Add"}
          onSubmit={handleManageAddress}
          isBtnDisabled={!isFormValid()}
        />
      </CardContent>
    </Card>
  );
}

export default Address;
