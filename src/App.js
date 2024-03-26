import './App.css';
import React from 'react';
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-simple-rest';
import {PostList} from '../src/components/PostList';

const App = () => 
(<Admin dataProvider={jsonServerProvider(fetch('http://localhost:3000/'))}>
  <Resource name='posts' list={PostList} />
</Admin>
);

export default App;

