import { CldUploadWidget } from "next-cloudinary";

const SideBar = ({ onHandleNewUpload }) => {
  return (
    <article className="side-bar">
      <CldUploadWidget
        uploadPreset="demo_tutorial"
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
              + New
            </button>
          );
        }}
      </CldUploadWidget>

      <ul>
        <li>Home</li>
      </ul>
    </article>
  );
};
export default SideBar;
