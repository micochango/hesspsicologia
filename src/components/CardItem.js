import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './Cards.css'
import sanityClient from '../client'
import '../blog/schemas/post'


function CardItem() {
    // set state and query for information
    const [ postData, setPost ] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                excerpt,
                slug,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    return (
        <>
        {postData &&
         postData.map((post, index) => (
             <li className="cards__item" key={index}>
                <Link
                className='cards__item__link'
                target='_blank'
                to={'/blog/' + post.slug.current} key={post.slug.current}
                >
                
                        <figure 
                        className="cards__item__pic-wrap"
                        data-category={post.type}
                        >
                            <img 
                            src={post.mainImage.asset.url} 
                            alt={post.mainImage.alt} 
                            className="cards__item__img" />
                        </figure>
                        <div className="cards__item__info">
                            <h5 className="cards__item__text">
                                {post.excerpt}
                            </h5>
                        </div>
                 
                </Link>
            </li> 
         ))}
        </>
    )
}

export default CardItem
