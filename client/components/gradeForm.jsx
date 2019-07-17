import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCourseChange(event) {
    this.setState({ course: event.target.value });
  }

  handleGradeChange(event) {
    this.setState({ grade: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addGrade(this.state);
  }

  handleReset() {
    this.setState({ name: '', course: '', grade: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col">
            <input placeholder="Enter Name"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group col">
            <input placeholder="Enter Course"
              onChange={this.handleCourseChange}
              value={this.state.course}
            />
          </div>
          <div className="form-group col">
            <input placeholder="Enter Grade"
              onChange={this.handleGradeChange}
              value={this.state.grade}
            />
          </div>
          <button type="submit" className="btn btn-success">Add</button>
          <button type="reset" value="clear all"
            className="btn btn-light"
            onClick={this.handleReset}>Cancel
          </button>
        </form>
      </div>
    );
  }
}
export default GradeForm;
