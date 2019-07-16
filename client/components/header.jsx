import React from 'react';

class Header extends React.Component {
  render() {
    let average = this.props.averageGrade();
    return (
      <div>
        <h1>Student Grade Table</h1>
        <h3>Average Grade:
          <span className={'badge badge-secondary'}>{average}</span>
        </h3>
      </div>
    );
  }
}
export default Header;
