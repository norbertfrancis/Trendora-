import CommonForm from "@/components/common/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addressFormControls } from "@/config";
import { useState } from "react";

function Address() {
  const handleManageAddress = (e) => {
    e.preventDefault();
  };
  const isFormValid = () => {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  };

  const initialAddressFormData = {
    address: "",
    city: "",
    landmark: "",
    phone: "",
    pincode: "",
    notes: "",
  };

  const [formData, setFormData] = useState(initialAddressFormData);
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
