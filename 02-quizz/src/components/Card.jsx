import React, { useState , useEffect} from 'react'

export default function Card (props) {

const [answers, setAnswers] = useState([])
const [isSelect, setSelect] =useState(null)

useEffect(() => {
 setAnswers(props.answers)
},[]);

    return(
        <div className="container ">
        <p className="mt-4 text-center">{props.question}</p>
        <ul className="list-group list-group-horizontal-md justify-content-center">
        {answers.map((ans, i)=>(
          <li 
          className={(isSelect===i)? "list-group-item list-group-item-danger" : "list-group-item list-group-item-success"}
          key={i} 
          onClick={()=>{
            setSelect(i) 
            {props.selected(ans)}
            console.log(ans)
          }}
          >{ans}</li>
        ))}
      </ul>
      </div>
    )
}