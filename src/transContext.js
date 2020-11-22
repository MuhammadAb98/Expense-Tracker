import React, { createContext,useReducer } from 'react';

import TransactionReducer from './transReducer';

const initialTransactions=[

    {amount:+100, desc:"Cash"},
    {amount:-80, desc:"Cold Sting"},
    {amount:-200, desc:"Cash deposit"}
]

export const TransactionContext = createContext(initialTransactions);


 export const TransactionProvider=({children})=>{ 
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
   
    function addTransaction(transObj){
            
        dispatch({
        type:"ADD_TRANSACTION",

        payload: {
            amount:transObj.amount,
            desc:transObj.desc
        },
    })
   }
   return (
    <TransactionContext.Provider value={{
        Transactions: state,
        addTransaction
    }}>
      {children}
    </TransactionContext.Provider>

   )
 }