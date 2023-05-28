
import './App.css';
//Class Based component
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { 
  BrowserRouter,
  Route,
  Routes
   } from "react-router-dom";

   import LoadingBar from 'react-top-loading-bar';
// import mylogo from './Components/logo_transparent.png'

export default class App extends Component {
  apiKey = "416486f6bd76445d8ae6643f9033ac83";
  state = {
    progress: 0
}
  setProgress =(progress)=>{
    this.setState({
     progress: progress
    })
  }
  render() {
    return (
      <>
          <BrowserRouter>
        <div>
             <Navbar/>
             <LoadingBar color='#f11946'  progress={this.state.progress} />
             <Routes>
               <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'general'}/>}></Route>
               <Route exact path="/home" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'general'}/>}></Route>
               <Route exact path="/about" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'about'}/>}></Route>
               <Route  exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'business'}/>} ></Route>
               <Route  exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'entertainment'}/>} ></Route>
               <Route  exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'general'}/>} ></Route>
               <Route  exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'health'}/>} ></Route>
               <Route  exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSizhealthe ={9} country={ 'in'} category={'science'}/>} ></Route>
               <Route  exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'sports'}/>} ></Route>
               <Route  exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize ={9} country={ 'in'} category={'technology'}/>} ></Route>

            </Routes>

        </div>
        </BrowserRouter>
      </>
    )
  }
}
