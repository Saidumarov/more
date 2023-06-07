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
        
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', e => {
                e.target.parentNode.classList.toggle('active');         
            
            })
            
})
    }
    of()
    return (
        <div>
            <div className="ress">
                {state.map(itme => (
                    <div className="of">
                        <div className="res">
                            <p>{itme.body}</p>
                            <button class="bb" onClick={of} >boss</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Api
