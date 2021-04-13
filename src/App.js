import React from 'react';
import { Container } from 'react-bootstrap';
import Head from './components/head/head';
import './App.css';
import Skills from './components/skills/skills';
import Works from './components/works/works';

function App(props) {
  return (
    <Container className='content'>
      <Head />
      <Skills examples={props.state.examples} />
      <Works works={props.state.works} />
    </Container>
  );
}

export default App;
