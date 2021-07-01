import React, { useState } from 'react';
import { Formik } from 'formik';
import { Card } from '@material-ui/core';
import { InputAddress } from './Address';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const Form: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id?: string }>();
  const [initial, setInitial] = useState<InputAddress>({
    id: 0,
    firstname: '',
    lastname: '',
    birthday: '',
    street: '',
    place: '',
    postcode: '',
    country: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setInitial(data);
        });
    }
  }, [id]);

  return (
    <Card>
      <h1>{id ? 'Edit Address' : 'Create Address'}</h1>
      <Formik
        enableReinitialize={true}
        initialValues={initial}
        onSubmit={(values, { setSubmitting }) => {
          let method = 'PUT';
          let url = 'http://localhost:3001/users';
          if (values.id === 0) {
            delete values.id;
            method = 'POST';
          } else {
            url += `/${values.id}`;
          }

          fetch(url, {
            method,
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'Application/json' },
          }).then((response) => {
            if (response.ok) {
              history.push('/list');
            }
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="Firstname"
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />
                {errors.firstname && touched.firstname && errors.firstname}
              </div>
              <div>
                <TextField
                  label="Lastname"
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
                {errors.lastname && touched.lastname && errors.lastname}
              </div>
              <div>
                <TextField
                  label="Birthday"
                  name="birthday"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthday}
                />
                {errors.birthday && touched.birthday && errors.birthday}
              </div>
              <div>
                <TextField
                  label="Street"
                  name="street"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.street}
                />
                {errors.street && touched.street && errors.street}
              </div>
              <div>
                <TextField
                  label="Place"
                  name="place"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.place}
                />
                {errors.place && touched.place && errors.place}
              </div>
              <div>
                <TextField
                  label="Postcode"
                  name="postcode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postcode}
                />
                {errors.postcode && touched.postcode && errors.postcode}
              </div>
              <div>
                <TextField
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                />
                {errors.country && touched.country && errors.country}
              </div>
              <div>
                <TextField
                  label="Phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && touched.phone && errors.phone}
              </div>
              <div>
                <TextField
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
              &nbsp;
              <Button
                type="button"
                disabled={isSubmitting}
                color="secondary"
                variant="contained"
                onClick={() => {
                  history.push('/');
                }}
              >
                cancel
              </Button>
            </form>
          );
        }}
      </Formik>
    </Card>
  );
};

export default Form;
