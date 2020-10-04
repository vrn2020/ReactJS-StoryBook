import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider, useSelector} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase'
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app'
import Loading from './components/layout/Loading'


const store = createStore(
  rootReducer, 
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(fbConfig)
    )
  );

  const profileSpecificProps = {
    userProfile: 'users',
    useFirestoreForProfile: true 
  }
  
  
  const rrfProps = {
    firebase,
    config: profileSpecificProps,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <Loading />;
    return children;
  }


ReactDOM.render(
  <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
       <AuthIsLoaded>
        <App />
       </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
