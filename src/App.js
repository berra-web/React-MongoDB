import './App.css';
import Home from './pages/Items';
import ManageItem from './pages/admin/ManageItems';
import Nav from './components/Nav';
import Item from './pages/Item';
import UpdateItem from './pages/admin/UpdateItem';
import CreateItem from './pages/admin/CreateItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/manage-post' component={ManageItem}/>
          <Route path='/update-post/:id' component={UpdateItem}/>
          <Route path='/item-page/:id' component={Item}/>
          <Route path='/create-post' component={CreateItem} />
        </Switch>
      </Router>
    </div>
  );
}

// ATT GÖRA
//
// Göra CSS modules istället för allt i App.css

export default App;
