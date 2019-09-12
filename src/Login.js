import React, { Component } from 'react'
import Script from 'react-load-script'
import Button from 'react-bootstrap/Button'
import Data from './Data';
import './App.css';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';

var selectedId = [];
var selectedQuestions = [];
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            apiKey: [],
            selectedId: [],
            questions: [],
            showTournament :false,
        }
    }

    Login(){

            window.JF.login(()=>{ 
                this.setState({apiKey:window.JF.getAPIKey()});
                console.log(this.state.apiKey);
                });
            document.getElementById('login').style.display = 'none';
            document.getElementById('selectForm').style.display = 'block';
            document.getElementById('selectForm').style.visibility = 'visible';    
        }

    FormSelect(){
        const self = this;
        window.JF.FormPicker({
                            onSelect(selectedForm) {
                                for(var i=0; i<selectedForm.length; i++) {
                                    selectedId.push(selectedForm[i].id);
                                }
                                self.setState({selectedId})
                            },
                            onReady: function() {
                                document.getElementById('selectForm').style.display = 'none';
                                document.getElementById('questionPicker').style.visibility = 'visible';
                                document.getElementById('questionPicker').style.display = 'block';
                            },
                            onClose: function() {
                            },
                            onLoad: function() {
                            },
                        })
    }

    QuestionSelect(){
        const self = this;
        window.JF.QuestionPicker(selectedId[0], {
                            sort: 'order',
                            sortType: 'ASC',
                            title: 'Question Picker',
                            multiSelect: true,
                            ignore_types: ["control_head",
                                            "control_text",
                                            "control_textarea",
                                            "control_dropdown",
                                            "control_radio",
                                            "control_checkbox",
                                            "control_image",
                                            "control_button",
                                            "control_datetime",
                                            "control_time",
                                            "control_birthdate",
                                            "control_number",
                                            "control_captcha",
                                            "control_rating",
                                            "control_scale",
                                            "control_spinner",
                                            "control_matrix",
                                            "control_collapse",
                                            "control_pagebreak",
                                            "control_hidden",
                                            "control_slider",
                                            "control_signature",
                                            "control_widget",
                                            "control_email",
                                            "control_fullname",
                                            "control_phone"],
                            loadForm: false,
                            onSelect: function(questions) {
                                for(var i=0; i<questions.length; i++) {
                                    selectedQuestions.push(questions[i]);
                                }
                                self.setState({questions:selectedQuestions});
                            },
                            onReady: function() {
                                document.getElementById('questionPicker').style.display = 'none';
                                document.getElementById('createTournament').style.display = 'block';
                                document.getElementById('createTournament').style.visibility = 'visible';
                            },
                            onClose: function() {
                            },
                            onLoad: function() {
                            }
                        }
                        );
    }

    render() {
        if (!this.state.showTournament) {
            return(
                <div className="centered">
                    <Script url= "https://js.jotform.com/JotForm.js" />
                    <Button id="login" variant="outline-warning" size="lg" className="button" onClick={(e) =>{
                        this.Login();
                    }}>Login</Button>
                     <Script url= "http://js.jotform.com/FormPicker.js" />
                     <Button id="selectForm" variant="outline-warning" size="lg"  className="button" onClick={e =>{
                         this.FormSelect();            
                     }}>Select Forms</Button>
                     <Script url= "https://js.jotform.com/QuestionPicker.js" />
                     <Button id="questionPicker" variant="outline-warning" size="lg"  className="button" onClick={e =>{
                         this.QuestionSelect();
                     }}>Question Select</Button>
                     <Button id="createTournament" variant="outline-warning" size="lg"  className="button" onClick={e =>{
                         this.setState({showTournament:true});
                     }} >Create Tournament</Button>         
                </div>
                )
        }
        return (
            <div>
              <NavBar/>
              <Homepage State={this.state}/> 
              <Data State={this.state}/>
            </div>
    ); 
    }
}
export default Login;