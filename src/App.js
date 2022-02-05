import Backdrop from "./components/Backdrop/Backdrop";
import FooterPrimary from "./components/footerPrimary/footerPrimary";
import FooterSecondary from "./components/footerSecondary/footerSecondary";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home";
import { SidebarVisibilityContextProvider } from "./store/sidebarVisibilityContext";
import {BrowserRouter as Route,Routes,Routers} from "react-router-dom";
import Detail from "./Pages/detail";
import List from "./Pages/list";
import Create from "./Pages/create";
import UserContextProvider from "./store/userContext";
import Login from "./Pages/login";
import Signup from "./Pages/signup";


function App() {
  return (
    <div className="page">
      <UserContextProvider>
      <Route>
        <SidebarVisibilityContextProvider>
          <Header />
          <Backdrop />
          <Sidebar />
        </SidebarVisibilityContextProvider>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/book/:id" exact component={ Detail } />
          <Route path="/book/:id/edit" exact component={ Create } />
          <Route path="/list" component={ List } />
          <Route path="/create" component={ Create } />
          <Route path="/login" component={ Login } />
          <Route path="/signup" component={ Signup } />
        </Switch>
      </Route>
      <FooterPrimary />
      <FooterSecondary />
      </UserContextProvider>
    </div>
  );
}

export default App;