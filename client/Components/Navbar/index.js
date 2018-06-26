import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  state = {
    logged: false
  }
  

  onLogout = async () => {
    await localStorage.removeItem('__id__')
    this.setState({logged:false})
  }

  render(){

    /**
     * Why here?
     * Because Navbar is not a route hence when the
     * Component does not update on signin
     */
    if(localStorage.getItem('__id__')){
      return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">SkillNav</a>
            </div>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/post/new"><span className="glyphicon glyphicon-add"></span> Add Post</Link></li>
                <li><a onClick={this.onLogout} href="#"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
              </ul> 
          </div>
      </nav>
      )
    }
    const { logged } = this.state
    return(
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">SkillNav</a>
        </div>

        {
          logged ?
          <ul className="nav navbar-nav navbar-right">
            <li><a onClick={this.onLogout} href="#"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
          </ul> 
           :
           <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
         </ul>
        }
      </div>
    </nav>
    )
  }
}


export default Navbar