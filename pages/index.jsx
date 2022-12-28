import { createContext, useState } from "react";
import Navi from "./components/Buisness/Nav";

const ongl = createContext();

const App = () => {
  const [state, setState] = useState([]);
  return (
    <ongl.Provider value={{ state, setState }}> 
      <div className="font-bold text-2xl m-2"> Todo List </div>
        <Navi />
    </ongl.Provider>
  );
};

export default App;
export { ongl };
