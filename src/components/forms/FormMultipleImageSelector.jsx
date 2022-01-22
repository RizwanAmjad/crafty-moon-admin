import React from "react";

import { confirmAlert } from "react-confirm-alert";
import { useFormikContext } from "formik";

import { MdAddAPhoto } from "react-icons/md";

import "react-confirm-alert/src/react-confirm-alert.css";

import "./css/form-image-selector.css";

function FormMultipleImageSelector({ name }) {
  const { values, setValues, errors, touched, setTouched } = useFormikContext();

  const handleChange = ({ target }) => {
    values[name] = [...values[name], ...Array.from(target.files)];
    setValues(values);
  };

  const unselectImage = (image) => {
    confirmAlert({
      title: "Delete Image?",
      message: "This will remove image from selected list",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            values[name] = values[name].filter((img) => img !== image);
            setValues(values);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <React.Fragment>
      {errors[name] && touched[name] && (
        <span className="input-error">{errors[name]}</span>
      )}
      <div className="preview-images">
        <div className="image-select">
          <label htmlFor="select-image">
            <MdAddAPhoto />
          </label>
          <input
            id="select-image"
            className="image-select-btn"
            type="file"
            name={name}
            accept="image/*"
            onBlur={() => {
              touched[name] = true;
              setTouched(touched);
            }}
            onChange={handleChange}
            multiple
          />
        </div>
        {values[name] &&
          values[name].map((image) => {
            const src = URL.createObjectURL(image);
            return (
              <img
                className="preview-image"
                src={src}
                key={src}
                onClick={() => unselectImage(image)}
                alt=""
              />
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default FormMultipleImageSelector;
