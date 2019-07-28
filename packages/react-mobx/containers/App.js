import React from "react";
import { observer } from "mobx-react";
import Title from "src/components/Title";
import Form from "src/components/Form";
import store from "src/stores/Title";

// mashup the components
const App = observer(() => [<Title />, <Form />]);

export default App;
