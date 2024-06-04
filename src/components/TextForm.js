import React, { useState } from 'react';

const TextForm = (props) => {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("uppercase done", "success")
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("lowercase done", "success")
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("text cleared","success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("remove extra space", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : '#042743',
          }}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>Your Summary</h1>
        <p>
          {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').filter((element) => {return element.length !== 0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview '}</p>
      </div>
    </>
  );
};

export default TextForm;
