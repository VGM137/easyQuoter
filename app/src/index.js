import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App.js';

const initialState = {
  orderSummary: {
    admin: '',
    projectName: '',
    clientName: '',
    description: '',
    totalClothes: '',
    totalColors: '',
    digitalWork: '',
    logistics: '',
    extraClothes: [
      {
        groupName:'',
        groupValue:'',
      }
    ],
    clientCode: '',
    clothingCode: '',
    dueDateCode: ''
  },
  serigraphyOrder: {
    clothes: [{
      type: '',
      cut: '',
      color: '',
      size: '',
      material: '',
      brand: '',
      quantity: '',
      unitPrice: '',
      /* totalPrice: '',
      logistics: '',
      testInputs: '',
      inkInput: '',
      prePostProdInputs: '',
      prodLabour: '',
      prePosProdLabour: '',
      prodTotalCost: '',
      prodUnitCost: '',
      profit: '', */
    }],
    productionInputs: [{
      ink: '',
      quarterKgPrice: '',
      oneKgPrice: '',
      quantityToBuy: '',
      quantityToBuy: '',
    }],
    prePosProdInputs: {
      frameWear: 5,
      photolith: 30,
      emulsion: 5,
      degreaser: 5,
      emulsionRemover: 5,
      ghostRemover: 5,
    },
    prePosProdLabour: {
      minimumWage: 207,
      meshRecovery: 30,
      graphicProcessing: 30,
      register: 30,
      cleaning: 20,
      other: 10,
    },
    prodLabour: {
      printing: 1,
      preDrying: 1,
      ironing: 1,
      package: 2
    }
  },

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, composeEnhancers)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app"))
