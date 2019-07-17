import React from 'react';
import Header from './header.jsx';
import GradeTable from './gradeTable.jsx';
import GradeForm from './gradeForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.postGrade = this.postGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
      .then(myJson => this.setState({
        grades: myJson,
        data: {}
      })
      );
  }

  getAverageGrade() {
    const studentGrade = this.state.grades;
    let i = 0;
    let total = 0;
    let avg = 0;
    while (studentGrade[i]) {
      let totalInt = parseInt(studentGrade[i].grade);
      total = total + totalInt;
      avg = total / (i + 1);
      i++;
    }
    return avg.toFixed(2);
  }

  postGrade(data) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(myJson => {
        let newArr = this.state.grades.concat(data);
        this.setState({ grades: newArr });
      });
  }

  render() {
    return (
      <div >
        <Header averageGrade={this.getAverageGrade}/>
        <GradeForm addGrade={this.postGrade}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}
export default App;
