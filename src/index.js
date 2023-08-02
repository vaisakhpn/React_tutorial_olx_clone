import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Store/FirbaseContext';
import firebase from './firbase/config';

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
<App />
 </FirebaseContext.Provider>
 , document.getElementById('root'));
