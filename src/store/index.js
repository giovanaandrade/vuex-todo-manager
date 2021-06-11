//entry point to vuex, combine all modules
import { createStore } from "vuex";
import todos from "./modules/todos";

//create store
export default createStore({
  modules: {
    todos,
  },
});
