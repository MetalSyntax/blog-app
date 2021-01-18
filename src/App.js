import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreator from './actions/actionsCreator';
import Navbar from "./components/navbar.jsx";
import SinglePost from "./components/singlePost.jsx";
import Form from "./components/formPost.jsx"
import NotFound from "./components/notFound.jsx";
import PostGrid from "./components/postGrid.jsx";
import {history} from './store/index';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
      <Navbar />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto">
        <Switch>
        <Route path="/create">
              <Form />
          </Route>
          <Route exact path="/">
            <PostGrid comments={this.props.comments} posts={this.props.posts} />
          </ Route>
          <Route path="/:id" render={(props) => 
              <SinglePost {...props} key={props.match.params.id} posts={this.props.posts} comments={this.props.comments} />
            }/>
          <Route component={NotFound} />
        </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionsCreator, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);