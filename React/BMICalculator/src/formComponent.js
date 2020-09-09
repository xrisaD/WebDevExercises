import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default function FormComponent(props) {
  const [ h, setH ] = useState(0);
  const [ w, setW ] = useState(0);

  function handleH(e){
    setH(e.target.value);
  }
  
  function handleW(e){
    setW(e.target.value);
  }

  function handleSubmit(e) {
    if(w !== '' && h !== '') {
      props.handleSubmit(h,w);
    }
    e.preventDefault();
  }

  return (
    <div id="box2">
    <form onSubmit={handleSubmit}>
      <label>Height(m):</label><br/>
      <input type="number" onChange={handleH} value={h}/><br/>
      <br/>
      <label>Weight(kg):</label><br/>
      <input type="number" onChange={handleW} value={w}/><br/>
      <br/>
      <button type="submit">Calculate</button>
    </form> 
  </div>);
}