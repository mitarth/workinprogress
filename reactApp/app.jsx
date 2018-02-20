import React from 'react';
import ReactDOM from 'react-dom';


class Hero extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         id: 1,
         name: "Batman"
      }
       
       
   }
   funkyou() {
       alert("Calling function")
   }
    
    render() {
      return (
         <div class='col-md-4' >
        <img src={this.props.imageUrl} alt="No Image Available" width="75px"/> 
        <div style={{font: '25 px', fontWeight:'bold'}}>
        <h3>{this.props.name}</h3>  
        
        </div>
        </div>

         );
   }
}

class List extends React.Component{
    constructor(props) {
      super(props);
	
    this.state = null;
         
   }
    render(){
    return (
    <div>
            {this.props.heroes.map((hero)=> 
            <Hero key={hero.id} imageUrl={hero.imageUrl} id={hero.id} name= {hero.name}/>) }
          
        
    </div>
    )}
}

class Form extends React.Component{
    constructor(props) {
      super(props);     
   
        this.state ={name:''}
    }
    
    
    handleSubmit(event) {
        event.preventDefault();
        console.log('Stop submit :'+ this.state.name);
        
        
    }
    
    
    
    render(){
    return (
    <div>
    <form onSubmit={this.handleSubmit.bind(this)}>
    <input type="text" placeholder='Hero name'
        value = {this.state.name}
        onChange = {(event)=> this.setState({name:event.target.value})}
        ></input>
    <button type='submit'> Add Hero</button>    
    </form>    
    </div>
    )}
}

class App extends React.Component{
    constructor(props) {
      super(props);
	this.state = {
        heroes :[{name:'Batman',id:1,imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_batman_588c0b6b7e2e88.03395664_589110907cb905.89801067.jpg?itok=vuUz8U8D',city:'Gotham'},
        {name:'Flash',id:3,imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_flash_588c0c78096793.56539878_58911183a7a817.13114786.jpg?itok=51sOwUR9',city:'Central City'}
]
}
    }
    render(){
    return (
    <div>
   <List heroes={this.state.heroes}/>         
    <Form></Form>
    </div>
    )}
}

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
        <img src={this.props.imageUrl} alt="No Image Available" width="75px"/> 
        <div style={{font: '25 px', fontWeight:'bold'}}>
        <h3>{this.props.name}</h3>  
        <button onClick={(event)=>   {if(this.state.count!=0) this.setState({count:this.state.count-1})}}>-</button>
        <input type='number' minimum='0' value={  this.state.count  }></input>
        <button onClick={(event)=> this.setState({count:this.state.count+1})}>+</button>        
        
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
            <Item   key={item.id} imageUrl={item.imageUrl} id={item.id} name= {item.name} handler={this.props.handler}/>) }
          
        
    </div>
    )}
}
function SideMenu(props){
     return (
         <div>
         {props.menu.map((item) =>  
          <a href="#">{item.name}</a>
          )}
        </div>     
         );
    
}

function Sidenav(props) {
      const smenu =[{name:'About Us'}, {name:'Services'},{name:'Contact Us'} ];
  
      return (
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={props.close}>&times;</a>
          <SideMenu menu={smenu} />
        </div>

         );
    
    
}
function Navbar(props) {
    
    
        
      return (
          
        <nav className="navbar navbar-expand-sm bg-light">
    <ul className="navbar-nav">
    <li  className="nav-item nav-link" style={props.sidenavStyle} onClick={props.open}>&#9776; </li>            
    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          </ul>
 
          </nav>


         );
    
    
}
 
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
        objects :[{name:'Batman',id:1,imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_batman_588c0b6b7e2e88.03395664_589110907cb905.89801067.jpg?itok=vuUz8U8D',city:'Gotham'},
        {name:'Flash',id:2,imageUrl:'http://www.dccomics.com/sites/default/files/styles/whos_who/public/ww_flash_588c0c78096793.56539878_58911183a7a817.13114786.jpg?itok=51sOwUR9',city:'Central City'}
]
    }
         
        this.addToArray = this.addToArray.bind(this);
        this.pushToArray = this.pushToArray.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        
    }
   
    openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    }
    closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    }
    
    
    addToArray(){
        
        console.log('Add to array  '+this.state.count);
       
    }  
    pushToArray(iId,iCount){
        console.log('Push successful for '+iId+' Count '+iCount)
        this.state.count[iId-1]=iCount
        }
    
    
    render(){
    return (
    <div id='main'  >
    <Navbar  sidenavStyle={this.state.sidenavStyle} open={this.openNav}/>        
    
    <Sidenav close={this.closeNav}/>
    <ItemList objects={this.state.objects} count={this.state.count} handler={this.pushToArray}/>         
    
    <button onClick={this.addToArray}>Add to cart</button>              
    <div>{this.state.data}</div>    
    
    </div>
    )}
}

export default Test;