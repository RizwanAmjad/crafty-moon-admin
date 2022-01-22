import React from "react";

import * as Yup from "yup";

import FormComponent from "./forms/FormComponent";
import FormInputComponent from "./forms/FormInputComponent";
import FormMultipleImageSelector from "./forms/FormMultipleImageSelector";
import FormSelectMenuComponent from "./forms/FormSelectMenuComponent";
import FormSubmitComponent from "./forms/FormSubmitComponent";

import "./styles/painting.css";

const paintingSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  caption: Yup.string().required().label("Caption"),
  category: Yup.string().required().label("Category"),
  images: Yup.array().min(1).required().label("Images"),
  price: Yup.number().required().min(0).label("Price"),
});

const categories = [
  {
    _id: "619e0bee49347afdf8505543",
    title: "Canvas",
    paintingsCount: 0,
  },
  {
    _id: "619e0bf749347afdf8505545",
    title: "Oil Paintings",
    paintingsCount: 0,
  },
];

function AddPaintingComponent(props) {
  return (
    <div className="form-center form-50-percent">
      <FormComponent
        initialValues={{
          title: "",
          caption: "",
          category: "",
          price: "",
          images: [],
        }}
        validationSchema={paintingSchema}
      >
        <FormInputComponent name="title" placeholder="Title" />
        <FormInputComponent name="caption" placeholder="Caption" />
        <FormSelectMenuComponent
          name="category"
          options={categories}
          valueKey="_id"
          value="title"
        />
        <FormMultipleImageSelector name="images" />
        <FormInputComponent name="price" placeholder="Price" />
        <FormSubmitComponent value="Add Painting" />
      </FormComponent>
    </div>
  );
}

export default AddPaintingComponent;
