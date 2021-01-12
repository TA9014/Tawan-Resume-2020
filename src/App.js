import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileVideo from './components/ProfileVideo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <ProfileVideo />
      <Education />
      <WorkExperience />
      <Skills />
      <Switch>
      <Route path='/' exact />
      </Switch>
    </Router>

    </>
  );
}

export default App;
