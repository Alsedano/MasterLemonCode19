import React from 'react';
import { Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import * as classes from '#pods/character-collection/components/character/character.styles';
import { Link as RouterLink } from 'react-router';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { switchRoutes } from '#core/router/routes.js';
import { Episode } from './episode.vm';

interface Props {
  episode: Episode;
  isReadOnly: boolean;
}

export const EpisodeComponent: React.FunctionComponent<Props> = ({
  episode,
  isReadOnly,
}) => (
  <Formik
    initialValues={episode}
    enableReinitialize={true}
    onSubmit={() => undefined}
  >
    {() => (
      <Form className={classes.root}>
        <TextFieldComponent
          name="name"
          label="Name"
          slotProps={{ input: { readOnly: isReadOnly } }}
        />
        <TextFieldComponent
          name="episode"
          label="Episode"
          slotProps={{ input: { readOnly: isReadOnly } }}
        />
        <TextFieldComponent
          name="air_date"
          label="Air date"
          slotProps={{ input: { readOnly: isReadOnly } }}
        />
        {!isReadOnly && (
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        )}
        <p></p>
        <Button
          component={RouterLink}
          to={switchRoutes.episodeCollection}
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
