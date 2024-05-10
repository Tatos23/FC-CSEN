import React from 'react'
import { useState } from 'react'
import OrgTemp from './OrgTemp'
import Tab from './Tab'
const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const [hoverTab, setHoverTab] = useState(null);
      const [tabs, setTabs] = useState(children);


    const buttonStyle = (label) => ({
     padding: '10px 15px',
     fontSize: '16px',
     border:'none',
     cursor: 'pointer',
     marginRight: '10px',
     backgroundColor: label === hoverTab ? 'lightgray' : 'white',
    });
    return (
        <div>
          <div>
            {children.map((child) => {
              const { label } = child.props;
    
              return (
                <button 
                  style={buttonStyle(label)} 
                  onClick={() => setActiveTab(label)}
                  onMouseEnter={() => setHoverTab(label)}
                  onMouseLeave={() => setHoverTab(null)}
                >
                  {label}
                </button>
              );
            })}
          </div>
    
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      );
}

export default Tabs