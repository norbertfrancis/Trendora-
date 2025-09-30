import ProductImageUpload from "@/components/admin-view/image-upload";
import { useState } from "react"

const AdminDashboard = () => {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false)
  return (
    <div>
      <h1>Upload Feature Images</h1>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        imageLoadingState={imageLoadingState}
        setImageLoadingState={setImageLoadingState}
        // isEditMode={currentEditedId !== null} 
      />

    </div>
  )
}

export default AdminDashboard
