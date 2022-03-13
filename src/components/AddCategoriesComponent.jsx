import React, { useState } from "react";

import * as Yup from "yup";

import FormComponent from "./forms/FormComponent";
import FormInputComponent from "./forms/FormInputComponent";
import FormSubmitComponent from "./forms/FormSubmitComponent";

import useApi from "../hooks/useApi";
import categoriesApi from "../api/categories";

const categoriesSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
});

function AddCategoriesComponent({ addCategoryToList }) {
  const [error, setError] = useState();
  const { request: addCategoryRequest } = useApi(categoriesApi.addCategory);

  const onSubmit = async (category, { setSubmitting }) => {
    setSubmitting(true);
    const { error, data } = await addCategoryRequest(category);
    if (!error) addCategoryToList(data);
    else setError(data);
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
      <FormSubmitComponent value="Add Category" error={error} />
    </FormComponent>
  );
}

export default AddCategoriesComponent;
