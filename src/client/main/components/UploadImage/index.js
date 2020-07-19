import React, { useState } from "react";
import axios from "axios";

export default function UploadExample() {
  const [files, setFiles] = useState();

  const handleFileChange = (event) => {
    if (event.target.files.length === 0 || event.target.files == undefined)
      return;
    setFiles(event.target.files);
  };
  const sendFiles = async () => {
    let formData = new FormData();
    formData.append("file", files[0]);
    const { data } = await axios.post("/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (data.success) {
      setFiles();
    }
  };

  if (files) {
    sendFiles();
  }
  return (
    <>
      <label htmlFor="file">
        <i className="fas fa-camera" />
        <input
          type="file"
          accept="image/*"
          name="photo"
          id="file"
          hidden
          onChange={handleFileChange}
        />
      </label>
    </>
  );
}
