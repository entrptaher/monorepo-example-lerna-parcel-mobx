import autobind from "react-autobind";
import { observable, action } from "mobx";

// prepare our store (to store the data)
class Store {
  constructor() {
    // no more arrow functions everywhere
    autobind(this);
  }

  // look out for title to be updated
  @observable title = "Hello Mobx";

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }
}

// create store
const store = new Store();

export default store;