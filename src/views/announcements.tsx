import React from 'react';
import { List, Datagrid, TextField, FunctionField  } from 'react-admin';

export const AnnouncementList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="subject" />
      <FunctionField
        label="Date"
        render={record =>
          record?.date
            ? new Date(
                record.date.seconds * 1000
              ).toLocaleString()
            : 'N/A'
        }
      />
      <TextField source="announcement" />
    </Datagrid>
  </List>
);
