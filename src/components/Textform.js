
import React ,{useState} from 'react'


export default function Textform(props) {
    const handleUppercaseclick=()=>
    {
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLocaseclick=()=>
    {
        console.log("uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>
    {
        console.log("on change");
        setText(event.target.value);
    }
    
    const [text,setText]= useState('');
    console.log(useState('enter text here2'));
  return (
    <>
  <div className="container"> 
<div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control"  value ={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUppercaseclick}>convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLocaseclick}>convert to lowercase</button>

</div> 
<div className="container my-2" >
  <h1>your text summary</h1>
  <p>{text.split(" ").length-1} words and {text.length} charachtetrs</p>
  <p>{0.008*text.split(" ").length} minutes to read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
  
</>
  );
}
