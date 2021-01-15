import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 7000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1>CALCUL IMC</h1>
      {submitting &&
       <div>
         
         <ul>
           
             <li>Poids = {formData.p} kg</li>
             <li>Taille = {formData.t} m</li>
             <li><strong>IMC = {parseInt(formData.t)/(parseInt(formData.t)*parseInt(formData.t))}</strong></li>
          
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Poids (en kg)</p>
            <input name="p" onChange={handleChange} value={formData.p || ''}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Taille (en m)</p>
            <input name="t" onChange={handleChange} value={formData.t || ''}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;