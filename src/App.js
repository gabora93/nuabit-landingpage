import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Parallax } from 'react-spring';
import axios from '../src/axios-emails';
import Form from './components/Form/Form';
import background1 from '../src/assets/img/back.jpg'
import background2 from '../src/assets/img/fondo2.jpg'
import Card from '../src/components/Card/Card';
import { IoMdColorWand, IoMdLock, IoMdHome } from 'react-icons/io';
var Count = require('react-count');




class App extends Component {

    

  send = (e) => {
      e.preventDefault();
    const data = {
      email : "gabora93@gmail.com",
      name: "Gabo",
      lastName: "Ruiz"
    }
    axios.post('/emails.json', data)
      .then(response=>console.log(response))
      .catch(err => console.log(err));
  }

  render() {


    
    return (
        <div>

     
        <Count isViewCounter={true} counterText="views" firebaseHost="https://nuabit-6920f.firebaseapp.com" firebaseResourceId='views-counter'/>
     
      <Parallax pages={3} ref={ref => (this.parallax = ref)} >
      <Parallax.Layer offset={0} speed={0}>
        <section className="wave">
            </section>  
        </Parallax.Layer>

     
        <Parallax.Layer offset={0} speed={0.5} factor={1} >
        <Navigation/>
        
            
                <Parallax.Layer offset={0} speed={3} factor={1}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="page-header header-filter" data-parallax="true">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                                    <h1 className="title">No vuelvas a preocuparte si cerraste bien tu hogar.</h1>
                                    <h2 className="subtitle">Nuestra cerradura y llavero inteligente te notificaran y cerraran tu hogar automáticamente.</h2>
                                    <button className="btn btn-info btn-raised btn-lg btnstyle " 
                                    onClick={() => this.parallax.scrollTo(2)}>
                                        ¡Despreocupame!
                                    </button>                                
                                </div>                            
                                    
                            </div>
                        </div>
                    </div>
                </Parallax.Layer>
   
        </Parallax.Layer>
        <Parallax.Layer offset={1.4} speed={1} factor={2} style={{backgroundColor: '#6C6C6C'}} />



        <Parallax.Layer offset={1} speed={0.5} 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${background2})`, backgroundSize: 'cover' }}>
        <div className="container d-flex flex-column align-items-center justify-content-center">
                <Parallax.Layer offset={0.7} speed={1} >
                    <div className="container">
                         
                    <div className="row justify-content-center">
                        <h1 style={{textAlign:'center'}}>Características Principales</h1>
                    </div>
                    <div className="row d-flex justify-content-around">
                        
                        <Card title="Innovación" text="Apertura y cerrado por próximidad a tráves de nuestra tecnología." icon={<IoMdColorWand className="iconi" />}/>
                        <Card title="Elegancia" text="Diseño elegante y vanguardista adaptable a distintos estilos de hogar." icon={<IoMdHome className="iconi" />}/>
                        <Card title="Seguridad" text="Señal encriptada entre dispositivos y notificaciónes de estado a tu celular."  icon={<IoMdLock className="iconi"/>}/>
                        
                    </div>
                    <div className="row d-flex justify-content-around ">
                    <button  className="btn btn-danger btn-raised btn-lg btnstyle"
                                    onClick={() => this.parallax.scrollTo(2)}>
                                        ¡Despreocupame!
                                    </button>
                    </div>
                    
                    </div>
                    </Parallax.Layer>
            </div>
        </Parallax.Layer>

        <Parallax.Layer offset={2} speed={0.5} 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${background1})`,  backgroundSize: 'cover' }}
         >
           
                <Parallax.Layer offset={1.7} speed={1.7} 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                    <div className="page-header header-filter" data-parallax="true">
                        <div className="container">
                            <div className="row">
                               <Form/>   
                            </div>
                        </div>
                    </div>
                </Parallax.Layer>

        </Parallax.Layer>
</Parallax>
</div>
     
    );
  }
}

export default App;
