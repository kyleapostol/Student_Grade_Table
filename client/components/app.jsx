import React from 'react';
import Header from './header.jsx';
import Grade from './grade.jsx';
import GradeTable from './gradeTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
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

  render() {
    return (
      <div>
        <Header/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}
export default App;
