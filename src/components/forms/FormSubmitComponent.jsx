import React from "react";
import { useFormikContext } from "formik";

import "./css/form-input.css";

function FormSubmitComponent({ name, error, value, ...props }) {
  const { values, handleSubmit, isSubmitting } = useFormikContext();

  return (
    <input
      className={`form-input ${error ? "form-error" : ""}`}
      type="submit"
      onClick={handleSubmit}
      value={error || value}
      disabled={isSubmitting}
      {...props}
    />
  );
}

export default FormSubmitComponent;
