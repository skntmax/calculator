import logo from './logo.svg';
import './App.css';
import ToggleButton from 'react-toggle-button'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="div2">
        <h1 style={{marginLeft:"5px"}}> ROl Calculator</h1>
        <div className="toggle ">
        <ToggleButton></ToggleButton>
        <div>USD</div>
          </div>
          <input type="text" className="inputbox"/>
          <div >
          <button className="button1">$1000</button>
          <button className="button1">$100</button>
          <div className='div1'>~Cake0.000</div>
          <h1 className="fz ml">Timeframe</h1>
          <button className="button2">1Day</button>
          <button className="button1">7Days</button>
          <button className="button1">30Days</button>
          <button className="button1">1Year</button>
          <button className="button1">5Year</button>
          <h1 className="fz ml">Enable Accelerated APY</h1>
          <div className="toggle ">
        <ToggleButton></ToggleButton>
          </div>
          <div className="ml">Select Tier</div>
          <button className="button2">Tier 1</button>
          <button className="button1">Tier 2</button>
          <button className="button1">Tier 3</button>
          <button className="button1">Tier 4</button>
          <button className="button1">Tier 5</button>
          <div className="ml3">ROI at Current Rates</div>
          <input type="text" className="inputbox"/>
          <div className='ml4'>~0.000 CAKE + 0.000000 DON</div>
          <h1 className="fz ml1">Hide Details ^</h1>
          <h1 className="fz ml">APY</h1>
          <div className="toggle">9.0%</div>
          {/* <p>. Calculated based on current rates </p>
          <p>. All figures are estimates provided for your convenience only.</p>
           <p>  and by no means repesent guaranteed returns </p> */}
          <ul>
            <li> Calculated based on current rates</li>
            <li> All figures are estimates provided for your convenience only . and by no means repesent guaranteed returns</li>

          </ul>

          </div>
          </div>
          </div>
      </div>
  );
}

export default App;
