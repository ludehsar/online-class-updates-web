import React from 'react';
import { List, Datagrid, TextField, UrlField, EditButton, Create, Edit, TextInput, SimpleForm, required } from 'react-admin';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { MobileGridAsAdmin, MobileGridAsUser } from '../components/join-classes/MobileGrid';
import { Styles } from '@material-ui/core/styles/withStyles';

const styles: Styles<Theme, any> = {
  gridContainer: { width: "100% !important" },
  form_control: { width: "100%" }
};

const useStyles = makeStyles(styles);

export const JoinClassesListAsUser = (props: any) => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <List {...props} bulkActionButtons={false}>
      {isSmall ? (
        <MobileGridAsUser />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="class_name" label="Class" />
          <TextField source="zoomid" label="Zoom ID" />
          <TextField source="zoom_pass" label="Zoom Password" />
          <UrlField source="zoom_link" label="Zoom Link" />
          <TextField source="gclass_code" label="Google Classroom Code" />
        </Datagrid>
      )}
    </List>
  );
};

export const JoinClassesListAsAdmin = (props: any) => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <List {...props}>
      {isSmall ? (
        <MobileGridAsAdmin />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="class_name" label="Class" />
          <TextField source="zoomid" label="Zoom ID" />
          <TextField source="zoom_pass" label="Zoom Password" />
          <UrlField source="zoom_link" label="Zoom Link" />
          <TextField source="gclass_code" label="Google Classroom Code" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

export const JoinClassesCreate = (props: any) => {
  const classes = useStyles();

  return (
  <Create {...props}>
    <SimpleForm>
      <Typography variant="h6" gutterBottom>
        Class Information
      </Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item sm={12}>
          <TextInput source="class_name" label="Class" validate={required()} className={classes.form_control} />
        </Grid>
        <Grid item sm={6}>
          <TextInput source="zoomid" label="Zoom ID" className={classes.form_control} />
        </Grid>
        <Grid item sm={6}>
          <TextInput source="zoom_pass" label="Zoom Password" className={classes.form_control} />
        </Grid>
        <Grid item sm={12}>
          <TextInput source="zoom_link" label="Zoom Link" className={classes.form_control} />
        </Grid>
        <Grid item sm={9}>
          <TextInput source="gclass_link" label="Google Classroom Link" className={classes.form_control} />
        </Grid>
        <Grid item sm={3}>
          <TextInput source="gclass_code" label="Google Classroom Code" className={classes.form_control} />
        </Grid>
        <Grid item sm={12}>
          <TextInput source="gdoc_link" label="Google Doc Link" className={classes.form_control} />
        </Grid>
        <Grid item sm={12}>
          <TextInput source="groupchat_link" label="Group Chat Link" className={classes.form_control} />
        </Grid>
        <Grid item sm={12}>
          <TextInput source="gdrive_link" label="Google Drive Link" className={classes.form_control} />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
)};

export const JoinClassesEdit = (props: any) => {
  const classes = useStyles();
  
  return (
  <Edit {...props}>
    <SimpleForm>
    <Typography variant="h6" gutterBottom>
        Class Information
      </Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item sm={12}>
          <TextInput source="class_name" label="Class" validate={required()} className={classes.form_control} />
        </Grid>
        <Grid item sm={6}>
          <TextInput source="zoomid" label="Zoom ID" className={classes.form_control} />
        </Grid>
        <Grid item sm={6}>
          <TextInput source="zoom_pass" label="Zoom Password" className={classes.form_control} />
        </Grid>
        <Grid item sm={12}>
          <TextInput source="zoom_link" label="Zoom Link" className={classes.form_control} />
        </Grid>
        <Grid item sm={9}>
          <TextInput source="gclass_link" label="Google Classroom Link" className={classes.form_control} />
        </Grid>
        <Grid item sm={3}>
          <TextInput source="gclass_code" label="Google Classroom Code" className={classes.form_control} />
        </Grid>
        <Grid item sm={12}>
          <TextInput source="gdoc_link" label="Google Doc Link" className={classes.form_control} />
        </Grid>
        <Grid item sm={12}>
          <TextInput source="groupchat_link" label="Group Chat Link" className={classes.form_control} />
        </Grid>
        <Grid item sm={12}>
          <TextInput source="gdrive_link" label="Google Drive Link" className={classes.form_control} />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
)};
