import Calculator from 'awesome-react-calculator';
import './App.css';
import CodedCalculator from './components/CodedCalculator';

function App() {
  return (
    <div className="App">
      
      <div className="react-calculator">
      <h2>Awesome react calculator</h2>
      <Calculator />
      </div>

           <div className="calculator-container">
             <h2>Coded React calculator</h2>
             <CodedCalculator />
           </div>
    </div>
  );
}

export default App;
