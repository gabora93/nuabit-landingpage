import React, { Component  } from 'react';
import axios from '../../axios-emails';
import { Parallax } from 'react-spring';


class Form extends Component {
    state={
        name: '',
        lastname: '',
        email: '',
        sended: false,
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            ()=>{
                console.log(this.state.email,'<<<email')
                console.log(this.state.name,'<<<<nombre')
                console.log(this.state.lastname,'<<<<apellido')
            });
        console.log(this.state.email,'<<<email')
        console.log(this.state.name,'<<<<pass')
    }


    send = (e) => {
        e.preventDefault();
      const data = {
        email : this.state.email,
        name: this.state.name,
        lastName: this.state.lastname
      }
      axios.post('/emails.json', data)
        .then((response)=>{
            console.log(response);
            this.setState({
                sended:true
            })
        })
        .catch(err => console.log(err));
    }

    render(){


        return(
            
            <div>
            <form className="form-group" onSubmit={this.send}>
            <div className="card person-card card-shadow">
            <div className="card-body">
  
               
                <h2 id="who_message" className="card-title" style={{textAlign:'center'}}>Informame</h2>
                {this.state.sended ? 
                    <div className="container d-flex flex-column align-items-center justify-content-center" style={{textAlign:'center'}}>
                  <h1  >GRACIAS</h1>
                </div>
                 :
                <div className="row">
                    <div className="form-group col-md-2">
                    <input id="first_name" type="text" className="form-control" placeholder="Nombre"
                    onChange={this.handleUserInput} value={this.state.name} name='name'/>
                        <div id="first_name_feedback" className="invalid-feedback">
                        </div>
                    </div>
                    <div className="form-group col-md-5">
                    <input id="last_name" type="text" className="form-control" placeholder="Apellido" value={this.state.lastname}
                    onChange={this.handleUserInput} name='lastname'
                    />
                        <div id="last_name_feedback" className="invalid-feedback">

                        </div>
                    </div>
                    <div className="form-group col-md-5">
                    <input id="email" type="email" className="form-control" placeholder="Tu Correo"
                    onChange={this.handleUserInput} value={this.state.email} name='email'/>
                        <div id="email_feedback" className="invalid-feedback">

                        </div>
                    </div>
                </div>
                }
                
            </div>
        </div>
        <div >
            <button type="submit" className="btn btn-primary btn-lg btn-block btnstyle">{this.state.sended ? 'Nos pondremos en contacto' : 'Enviar'}</button>
        </div>
            </form>
            </div>
           
        )
    }
}

export default Form;