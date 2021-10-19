import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './hooks/redux';
import {fetchUsers} from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

function App() {
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    // const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(fetchUsers());
    // },[]);

    return (
    <div className="App">
        {/*{isLoading && <h1>Loading...</h1>}*/}
        {/*{error && <h1>{error}</h1>}*/}
        {/*{JSON.stringify(users, null, 2)}*/}
        <PostContainer/>
        <hr/>
        <PostContainer2/>
    </div>
  );
}

export default App;
