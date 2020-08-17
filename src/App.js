import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import FlipMove from 'react-flip-move';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    // setMessages([...messages, {username: username , message: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100%h=100" />
      <h1>Hello Cupid programmer 🚀</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel >Enter a message....</InputLabel> */}
          <Input className="app__input" placeholder="Enter a message...." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}><SendIcon /></IconButton>
          {/* <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> */}
        </FormControl>
      </form>
      {<FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>}

    </div>
  );
}

export default App;
