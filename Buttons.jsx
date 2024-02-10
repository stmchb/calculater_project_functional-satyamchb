

const Buttons =({onButtonClick})=>{

  let myButtons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.',] 

return (
<div  className="button-container">
{myButtons.map(item=>

<button onClick={()=>onButtonClick(item)} className="button-item">{item}</button>
  )}
</div>
)}

export default Buttons;