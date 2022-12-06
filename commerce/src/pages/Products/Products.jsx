import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import './Products.scss'

const Products = () => {

  const catId  = parseInt(useParams().id);
  console.log('cat', catId);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  console.log('data', data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter((item) => item !== value ));
  }

  console.log('slc', selectedSubCat);

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          ))}
          
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={100000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={(e) => setSort('asc')} />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc" value="desc" onChange={(e) => setSort('desc')} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        {catId === 2 ? (<img src="https://images.pexels.com/photos/940302/pexels-photo-940302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='catImg' />) : (catId === 1 ? (<img src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='catImg' />) : (<img src="https://images.pexels.com/photos/2766334/pexels-photo-2766334.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='catImg' />))}
        <List catId={catId} maxPrice={maxPrice} sort={sort} selectedSubCat={selectedSubCat} />
      </div>
    </div>
  )
}

export default Products