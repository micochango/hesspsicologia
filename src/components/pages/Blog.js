import React from 'react'
import '../../App.css'
import Cards from '../Cards'

function Blog(){
    return(
        <>
            <div className='page__container blog' id="blog">
                <Cards title='Articulos de interés'/>
            </div>
        </>
    );
}

export default Blog;