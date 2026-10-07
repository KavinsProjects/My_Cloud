import React from "react";
import { CldImage } from "next-cloudinary";

const Imagecard = () => {
  return (
    <article className="card">
      <div className="title-container">
        <h4>
          <span className="emoji">✍️</span>
          {""}
        </h4>
        <h4>⋮</h4>
      </div>
      <CldImage />

      <div className="controls-container">
        <div className="control-container">
          <input type="checkbox" id="background" name="background" />
          <label htmlFor="background">no background</label>
        </div>

        <div className="control-container">
          <input type="checkbox" id="greyscale" name="greyscale" />
          <label htmlFor="greyscale">no background</label>
        </div>

        <button>⬇️ Download</button>
      </div>
      <input value={""} placeholder="Start typeing to change image" />
    </article>
  );
};

export default Imagecard;
