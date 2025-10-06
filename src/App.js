import './App.css';
import {useState} from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const getImage = () => {
    if (inputValue.trim() === "") return;
    const url = `https://http.dog/${inputValue}.jpg`;
    setImage(url);
  };

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder='Enter the status code'
        value={inputValue}
        onChange={handleInputValue}
        style={{marginBottom: "10px"}}
        className="input-style"
      />
      <br />
      <button 
        className='button' 
        onClick={getImage}
      >
        Get the picture
      </button>
      <br />
      {image && 
        <img 
          src={image} 
          alt="Dog Image" 
          className="dog-image" 
        />
      }
    </div>
  );
}

export default App;