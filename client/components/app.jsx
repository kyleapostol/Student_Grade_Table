import React from 'react';
import Header from './header.jsx';
import GradeTable from './gradeTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []

    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
      .then(myJson => this.setState({
        grades: myJson
      })
      );
  }

  getAverageGrade() {
    const studentGrade = this.state.grades;
    let i = 0;
    let total = 0;
    let avg = 0;
    while (studentGrade[i]) {
      total = total + studentGrade[i].grade;
      avg = total / (i + 1);
      i++;
    }
    return avg.toFixed(2);
  }

  render() {
    return (
      <div >
        <Header averageGrade={this.getAverageGrade}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}
export default App;
