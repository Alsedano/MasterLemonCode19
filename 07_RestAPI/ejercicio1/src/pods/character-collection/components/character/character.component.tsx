import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from '#common/components';
import { Lookup } from '#common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { switchRoutes } from '#core/router/routes.js';

interface Props {
  Character: Character;
  isReadOnly: boolean;
  onSave: (Character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { Character, isReadOnly, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={Character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          {isReadOnly && (
            <CardMedia
              component="img"
              height="340"
              src={Character.image || ''}
              sx={{
                objectFit: 'contain',
              }}
            />
          )}
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
            name="status"
            label="Status"
            slotProps={{
              input: {
                readOnly: isReadOnly,
              },
            }}
          />
          <TextFieldComponent
            name="species"
            label="Species"
            slotProps={{
              input: {
                readOnly: isReadOnly,
              },
            }}
          />
          <TextFieldComponent
            name="gender"
            label="Gender"
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
            to={switchRoutes.characterCollection}
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
