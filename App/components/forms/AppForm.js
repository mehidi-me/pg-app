import React from 'react';
import {Formik} from 'formik';

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  enableReinitialize,
}) {
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
}
