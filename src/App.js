import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import {fetchSmurfs} from './actions';
import { connect } from "react-redux";

class App extends Component {
  componentDidMount(){
    console.log('fetching')
    this.props.fetchSmurfs();
    console.log(this.props.smurfs)
  }
  render() {

    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  return{
    loading: state.loading,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps,{fetchSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.