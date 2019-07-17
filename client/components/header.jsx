import React from 'react';

class Header extends React.Component {
  render() {
    let average = this.props.averageGrade();
    return (
      <div>
        <h1>Student Grade Table</h1>
        <h3>
          <span className={'badge badge-secondary float-right mt-2 mr-2'}>Average Grade:{average}</span>
        </h3>
      </div>
    );
  }
}
export default Header;
