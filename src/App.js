
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Places from './Component/Places/Places';
import Login from './Component/Login/Login';
import AuthProvider from './Component/AuthContex/AuthProvider';
import Travelinfo from './Component/Travelinfo/Travelinfo';
import PrivateRoute from './Component/PrivateRouter/PrivateRoute';
import BookingInfo from './Component/BookingInfo/BookingInfo';
import AllBookingInfo from './Component/AllBookingInfo/AllBookingInfo';
import AddPlaces from './Component/AddPlaces/AddPlaces';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/Notfound/NotFound';
import ManagePlaces from './Component/MangePlaces/ManagePlaces';
import UpdatePlace from './Component/MangePlaces/UpdatePlace';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>


            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/places">
              <Places></Places>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/travelInfo">
              <Travelinfo></Travelinfo>
            </PrivateRoute>
            <PrivateRoute exact path="/booking">
              <BookingInfo></BookingInfo>
            </PrivateRoute>

            <PrivateRoute exact path="/allbooking">
              <AllBookingInfo></AllBookingInfo>
            </PrivateRoute>

            <PrivateRoute exact path="/travelInfo/:userId">
              <Travelinfo></Travelinfo>
            </PrivateRoute>

            <PrivateRoute exact path="/addPlaces">
              <AddPlaces></AddPlaces>
            </PrivateRoute>

            <PrivateRoute exact path="/managePlaces">
              <ManagePlaces></ManagePlaces>
            </PrivateRoute>

            <PrivateRoute exact path="/managePlaces/update/:upId">
              <UpdatePlace></UpdatePlace>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
