import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const { data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    console.log('data', data);

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, consectetur quia maxime aliquam id quaerat modi doloremque eveniet dolorum, tempore libero distinctio consequuntur nam hic nemo. Recusandae excepturi tempore suscipit dignissimos, exercitationem soluta iure quo repellat quidem delectus cupiditate eum quos repudiandae odit error incidunt illo. Beatae necessitatibus aspernatur optio?</p>
            </div>
            <div className="bottom">
                {error ? 'something wrong' : loading ? "Loading..." : data?.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts