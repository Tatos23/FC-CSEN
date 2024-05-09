import './Filter.css';
import { useState } from "react";

const Filter = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [season, setSeason] = useState('');

  return (
    <div className="create">
      <h2>Filter and Search</h2>
      <form>
        <label>Age:</label>
        <input 
          type="text" 
          required 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        
        <label>Gender:</label>
        <div className="gender-input">
                        <label htmlFor="male" style={{color: '#2C6B5A'}}>
                            <input type="checkbox" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)}/>
                            Male
                        </label>
                        <label htmlFor="female" style={{color: '#2C6B5A'}}>
                            <input type="checkbox" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                            Female
                        </label>
                    </div>

        <label>Season:</label>
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        >
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="">None</option>

        </select>
      </form>
    </div>
  );
}
 
export default Filter;