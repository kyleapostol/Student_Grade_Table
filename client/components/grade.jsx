import React from 'react';

class Grade extends React.Component {
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
      </tr>
    );
  }
}
export default Grade;
