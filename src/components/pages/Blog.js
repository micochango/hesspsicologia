import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'

function Blog(){
    return(
        <>
            <div className='page__container blog' id="blog">
                <h2>Artículos de interés</h2>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem />
                    </ul>
                    <ul className="cards__items">
                        <CardItem />
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Blog;

