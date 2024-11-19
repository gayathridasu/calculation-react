import { useState } from "react";

function Cal() {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [res,setres]=useState("")

  const inp1 = (event) => {
    seta(Number(event.target.value)); 
  };

  const inp2 = (event) => {
    setb(Number(event.target.value)); 
  };

  const add = () => {
    const c = a + b; 
 
  setres(c)
  };

  const sub=()=>{
    const c = a-b;
    setres(c)
  }

  const mul=()=>{
    const c = a*b;
    setres(c)
  }


  const div=()=>{
    const c = a/b;
    setres(c)
  }
  return (
    <>
      <input type="text" onChange={inp1}  />
      <input type="text" onChange={inp2}  />
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={div}>/</button>
      <h1>{res}</h1>
    </>
  );
}

export default Cal;
