import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';
import axios from 'axios';
import { db } from '../firebase';

function TinderCards() {

    const [interestedInGender, setInterestedInGender] = useState('');
    const [people, setPeople] = useState([]);

    // fetching once people api and populate the firestore db 

    // useEffect( async () => {
    //     const users = await axios.get(`https://randomuser.me/api/?results=200&gender=female`)
    //     .then((response) => response.data.results)
    //     .then(users => users.map(user => (
    //         db.collection("people").add(
    //         { 
    //             name: user.name.first + " " + user.name.last,
    //             url: user.picture.large,

    //         }
    //         ))
    //     )) 
    // },[])

    useEffect(() => {
       const unsubscribe = 
       db.collection("people").onSnapshot(snapshot => (
           setPeople(snapshot.docs.map(doc => doc.data()))
       ))
       console.log(people)
       
       return () => {
           // cleanup 
           unsubscribe();
       }
    },[]);

    return (
        <Div>
           
            <div className="cardContainer">
            {people.map((person) => (
                <TinderCard
                           className="swipe"
                           key={person.name}
                           preventSwipe={['up', 'down']}
                           >
                    <div   style={{ backgroundImage:`url(${person.url})` }}
                           className="card">
                           <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </Div>
    )
}

export default TinderCards;

const Div = styled.div`
.cardContainer{
    display: flex;
    justify-content: center;
    margin-top: 5vh;
}

.card{
    position: relative;
    object-fit: contain;
    width: 350px;
    padding: 20px;
    max-width: 85vw;
    height: 50vh;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    /* box-shadow: 0px 18px  53px 0px rgba(0, 0, 0, 0.3); */

    h3{
        position: absolute;
        bottom: 10px;
        color: white;
    }
}

.swipe{
    position: absolute;
}
`