import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import CardsList from "./components/cardsList.jsx";
import NotFound from "./components/notFound.jsx";
import Single from "./components/single.jsx";
import Form from "./components/form.jsx";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="flex flex-wrap max-w-screen-2xl mx-auto">
          <Switch>
            <Route exact path="/create">
              <Form />
            </Route>
            <Route exact path="/">
              <CardsList post={this.props.postList} />
            </Route>
            <Route path="/:id">
              <Single post={this.props.postList}/>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    postList: state,
  };
};
export default connect(mapStateToProps, null)(App);
