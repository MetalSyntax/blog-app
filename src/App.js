import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import CardsList from './components/cardsList.jsx';
import Form from "./components/form.jsx";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addPost} from './actions/postActions'

class App extends React.Component {
  constructor(props){
    super(props);
    this.addNewPost = this.addNewPost.bind(this);
  }
  componentWillMount(){}
  addNewPost() {
    this.props.addPost({id:Math.max(...this.props.postList.map(function(o){return o.id})) + 1,username:'',title:'',content:''});
  }
  render() {
    return (
      <Router>
      <Navbar />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto">
        <Switch>
          <Route path="/create">
            <Form />
          </Route>
          <Route path="/">
            <CardsList post={this.props.postList} />
         </Route>
        </Switch>
      </div>
    </Router>
   );
  }
}
/*<!--<Route path="/" component={() => <CardsList post={this.props.postList} />}/></Route>-->*/
const mapStateToProps = (state) => {
  return {
    postList : state
  }
} 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      addPost:addPost,
  },dispatch);
}
export default connect(mapStateToProps  ,mapDispatchToProps) (App);
