import React from "react";

import { Formik } from "formik";

import "./css/form.css";

function FormComponent({
  children,
  onSubmit,
  initialErrors,
  initialValues,
  validationSchema,
}) {
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        initialErrors={initialErrors}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => <React.Fragment>{children}</React.Fragment>}
      </Formik>
    </div>
  );
}

export default FormComponent;
