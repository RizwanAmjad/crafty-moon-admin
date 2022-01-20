import React from "react";

import * as Yup from "yup";

import FormComponent from "./forms/FormComponent";
import FormInputComponent from "./forms/FormInputComponent";
import FormSubmitComponent from "./forms/FormSubmitComponent";

const categoriesSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
});

function AddCategoriesComponent(props) {
  const onSubmit = (formData, { setSubmitting }) => {
    // TODO Handle Submission here
    console.log(formData);
    setSubmitting(false);
  };

  return (
    <FormComponent
      onSubmit={onSubmit}
      initialValues={{ title: "" }}
      initialErrors={{}}
      validationSchema={categoriesSchema}
    >
      <h3>Categories</h3>
      <FormInputComponent
        type="text"
        name="title"
        placeholder="Category Title"
      />
      <FormSubmitComponent value="Add Category" />
    </FormComponent>
  );
}

export default AddCategoriesComponent;
