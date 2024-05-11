import React from 'react'

const Tab = ({ children, label, handleRemove }) => {
    const style = {
        margin:'20px',
        fontSize: '16px',
    }
    return (
      <div style={style}>
        {children}
      </div>
    );
    };

export default Tab