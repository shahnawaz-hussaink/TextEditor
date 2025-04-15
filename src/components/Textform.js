import React , {useState}from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase Was clickec");
        let newText = text.toUpperCase() ;
        setText(newText);
    };
    const handleLwClick = ()=>{
        console.log("Lowercase Was clickec");
        let newText = text.toLowerCase() ;
        setText(newText);
    };
    const handleClearTextClick = ()=>{
        console.log("Clear Text Was clickec");
        let newText = "";
        setText(newText);
    };
    const handleCapitalizeClick = () => {
        console.log("Capitalize was clicked");
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
    };    
    const handleOnChange = (event)=>{
        console.log("handle on change");
        setText(event.target.value); 
    };
    const [text,setText] = useState(""); // It will use for update text variable  on overall page we will not use traditional method to update text variable like this text = "ahdjfh" it wrong way to do in react , use function setText
    // setText("Enter text below"); // correc way to change/update text 

  return (
    <>
    <div className='container'>
        <div className="mb-3 my-3">
            <h1 >{props.head} </h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button className='btn btn-secondary mx-2 my-2' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-secondary mx-2 my-2' onClick={handleLwClick} >Convert to Lowercase</button>
        <button className='btn btn-secondary mx-2 my-2' onClick={handleClearTextClick} >Clear Text</button>
        <button className='btn btn-secondary mx-2 my-2' onClick={handleCapitalizeClick} >Capitalize </button>
    </div>
    <div className="container my-3">
        <h2>
            Your Text summary
        </h2>
        <p>
            {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
           It will take {(0.08)*text.split(" ").length} minutes to read.
        </p>
    </div>
    </>
  );
};
