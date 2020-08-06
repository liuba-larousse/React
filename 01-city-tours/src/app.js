import React, {useState} from 'react'
import Navbar from './components/header'
import Footer from './components/footer'
import Card from './components/card'
import cards from "./components/cards"


function App () {

const[cardsList, setList] = useState(cards)

function deleteCard (id) {
              const filteredCards = cardsList.filter((card)=>card.id !==id)
              setList(filteredCards)
      }

        return (
                <div>
                <Navbar />
<div className="container">
<div className="row">
                {cardsList.map((card)=>{
                        return (<Card 
                                key={card.id}
                                src={card.src}
                                name={card.name}
                                tour={card.tour}
                                description={card.description} 
                                remove={deleteCard}   
                                id={card.id}  
                        />)
                })}
                </div>
                </div>
                <Footer />
                </div>
        )
}

export default App;