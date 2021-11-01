import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./navbar";

import Index from "../pages/indexPage";
import Contact from "../pages/contactPage";
import Donate from "../pages/donatePage";
import Gallery from "../pages/galleryPage";
import Proposal from "../pages/headwatersProposalPage";
import Join from "../pages/joinUsPage";
import Local from "../pages/localcontextPage";
import News from "../pages/newsPage";
import Videos from "../pages/videosPage";

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route path="/newsPage" component={News}></Route>
        <Route path="/localcontextPage" component={Local}></Route>
        <Route path="/joinUsPage" component={Join}></Route>
        <Route path="/headwatersProposalPage" component={Proposal}></Route>
        <Route path="/galleryPage" component={Gallery}></Route>
        <Route path="/videosPage" component={Videos}></Route>
        <Route path="/contactPage" component={Contact}></Route>
        <Route path="/donatePage" component={Donate}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
