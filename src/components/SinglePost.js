import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'
import { useParams } from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(()=> {
        sanityClient
            .fetch(`*[slug.current == "${slug}"]{
            title, 
            _id,
            slug,
            mainImage {
                asset -> {
                    _id,
                    url
                }
            }, 
            body,
            "name": author -> name,
            "authorImage": author -> image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);
    if (!singlePost) return <div>No slugs</div>
    
    return (
        <div>
            <article>
                <header>
                    <div>
                        <div>
                            <h1>{singlePost.title}</h1>
                            <div>
                                <img 
                                src={urlFor(singlePost.authorImage).url()} 
                                alt={singlePost.name} />
                                <span>{singlePost.name}</span>
                            </div>
                        </div>
                        </div>
                        <img
                         src={singlePost.mainImage.asset.url} 
                         alt={singlePost.title} />
                </header>
                <div>
                    <BlockContent 
                    blocks={singlePost.body} 
                    projectId="3rpg2mk9" 
                    dataset="production"/>
                </div>
            </article>
        </div>
    )
}

export default SinglePost
