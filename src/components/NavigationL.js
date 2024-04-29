// import './NavigationL.css'; // Importing CSS for styling
import React from 'react';
import Dropdown from 'react-dropdown';

const NavigationL = () => {
    const options = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two', className: 'myOptionClassName' },
        {
         type: 'group', name: 'group1', items: [
           { value: 'three', label: 'Three', className: 'myOptionClassName' },
           { value: 'four', label: 'Four' }
         ]
        },
        {
         type: 'group', name: 'group2', items: [
           { value: 'five', label: 'Five' },
           { value: 'six', label: 'Six' }
         ]
        }
      ];

  return (
    <div className="App">
      <h1>My React Navigation</h1>
      <Dropdown options={options} />
    </div>
  );
};

export default NavigationL;
