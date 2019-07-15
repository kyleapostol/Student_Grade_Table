import React from 'react';
import Grade from './grade.jsx';

class GradeTable extends React.Component {
  render() {
    let gradesOnly = this.props.grades;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Course</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {gradesOnly.map(grade => {
            return <Grade grade={grade} key={grade.id}/>;
          }
          )}
        </tbody>
      </table>
    );
  }
}
export default GradeTable;
