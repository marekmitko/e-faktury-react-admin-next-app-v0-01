import {React} from 'react'
import {List,
        Datagird,
        TextField, 
        DataField,
        EditButton,
        DeleteButton,
    } from 'react-admin'


// bo tu to było przez wyrażenie funkcyjne 
                                            // const PostList = (props) => {

export function PostList(props) {
    return  <List {...props}>
                <Datagird>
                    <TextField source='id' />
                    <TextField source='title'/>
                    <DataField source='publishedAt'/>
                    <EditButton basePath='/posts' />
                    <DeleteButton basePath='/posts' />
                </Datagird>
            </List>
}
