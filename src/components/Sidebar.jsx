import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const Sidebar = ({ onHandleNewUpload }) => {
  return (
    <article className="sied-bar">
      <CldUploadWidget
        uploadPreset="my_cloud"
        onSuccess={(result) => {
          console.log(result);
          onHandleNewUpload(result.info);
        }}
        onQueuesEnd={(result, { widget }) => {
          widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            open();
          }

          return (
            <button onClick={handleOnClick} className="new-button">
              + new
            </button>
          );
        }}
      </CldUploadWidget>

      <ul>
        {" "}
        <li>Home</li>
        <li>Activity</li>
        <li>workspace</li>
        <br />
        <li>My Drive</li>
        <li>Shared Drives</li>
        <br />
        <li>Shared with me</li>
        <li>Recent</li>
        <li>Started</li>
        <li>Spam</li>
        <br></br>
        <li>Trash</li>
        <li>Stroage</li>
      </ul>
    </article>
  );
};

export default Sidebar;
