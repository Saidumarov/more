import React, { useEffect, useState } from 'react'
import "./api.css"

const Api = () => {


    const [state, setState] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                setState(json)
                console.log(state);

            })
    }, [])

    function of() {
        {
            const divElement = document.querySelectorAll("span")
            divElement.forEach((element) => {
                element.classList.toggle("active")
            });
        }


        {
            const divElements = document.querySelectorAll(".of")
            divElements.forEach((element) => {
                element.classList.toggle("active")
            });
        }
 
    }
   

    return (
        <div>
            <div className="ress">
                {state.map(itme => (
                    <div className="of">
                        <div className="res">
                            <p>{itme.body}</p> <span> ....</span>
                            <button class="bb" onClick={of} >boss</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Api
