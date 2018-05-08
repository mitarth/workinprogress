import React from 'react';
import Modal from 'react-modal';

const layouts =[{
    "_id" : "5ad658d97c0fdaacda940d02",
    "name" : "Contacts Us",
    "rolesAllowed" : [ 
        "Administrator"
    ],
    "rolesNotAllowed" : [],
    "createdBy" : "Mitarth Vaid",
    "createdDate" : null
},

/* 2 */
{
    "_id" : "5ad658e77c0fdaacda940d03",
    "name" : "About Us",
    "rolesAllowed" : [ 
        "Administrator"
    ],
    "rolesNotAllowed" : [],
    "createdBy" : "Mitarth Vaid",
    "createdDate" : null
},

/* 3 */
{
    "_id" : "5ad660ca7c0fdaacda940d07",
    "name" : "Home",
    "rolesAllowed" : [ 
        "Administrator"
    ],
    "rolesNotAllowed" : [],
    "createdBy" : "Mitarth Vaid",
    "createdDate" : null
}]

const roles=[{
    "_id" : "5ad65d467c0fdaacda940d04",
    "name" : "Administrator",
    "createdBy" : "Mitarth Vaid",
    "createdDate" : null
},
{
    "_id" : "5ad65d907c0fdaacda940d05",
    "name" : "Owner",
    "createdBy" : "Mitarth Vaid",
    "createdDate" : null
},
{
    "_id" : "5ad65d9a7c0fdaacda940d06",
    "name" : "Guest",
    "createdBy" : "Mitarth Vaid",
    "createdDate" : null
}]
class ItemList extends React.Component{
    constructor(props) {
      super(props);
	
    this.state = null;
         
   }
    render(){
    return (
    <table style={{width:100+'%'}}>
            <thead>
                <tr>
                <th>
                Name    
                </th>
                <th>
                Created By    
                </th>
                <th>
                Roles    
                </th>
                </tr>    
            </thead>
            <tbody>    
            {this.props.objects.map((item)=> 
            <tr key={item._id} item={item} >
            <td   >
           <input type="checkbox" />
            </td>
            
            <td   >
            {item.name}
            </td>
            <td   >
            {item.createdBy}
            </td>
            <td   >
            {item.rolesAllowed}
            </td>
            </tr>
            ) }
          </tbody>
        
    </table>
    )}
}


class AddLayout extends React.Component {
    
    constructor(props) {
    
    super(props);
        
    this.state = {
      modalIsOpen: this.props.modalIsOpen,
         roles: roles,
         name: '',
         password:''
      
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  
  }
    
  componentWillMount() {
    Modal.setAppElement('body');
 }    
  openModal() {
    this.setState({modalIsOpen: true});
  }

  
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
    handleSubmit(event){
        event.preventDefault();
        console.log('name   :'+this.state.name)
        }    
    
  render() {
    
    return (
      <div className="container" >
        <Modal className="Modal" overlayClassName="Overlay"  
          isOpen={this.props.modalIsOpen}      
            contentLabel="Example Modal"
        >
        <button type="button" className="close" onClick={this.closeModal}>&times;</button>
        <div className="container row" >
      <div  className="col-md-3">            </div>        
      <div id='signin' className="col-md-6">            
      <form name='signin' onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="username">Name:</label>
          <input value = {this.state.name}
        onChange = {(event)=> this.setState({name:event.target.value})} type="text" className="form-control"  placeholder="Enter Name" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Created By:</label>
          <input value = {this.state.password}
        onChange = {(event)=> this.setState({password:event.target.value})} type="text" className="form-control"  placeholder="Enter Owner" name="password" />
    </div>
    <select multiple>
    {this.state.roles.map((item)=> 
             <option key={item._id} value={item._id}>{item.name}</option>
            ) }
</select>
        
        </form>
       <button type="button" className="btn btn-default" style={{marginTop:10+'px'}} onClick={this.props.toggleModal}>Add Layout</button>

        </div>

        </div>    
      
        </Modal>
      </div>
    );
      
  }
}
class Layout extends React.Component {
  constructor(props) {
      super(props);
		
      this.state = {
        modalIsOpen: false,
         course : {title:''},
         layouts:layouts,
      }
      this.onTitleChange = this.onTitleChange.bind(this);
      this.onClickSave = this.onClickSave.bind(this);
      this.onClickRemove = this.onClickRemove.bind(this);
      this.getCheckedBoxes = this.getCheckedBoxes.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      
   }
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course : course});
        
    }
    
    toggleModal(){
        console.log('Toggle Modal')
        var modalIO = this.state.modalIsOpen;
        this.setState({modalIsOpen: !modalIO});

    }
    onClickSave(event){
        this.toggleModal();
        console.log('saving' +this.state.course.title)
       // var checkedBoxes = this.getCheckedBoxes("mycheckboxes");
        //console.log(checkedBoxes);
    }
    onClickRemove(event){
        console.log('Removing' +this.state.course.title)
        
    }
    getCheckedBoxes(chkboxName) {
        var checkboxes = document.getElementsByName(chkboxName);
        var checkboxesChecked = [];
        // loop over them all
        for (var i=0; i<checkboxes.length; i++) {
           // And stick the checked ones onto an array...
           if (checkboxes[i].checked) {
              checkboxesChecked.push(checkboxes[i]);
           }
        }
        // Return the array if it is non-empty, or null
        return checkboxesChecked.length > 0 ? checkboxesChecked : null;
      } 

  render() {
    return (
      <div>

        
        <h1>Layouts</h1>
        <table style={{width:100+'%'}}>
            <thead>
                <tr>
                    <th>  </th>
                    <th> Name </th>
                    <th> Created By   </th>
                    <th> Roles   </th>
                </tr>    
            </thead>
            <tbody>    
            {this.state.layouts.map((item)=> 
            <tr key={item._id} item={item} >
                <td   > <input type="checkbox" name='mycheckboxes' id={item._id}/>  </td>
                <td   > {item.name}  </td>
                <td   > {item.createdBy}  </td>
                <td   > {item.rolesAllowed} </td>
            </tr>
            ) }
          </tbody>
        
    </table>

        <button type='button' onClick={this.onClickSave}>Add Layout</button>
        <button type='button' onClick={this.onClickRemove}>Delete Layout</button>
        <AddLayout modalIsOpen={this.state.modalIsOpen} toggleModal={this.toggleModal}/>
      </div>

    );
  }
}

export default Layout;

