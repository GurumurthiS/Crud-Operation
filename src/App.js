import React from 'react';
import Addstudent from './components/Addstudent';
import Studentlist from './components/Studentlist';
import EditStudent from './components/Editstudent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/Addstudent'} className="nav-link">Addstudent</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Studentlist'} className="nav-link">Student List</Link>
              </li>
            </ul>
          </div>
        </nav> <br />
        <Switch>
          <Route exact path='/Addstudent' component={Addstudent} />
          <Route path='/edit/:id' component={EditStudent} />
          <Route path='/Studentlist' component={Studentlist} />
        </Switch>
       
      </div>
    </Router>


  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <Router>  
//       <div className="container">  
//         <nav className="navbar navbar-expand-lg navheader">  
//           <div className="collapse navbar-collapse" >  
//             <ul className="navbar-nav mr-auto">  
//               <li className="nav-item">  
//                 <Link to={'/Addstudent'} className="nav-link">Addstudent</Link>  
//               </li>  
//               <li className="nav-item">  
//                 <Link to={'/Studentlist'} className="nav-link">Student List</Link>  
//               </li>  
//             </ul>  
//           </div>  
//         </nav> <br />  
//         <Switch>  
//           <Route exact path='/Addstudent' component={Addstudent} />  
//           <Route path='/edit/:id' component={EditStudent} />  
//           <Route path='/Studentlist' component={Studentlist} />  
//         </Switch>  
//       </div>  
//     </Router>  
//   );
// }

// export default App;
