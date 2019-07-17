import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteGradeProp = this.handleDeleteGradeProp.bind(this);
  }

  handleDeleteGradeProp() {
    this.props.deleteGradeProp(this.props.grade.id);
  }

  render() {
    return (
      <tr>
        <td scope="col">
          {this.props.grade.grade}
        </td>
        <td>
          {this.props.grade.course}
        </td>
        <td>
          {this.props.grade.name}
        </td>
        <td>
          <button type="button"
            className="btn btn-danger"
            onClick={this.handleDeleteGradeProp}>Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Grade;
