import React from 'react';
import {Card} from '../component/card.component/card.jsx';
import './all_card_style.css';

function CardList(props){
return(
    <div className="card-list" >       
        {props.monsters.map( monster => (
               <Card key={monster.id} monster={monster}  />
        ) 
        )
        }
    </div>
)}

export default CardList;