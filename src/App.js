import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import CardsList from "./components/postList.jsx";
import NotFound from "./components/notFound.jsx";
import Single from "./components/singlePost.jsx";
import Form from "./components/formPost.jsx";
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
            <Route path="/:id" render={(props) => 
              <Single {...props} key={props.match.params.id} post={this.props.postList} />
            } />
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