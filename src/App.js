import React from 'react';
import Contact from './Components/Contact'

const name = "Max Garrett"
const avatar = "https://randomuser.me/api/portraits/men/17.jpg"

function App() {
  return (
    <div className="App">
      <Contact
      name={name}
      isOnline
      avatar={avatar}
      />
      </div>
  );
}

export default App;
