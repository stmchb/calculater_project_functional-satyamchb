import Display from "./components/Display";
import Buttons from './components/Buttons'
import { useState } from "react"

function App() {

  const[getValue, setgetValue]=useState('')

 const onButtonClick=(item)=>{
  
    if (item === "C"){
      setgetValue("")
    }else if(item === "="){
     const result = eval(getValue)
     setgetValue(result)
    }else{
      const displayValue = getValue+item;
      setgetValue(displayValue)
    }
  };

  return (<center>
    <div className="calculater">

      <Display finalValue={getValue}/>
      <Buttons onButtonClick={onButtonClick} />

    </div>
  </center>
  )

}

export default App;