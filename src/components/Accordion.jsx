import React, { useState } from 'react'
import data from "../components/data";
import "./style.css";

export const Accordion = () => {

    const [selected, setSelected] = useState(null);

  return (
    <div>
        <h2 style={{textDecoration: "underline", color: "red", fontWeight: "bold"}}>Accordion</h2>
        <div className='wrapper'>
            <div className='accordion'>
                {
                    data && data.length > 0 ? (
                        data.map((accorItem) => (
                            <div className='item'>
                                <div className='title' onClick={""}>
                                    <h4>{accorItem.question}</h4>
                                    <span>+</span>
                                </div>
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
