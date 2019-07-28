import React from "react";
import { observer } from "mobx-react";
import Title from "components/Title";
import Form from "components/Form";

// mashup the components
const App = observer(() => [<Title />, <Form />]);

export default App;
