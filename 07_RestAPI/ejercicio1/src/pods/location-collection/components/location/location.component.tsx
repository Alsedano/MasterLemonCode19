import React from 'react';
import { Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { Location } from './location.vm';
import * as classes from '#pods/character-collection/components/character/character.styles';
import { Link as RouterLink } from 'react-router';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { switchRoutes } from '#core/router/routes.js';

interface Props {
  Location: Location;
  isReadOnly: boolean;
}

export const LocationComponent: React.FunctionComponent<Props> = (props) => {
  const { Location, isReadOnly } = props;

  return (
    <Formik
      initialValues={Location}
      enableReinitialize={true}
      onSubmit={() => undefined}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="name"
            label="Name"
            slotProps={{
              input: {
                readOnly: isReadOnly,
              },
            }}
          />
          <TextFieldComponent
            name="type"
            label="Type"
            slotProps={{
              input: {
                readOnly: isReadOnly,
              },
            }}
          />
          <TextFieldComponent
            name="dimension"
            label="Dimension"
            slotProps={{
              input: {
                readOnly: isReadOnly,
              },
            }}
          />
          {!isReadOnly && (
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          )}
          <p></p>
          <Button
            component={RouterLink}
            to={switchRoutes.locationCollection}
            variant="contained"
            color="primary"
            startIcon={<ReplyOutlinedIcon />}
          >
            Back to list page
          </Button>
        </Form>
      )}
    </Formik>
  );
};
