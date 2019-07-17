import React from 'react';
import Grade from './grade.jsx';

class GradeTable extends React.Component {
  render() {
    let gradesOnly = this.props.grades;
    let deleteGrade = this.props.deleteGrade;
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Course</th>
            <th>Name</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {gradesOnly.map(grade => {
            return <Grade grade={grade}
              key={grade.id}
              deleteGradeProp={deleteGrade}/>;
          }
          )}
        </tbody>
      </table>
    );
  }
}
export default GradeTable;
