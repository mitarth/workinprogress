import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Modal from 'react-modal';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux';
import * as  loginActions from '../actions/loginAction';


class Item extends React.Component{
   constructor(props) {
      super(props);
		
      this.state = {
         id: 1,
         name: '',
         count:0
      }
     
        
       
   }
        render() {
      return (
        <div className='col-md-6' >
        <img src={this.props.imageUrl} alt="No Available" width="75px"/> 
        <div style={{font: '25 px', fontWeight:'bold'}}>
        <h3>{this.props.name}</h3>  
        <h4>{this.props.item.price}</h4>  
        <h5>{this.props.item.offers}</h5>  
        
        
        </div>
        <button onClick={(id,count)=> this.props.handler(this.props.id,this.state.count)}>Add to cart</button>     
        </div>

         );
   }
    
    
}

class ItemList extends React.Component{
    constructor(props) {
      super(props);
	
    this.state = null;
         
   }
    render(){
    return (
    <div className='row'>
            {this.props.objects.map((item)=> 
            <Item   key={item.id} item={item} imageUrl={item.imageUrl} id={item.id} name= {item.name} handler={this.props.handler}/>) }
          
        
    </div>
    )}
}

/*
function SideMenu(props){
     return (
         <div>
         {props.menu.map((item) =>  
          <a key={item.id} href="sad">{item.name}</a>
          )}
        </div>     
         );
    
}
function NavMenu(props){
     return (
         <li className="list-inline-item">
         {props.menu.map((item) =>  
          <Link className="nav-item nav-link" to={item.link}>{item.name}</Link>
          )}
        </li>     
         );
    
}

function Sidenav(props) {
      const smenu =[{id:1,name:'About Us'}, {id:2,name:'Services'},{id:3,name:'Contact Us'} ];
  
      return (
        <div id="mySidenav" className="sidenav">
          <a className="closebtn" onClick={props.close}>&times;</a>
          <SideMenu  menu={smenu} />
        </div>

         );
    
    
}
 */
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Topic = () => (
  <div>
    <h2>Topic</h2>
  </div>
);
class Test extends React.Component{
    constructor(props) {
      super(props);
	this.state = {
        name : '',
        data : '',
        array : [ ],
        sidenavStyle : {
      fontsize: '30px',
      cursor: 'pointer',
    },
        count:[],
        objects :[
        {name:'Batman Action Figure',id:1,
        imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_batman_588c0b6b7e2e88.03395664_589110907cb905.89801067.jpg?itok=vuUz8U8D',
        city:'Gotham',price:999,offers:['Free Delivery'],},
        {name:'Flash Action Figure',id:2,price:699,offers:[],
        imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_flash_588c0c78096793.56539878_58911183a7a817.13114786.jpg?itok=51sOwUR9',
        city:'Central City'}
]
    }
         
        this.addToArray = this.addToArray.bind(this);
        this.pushToArray = this.pushToArray.bind(this);
       
        
    }
    
    
    addToArray(){
        
        console.log('Add to array  '+this.state.count);
       
    }  
    pushToArray(iId,iCount){
        console.log('Push successful for '+iId+' Count '+iCount)
        //this.state.count[iId-1]=iCount
        
    }
    
    
    render(){
    return (
    <div id='main'  >
    
    
    
    
    <ItemList objects={this.state.objects} count={this.state.count} handler={this.props.addToCart}/>         
    
    <div>{this.state.data}</div>    
    
    </div>
    )}
}
class Login extends React.Component {
    
    constructor(props) {
    
    super(props);
        
    this.state = {
      modalIsOpen: true,
         id: 1,
         name: '',
         password:''
      
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.signUp = this.signUp.bind(this);
  }
    
  componentWillMount() {
    Modal.setAppElement('body');
 }    
  openModal() {
    this.setState({modalIsOpen: true});
  }

  signUp(){
    console.log('in signup');
    window.location = '/signUp';

  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
    handleSubmit(event){
        event.preventDefault();
        console.log('name   :'+this.state.name)
        console.log('password : '+this.state.password)
        fetch("/auth", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
  body: JSON.stringify({name: this.state.name, password : this.state.password})
}).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {   
    console.log(res.data)
    var result = res.data.message;
    if(result==='null'|| result==null)  {
        console.log('Invalid user')
    }
    else{        
        console.log('Valid user')
       // this.setState({modalIsOpen: false});

    this.setState({name:this.state.name})
        
    }
}))  
        }    
    
  render() {
     if(this.props.isLoggedIn === true)  
          return(
             <div >
        <Display isLoggedIn={this.props.isLoggedIn}/>
        </div>
          );
     else     
    return (
      <div className="container" >
        <Modal className="Modal" overlayClassName="Overlay"  
           // style={customStyles}
          isOpen={this.state.modalIsOpen}
          //onRequestClose={this.closeModal}
          
            contentLabel="Example Modal"
        >
        <button type="button" className="close" onClick={this.closeModal}>&times;</button>
        <div className="container row" >
      <div  className="col-md-3">            </div>        
      <div id='signin' className="col-md-6">            
      <form name='signin' onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input value = {this.state.name}
        onChange = {(event)=> this.setState({name:event.target.value})} type="text" className="form-control"  placeholder="Enter Username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input value = {this.state.password}
        onChange = {(event)=> this.setState({password:event.target.value})} type="password" className="form-control"  placeholder="Enter password" name="password" />
    </div>
        <div className="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>
        <button type="submit" className="btn btn-default" style={{paddingRight: 20+'px',
    marginRight: 10+'px'}}
    >Sign In</button>
           <button type="button" className="btn btn-default" onClick={this.props.login}>Login for Now</button>
          <button id='signUpButton'type="button" className="btn btn-default" onClick={this.signUp}>Sign Up</button>

        </form>
       <button type="button" className="btn btn-default" style={{marginTop:10+'px'}} onClick={this.closeModal}>Not Interested</button>

        </div>

        </div>    
      
        </Modal>
      </div>
    );
      
  }
}



const PrivateRoute = ({ component: Component,isLoggedIn, ...rest }) => (
  <Route {...rest} render={(props) => (
    
    isLoggedIn === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class SignUp extends React.Component{
    constructor(props) {
    
    super(props);
        
    this.state = {
      modalIsOpen: true,
         id: 1,
         name: '',
         password:'',
         contact:''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.signUp = this.signUp.bind(this);
  }
    
  componentWillMount() {
    Modal.setAppElement('body');
 }    
  openModal() {
    this.setState({modalIsOpen: true});
  }

  signUp(){
    console.log('signing you up Mate');
    this.closeModal();
    this.props.login();

  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
    handleSubmit(event){
        event.preventDefault();
        console.log('name   :'+this.state.name)
        console.log('password : '+this.state.password)
        fetch("/auth", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
  body: JSON.stringify({name: this.state.name, password : this.state.password})
}).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {   
    console.log(res.data)
    var result = res.data.message;
    if(result==='null'|| result==null)  {
        console.log('Invalid user')
    }
    else{        
        console.log('Valid user')
       // this.setState({modalIsOpen: false});

    this.setState({name:this.state.name})
        
    }
}))  
        }
       render(){
    
      if(this.props.isLoggedIn===true)
      return (<div>
        Welcome {this.state.name}
      </div>);
      else 
return (
      <div className="container" >
        <Modal className="Modal" overlayClassName="Overlay"  
           // style={customStyles}
          isOpen={this.state.modalIsOpen}
          //onRequestClose={this.closeModal}
          
            contentLabel="Example Modal"
        >
        <button type="button" className="close" onClick={this.closeModal}>&times;</button>
        <div className="container row" >
      <div  className="col-md-3">            </div>        
      <div id='signup' className="col-md-6">            
      <form name='signup' onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input value = {this.state.name}
        onChange = {(event)=> this.setState({name:event.target.value})} type="text" className="form-control"  placeholder="Enter Username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input value = {this.state.password}
        onChange = {(event)=> this.setState({password:event.target.value})} type="password" className="form-control"  placeholder="Enter password" name="password" />
    </div>
    <div className="form-group">
          <label htmlFor="contact">Contact No.:</label>
          <input value = {this.state.contact}
        onChange = {(event)=> this.setState({name:event.target.value})} type="pattern" className="form-control"  placeholder="Enter Contact No." name="contact" />
        </div>
       
       
         
       <button id='signUpButton'type="button" className="btn btn-default" onClick={this.signUp}>Sign Up</button>

        </form>
       
        </div>

        </div>    
      
        </Modal>
      </div>
    );
      
    
      };
	
}

class Display extends React.Component{
    
       render(){
    
      if(this.props.isLoggedIn===true){
      return (<div > Welcome Mitarth</div>)
      }
      else{
      return (<div > Welcome Guest</div>)
      }
    
      };
	
}

class NavAccess extends React.Component{
    
  render(){

 if(this.props.isLoggedIn===true){
 return (<div > 
   <span onClick={this.props.logout}>Logout</span>
   </div>)
 }
 else{
 return (<div > 
   <span onClick={this.props.login}>Login</span>
   
   </div>)
 }

 };

}


class Main extends React.Component{
    constructor(props,context) {
      super(props,context);
	this.state = {
        cart:[],
        user : {name:""},
        isLoggedIn: false,
        somestyle:{ marginTop: 8+'px',
    color: '#007bff',
  float:'right',
  fontFamily: 'sans-serif',
  marginLeft: 10+'px' }
    }
    this.addToCart = this.addToCart.bind(this);
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
   
   }
    
    addToCart(id){
      console.log('Adding product '+id+' to cart');
      this.props.actions.addToCart(id);
      

    }
    login() {
        console.log("Bro I am logging in :  "+this.props.isLoggedIn)
        this.props.actions.login(this.props.isLoggedIn);
        //this.setState({isLoggedIn:true})
    
    
    }
    logout(){
       console.log("Bro I am logging out :  "+this.props.isLoggedIn)
        this.props.actions.logout(this.props.isLoggedIn);
        //this.setState({isLoggedIn:true})
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('Calling getDerivedStateFromProps ')
        //this.state.courses=this.props.course
        if(nextProps.state.isLoggedIn!=null || nextProps.state.cart!=null)
        return {
               isLoggedIn : nextProps.state.isLoggedIn,
               cart : nextProps.state.cart
        }; 
        
        else
            return {
               isLoggedIn : false
        };
        

    }
  
    
    render(){
   // < RouteApp isuser={this.state.isLoggedIn} login={this.login} />    
    return (
    <div id='main'  >
    <Router>   
             
    <div>
        <nav className="navbar navbar-expand-sm bg-light">
       <ul className="navbar-nav ">
                
        <li>
          <Link className="nav-item nav-link " to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-item nav-link " to="/about">About</Link>
        </li>
        <li>
          <Link className="nav-item nav-link " to="/topic">Topics</Link>
        </li>

        <li style={this.state.somestyle}>
          <NavAccess isLoggedIn={this.props.state.isLoggedIn}   login={this.login} logout={this.logout}/>
        </li>
        <li style={this.state.somestyle}>
             <Display  isLoggedIn={this.props.state.isLoggedIn}/>
        </li>
      </ul>
        </nav>
        
      <Route exact path="/" render={()=><Test isuser={this.isuser} addToCart={this.addToCart} />}  />
      <Route path="/about" render={()=><About isuser={this.isuser} />}  />
      <Route path="/signUp" render={()=><SignUp login={this.login} />}  />
      <PrivateRoute isLoggedIn={this.props.state.isLoggedIn} path="/topic" component={Topic} />
      <Route path="/login" render={()=><Login isLoggedIn={this.props.state.isLoggedIn} isuser={this.isuser} login={this.login}/>} />              
    </div>
  </Router>
    
   <button type='Submit' onClick={this.login} >Login</button>

   <button type='Submit' onClick={this.logout} >Logout</button>
   
   
  
   
    </div>
    )}
    
    
    
}

Main.propTypes = {
    actions : PropTypes.object.isRequired,
    
};
function mapStateToProps(state,ownProps){return{
    state:state,
 
}
}
 
function mapDispatchToProps(dispatch){
    return{
    actions : bindActionCreators(loginActions,dispatch)
}                                         
}

const connectF=connect(mapStateToProps,mapDispatchToProps);


export default connectF(Main);

//export default Main;