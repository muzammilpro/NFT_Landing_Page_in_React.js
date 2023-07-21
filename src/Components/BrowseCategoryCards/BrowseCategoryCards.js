import React from 'react'

export default function BrowseCategoryCards(props) {
    return (
        <div class="card bg-secondary bg-gradient" style={{width: "10rem"}}>
            <img src={props.scr} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-text text-white">{props.text}</p>
                </div>
        </div>
    )
}
