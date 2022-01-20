import React from "react";
import { useFormikContext } from "formik";

import "./css/form-input.css";

function FormSubmitComponent({ name, ...props }) {
  const { values, handleSubmit, isSubmitting } = useFormikContext();

  return (
    <input
      className="form-input"
      type="submit"
      onClick={handleSubmit}
      value={values[name]}
      disabled={isSubmitting}
      {...props}
    />
  );
}

export default FormSubmitComponent;
