import * as React from "react";
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/posts/PostList';

// import simpleRestProvider from 'ra-data-simple-rest';

// import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

function App() {
return (<>
        <Admin dataProvider={restProvider('http://localhost:3000/')}>
            <Resource name='posts' list={PostList} />
        </Admin>
    </>
)
};


export default App