import './App.css';
import {Switch,Route} from 'react-router-dom';
import Application from './Components/application';
import Viewusers from './Components/viewusers';

function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path="/" component={Application}/>
      <Route exact path="/viewusers" component={Viewusers}/>
     </Switch>
    </div>
  );
}

export default App;
