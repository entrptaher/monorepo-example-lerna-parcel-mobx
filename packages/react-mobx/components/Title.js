import React from "react";
import { observer } from "mobx-react";
import store from "src/stores/Title";

// observe the title for change (if needed)
const Title = observer(props => {
  return <div>{store.title}</div>;
});

export default Title;