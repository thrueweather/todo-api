import React from "react";
import List from "./pages/List";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
