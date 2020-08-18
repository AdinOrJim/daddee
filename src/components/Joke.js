import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import axios from 'axios';
import './joke.css';
import smirky from '../smirk.png';


const Joke = () => {
    
    const [joke, setJoke] = useState('');

    useEffect(() =>{
        fetchJoke();
    }, []);

    const fetchJoke = () => {
        axios
        .get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'},})
        .then(res => setJoke(res.data))
        .catch(err => console.log(err))
    }
    return (
        <div className="joke text-center font-weight-bold">
            <Card bg='light'>
  <Card.Header>¯\_(ツ)_/¯</Card.Header>
  <Card.Body>
    <Card.Text className="joketext">
      {joke.joke}
    </Card.Text>
    <Button className="jokebut" variant="primary" onClick={fetchJoke}>Hit me daddy one more time!!<span><img className="smirky" src={smirky}/></span></Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Joke
