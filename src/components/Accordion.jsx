import React, { useState } from 'react'
import data from "../components/data";
import "./style.css";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

export const Accordion = () => {

    const [selected, setSelected] = useState(null);


    const handleSingleQuestion = (getCuurentId) => {
        setSelected(getCuurentId === selected ? null : getCuurentId)
    };
    



  return (


    <div>
        <h2 style={{textDecoration: "underline", color: "red", fontWeight: "bold"}}>Accordion</h2>
        <div className='wrapper'>
            <div className='accordion'>
                {
                    data && data.length > 0 ? (
                        data.map((accorItem) => (
                            <div className='item' key={accorItem.id}>
                                <div className='title' onClick={() => handleSingleQuestion(accorItem.id)}>
                                    <h4>{accorItem.question}</h4>
                                    <span>{arrowIcon(accorItem.id)}</span>
                                </div>
                                {
                                    selected === accorItem.id ? (
                                        <div className='content'>{accorItem.answer}</div>
                                    ): null
                                }
                            </div>
                        ))
                    ):(
                    <div>Data not found</div>
                    )}
            </div>
        </div>
    </div>
  )
}
