import React from "react";
import { Formik } from "formik";

function AppForm({ initialValue, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
