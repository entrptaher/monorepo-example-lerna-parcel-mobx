import React from "react";
import { observer } from "mobx-react";
import store from "src/stores/Title";

// observe the form for change
const Form = observer(props => {
  return (
    <div>
      <input 
        value={store.title} 
        onChange={store.updateTitle} 
      />
    </div>
  );
});

export default Form;