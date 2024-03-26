import React from 'react'
import { List, Datagrid, TextField, DeleteButton} from 'react-admin';

export const PostList = () => {
  return <List>
        <Datagrid>
            <TextField source='id' />
            <TextField source='Firstname' />
            <TextField source='Lastname' />
            <TextField source="email" />
            <TextField source="services"/>
            <DeleteButton basePath="/posts" />
        </Datagrid>
    </List>
};
