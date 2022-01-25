import React from "react";

import { confirmAlert } from "react-confirm-alert";
import { useFormikContext } from "formik";

import { MdAddAPhoto } from "react-icons/md";

import "react-confirm-alert/src/react-confirm-alert.css";

import "./css/form-image-selector.css";
import "./css/alert-dialog.css";

function FormMultipleImageSelector({ name }) {
  const { values, setValues, errors, touched, setTouched } = useFormikContext();

  const handleChange = ({ target }) => {
    values[name] = [...values[name], ...Array.from(target.files)];
    setValues(values);
  };

  const unselectImage = (image) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="alert-dialog">
            <h2>Are you sure?</h2>
            <p>You want to delete this Image?</p>
            <div className="alert-btn-group">
              <button className="alert-btn" onClick={onClose}>
                No
              </button>
              <button
                className="alert-btn"
                onClick={() => {
                  values[name] = values[name].filter((img) => img !== image);
                  setValues(values);
                  onClose();
                }}
              >
                Yes, Delete it!
              </button>
            </div>
          </div>
        );
      },
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
