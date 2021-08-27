import './Style.css';
import { useState } from 'react';

const CodedCalculator = () => {

const [calc, setCalc] = useState('');
const [result, setResult] = useState('');

const operators = ['/', '+' , '-', '*', '.'];

const updateCalc = value => {
    if  ( 
        operators.includes(value) && operators.includes(calc.slice(-1))
             ){
        return
    }
    setCalc(calc + value)
    if (!operators.includes(value)){
        setResult(eval(calc + value).toString())
    }
}

const showResults = () => {
  setCalc(eval(calc).toString())
}

const calcBtns = [];
[9,8,7,6,5,4,3,2,1,0].forEach(item => {
    calcBtns.push(
        <button className="col notcolored" key={item} value={item}  
        onClick={(e) => updateCalc(item.toString())}> {item} </button>

    )
})

const clear = () => {
setCalc('')
}
 

    return (  
        <main className="container">
            <div className="result"> {calc   || '0'}</div>

         <div className="codedCalculator">
             {calcBtns}
            <button className="col colored" onClick={() => updateCalc('%')}>%</button>
             <button className="col colored" onClick={() => updateCalc('.')}>.</button>
             <button className="col colored" onClick={() => updateCalc('/')}>/</button>
             <button className="col colored" value="+"  onClick={() => updateCalc('+')}>+</button>
             <button className="col colored"  onClick={() => updateCalc('*')}>*</button>
             <button className="col colored" onClick={() => updateCalc('-')}>-</button>
             <button className="col colored equal" onClick={() =>showResults()}>=</button> 
            <button className="col colored clear" onClick={clear}>AC</button>
        </div> 
        </main>

    );
}

 
export default CodedCalculator;