import React,{useState} from "react"

const Calculator=()=>{

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

    function Addition(){
       if(num1 === "" || num2 === ""){
        setIsError(true);
        setMessage("Num1 and Num2 cannot be empty");
        console.log("E")
       }
       else{
        const sum= parseFloat(num1) + parseFloat(num2)
        setMessage("Success!");
        setResult(sum);   
        setIsError(false);
        console.log(sum);    
       }
     }
    function Subtraction(){
        if(num1 === "" || num2 === ""){
            setIsError(true);
            setMessage("Num1 and Num2 cannot be empty");
            console.log("E")
           }
           else{
            const diff= parseFloat(num1) - parseFloat(num2)
            setMessage("Success!");
            setResult(diff);   
            setIsError(false);
            console.log(diff);    
           }

    }
    function Multiply(){
        if(num1 === "" || num2 === ""){
            setIsError(true);
            setMessage("Num1 and Num2 cannot be empty");
            console.log("E")
           }
           else{
            const multi= parseFloat(num1) * parseFloat(num2)
            setMessage("Success!");
            setResult(multi);   
            setIsError(false);
            console.log(multi);    
           }
    }
    function Division(){
        if(num1 === "" || num2 === ""){
            setIsError(true);
            setMessage("Num1 and Num2 cannot be empty");
            console.log("E")
           }
           else{
            const div= parseFloat(num1) / parseFloat(num2)
            setMessage("Success!");
            setResult(div);   
            setIsError(false);
            console.log(div);    
           }
    }

    return (<div className="container">
            <div className="box">
            <h1>React Calculator</h1>
                <div className="input">
                    <input type="text" placeholder="Num 1" value={num1} onChange={(e)=> setNum1(e.target.value)}></input> 
                 </div>
                
                <div className="input">
                    <input type="text" placeholder="Num2" value={num2} onChange={(e)=> setNum2(e.target.value)}></input>
                </div>
            
                <div className="btn">
                   <button onClick={Addition}>+</button>
                    <button onClick={Subtraction}>-</button>
                    <button onClick={Multiply}>*</button>
                    <button onClick={Division}>/</button>
                </div>
                <div className="result">
                        {
                          isError ? (<p className="error">{"Error!"}</p>)  : (<p className="success">{message}</p>)  
                        }
                            <p> Result :{isError ? message : result}</p>
                    </div>  
                </div>
            </div>);
};

export default Calculator;