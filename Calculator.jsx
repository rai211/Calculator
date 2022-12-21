import style from "./calculator.module.css"
import { useState } from "react"


const Calculator=()=>{
    let [num1,setNum1]=useState("")
    let [num2,setNum2]=useState(" ")
    let [result,setResult]=useState(" ")

    let add=()=>{
        setResult(parseInt(num1)+parseInt(num2))
    }
    let sub=()=>{
        setResult(parseInt(num1)-parseInt(num2))
    }
    let multi=()=>{
        setResult(parseInt(num1)*parseInt(num2))
    }
    let div=()=>{
        setResult(parseInt(num1)/parseInt(num2))
    }
    let reset=()=>{
           setNum1('');
           setNum2('');
           setResult('');
       
    }
    
    let refresh=(e)=>{
        e.preventDefault()
    }
    return(
                <div id={style.box}>
             <form className={style.calculate} onSubmit={refresh} autoComplete="off">
                <div className={style.main}>
                <h1 >Calculator</h1>
                 <label>Enter First Number</label><br></br>
                <input type="number" value={num1}  onChange={(e)=>{setNum1(e.target.value)}}/> <br />
                 <label>Enter Second Number</label> <br></br>
                <input type="number" value={num2} onChange={(f)=>{setNum2(f.target.value)}} /> <br />
                <br />
                </div>
                
           
                <div className={style.btn}>
                <button  onClick={add}>+</button>
                <button  onClick={sub}>-</button>
                <button  onClick={multi}>*</button>
                <button  onClick={div}>/</button>
                <h2>  Result is:{result} </h2>
                <button onClick={reset}>Reset</button>
                </div>
              </form>
              </div>
          
     
    )
}
export default Calculator