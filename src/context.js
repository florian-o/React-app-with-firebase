import React,{createContext,useState , useEffect} from 'react';

//! Firebase import de ma  config
import firebase from './config';

export const Context = createContext();

export function ContextController({ children }) {    

//! State Initial nada
    const [state, setState] = useState([]);
  
    //! Recuperation de mes donné
    useEffect(() => {
      
       const db = firebase.firestore().collection('/products');
       db.onSnapshot((snapshot) => {    

          //Get Datta        
          
           const newUser = snapshot.docs.map((doc)=>({
             products: doc.data()  
         }));      
           setState(newUser)  
        });
        return state
       },[]);
  
    return (
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
  }