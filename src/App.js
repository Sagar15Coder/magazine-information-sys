import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login';
import { HashRouter, Routes, Route } from "react-router-dom"
import AdminDashboard from './components/AdminDashboard';
//import ProtectedLogin from './components/ProtectedLogin';
import StoryList from './components/StoryList';
import AddStory from './components/AddStory';
import Homepage from './components/Homepage';
import EditStory from './components/EditStory';
import AddPhotograph from './components/AddPhotograph';
import AddAdvert from './components/AddAdvert';
import AdvertList from './components/AdvertList';

function App() {
  return (
    <div>
      
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route 
            exact path="/admin-dashboard" 
            element={<AdminDashboard/>} />

          <Route exact path="/addstory" element={<AddStory />} />
          <Route exact path="/stories" element={<StoryList />} />
          <Route exact path="/story/:id" element={<EditStory />} />
          <Route exact path="/addphotograph" element={<AddPhotograph />} />
          <Route exact path="/addadvert" element={<AddAdvert />} />
          <Route exact path="/adverts" element={<AdvertList />} />
        </Routes>
      </HashRouter> 
    </div>
  );
}

export default App;
