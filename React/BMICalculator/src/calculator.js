import React, {useState} from "react";
import "./style.css";
import FormComponent from "./formComponent";
import ResultComponent from "./resultComponent";

export default function FormComponent(props) {
  const [ mes, setMes ] = useState("Let's start...");

  function computeBMI(h,w){
    const b = null;
    if(w!=0){
      b = w/Math.pow(h,2);
    }

    if(b == null){
      setMes("Enter your data...");
    }else if(b == 0){
      setMes("Ooops...");
    }else{
      const cat = "";
      if(b<=15){
        cat = "Very severely underweight"
      }else if(b<=16){
        cat = "Severely underweight"
      }else if(b<=18.5){
        cat = "Underweight"
      }else if(b<=25){
        cat = "Normal"
      }else if(b<=30){
        cat = "Overweight"
      }else if(b<=35){
        cat = "Obese Class I"
      }else if(b<=40){
        cat = "Obese Class II"
      }else{
        cat = "Obese Class III "
      }
      setMes("Your BMI is... "+b+". Your category is: "+cat);
    }
  }
  return (
    <div>
    <FormComponent handleSubmit={computeBMI}/>
      <div id = "box1">
      <h3>
        { mes }
      </h3>
      </div>
  </div>);
}
