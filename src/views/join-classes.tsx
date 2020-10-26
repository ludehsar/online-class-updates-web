import React from 'react';
import { List, Datagrid, TextField, UrlField, EditButton, Create, Edit, TextInput, SimpleForm, required } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import { MobileGridAsAdmin, MobileGridAsUser } from '../components/join-classes/MobileGrid';


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

export const JoinClassesCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="class_name" label="Class" validate={required()} />
      <TextInput source="zoomid" label="Zoom ID" />
      <TextInput source="zoom_pass" label="Zoom Password" />
      <TextInput source="zoom_link" label="Zoom Link" />
      <TextInput source="gclass_link" label="Google Classroom Link" />
      <TextInput source="gclass_code" label="Google Classroom Code" />
      <TextInput source="gdoc_link" label="Google Doc Link" />
      <TextInput source="groupchat_link" label="Group Chat Link" />
      <TextInput source="gdrive_link" label="Google Drive Link" />
    </SimpleForm>
  </Create>
);

export const JoinClassesEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="class_name" label="Class" validate={required()} />
      <TextInput source="zoomid" label="Zoom ID" />
      <TextInput source="zoom_pass" label="Zoom Password" />
      <TextInput source="zoom_link" label="Zoom Link" />
      <TextInput source="gclass_link" label="Google Classroom Link" />
      <TextInput source="gclass_code" label="Google Classroom Code" />
      <TextInput source="gdoc_link" label="Google Doc Link" />
      <TextInput source="groupchat_link" label="Group Chat Link" />
      <TextInput source="gdrive_link" label="Google Drive Link" />
    </SimpleForm>
  </Edit>
);
