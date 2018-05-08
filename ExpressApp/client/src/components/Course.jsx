import React from 'react';

class Course extends React.Component {
  constructor(props) {
      super(props);
		
      this.state = {
         course : {title:''},
          name:'',
      }
      this.onTitleChange = this.onTitleChange.bind(this);
      
   }
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course : course});
        
    }
    
    onClickSave(event){
        alert('saving' +this.state.course.title)
        
    }
    
    
  render() {
    return (
      <div>
        <h1>Course</h1>
        <h2> Add Course</h2>
        <input type='text'
            onChange={this.onTitleChange.bind(this)}
            value={this.state.course} />
        <input type='submit'
            onClick={this.onClickSave}
            value='Save' />
            
      </div>

    );
  }
}

export default Course;
