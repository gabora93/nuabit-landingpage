import React, { Component} from 'react';
import '../../App.css';
import LogoLetra from '../../assets/img/nuabitLogo.png';



class Navigation extends Component {


    render(){
        return(
            <div className="navbar navbar-inverse  transparente" id="menu">
        <div className="container">
            <div className="navbar-header">
            <img  src={LogoLetra} style={{ width: '20%' }}/>
            </div>
          
           
        </div>
    </div>
        )
    }
}

export default Navigation;