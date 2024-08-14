import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [cardList, setCardList] = useState([]);
  const [input, setInput] = useState('');

  function addCard() {
    if (input) {
      setCardList([...cardList, input]);
      setInput('')
    }
  }
  console.log(cardList)
  const handleDragStart = (event) => {
    console.log('drag start');
    event.nativeEvent.target.classList.add("dragging");
  };

  const handleDragEnd = (event) => {
    console.log('drag end');
    event.nativeEvent.target.classList.remove("dragging");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    const draggable = document.querySelector('.dragging');
    const target = event.target;
    if (target.classList.contains('container')) {
      const originalParent = draggable.parentNode;
      originalParent.removeChild(draggable);
      target.appendChild(draggable);
    }
  };

  return (
    <div>
      <div className='add'>
        <input type='text' placeholder='Enter Card Name' value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={addCard}>Add Card</button>
      </div>
      <div className="container"
        onDragOver={handleDragOver}
      >

        {
          cardList.map((card, index) => {
            console.log(card)
            return <p
              className="draggable"
              draggable="true"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              key={index}
            >
              {index + 1} -- {card.slice(0,10)}.... 
              <button
               style={{padding:"5px 5px" ,
                borderRadius:"8px",
                 marginLeft:"10px", backgroundColor:"blue",
                  color:'white'}}
                  onClick={()=>alert(card)}>show more</button>
            </p>
          })
        }
      </div>

      <div className="container"
        onDragOver={handleDragOver}
      >

      </div>
    </div>
  );
};

export default App;