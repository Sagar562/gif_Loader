import React from 'react'
import { useEffect } from 'react';
import Spinner from './Spinner';
import { useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const TagGif = () => {

  const [gif,setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('');

  async function fetchData () {

    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    
    const {data} = await axios.get(url);
    const imgPath = data.data.images.downsized_large.url;
    setGif(imgPath);
    setLoading(false);
  }

  useEffect ( () => {
      fetchData();
  },[]);

  function clickHandler () {
      fetchData();
  }

  return (
    <div className='w-[800px] flex flex-col gap-y-5 items-center border pt-3 pb-4 border-black rounded-lg bg-green-500'>
        
        <h1 className="font-bold text-3xl underline uppercase">Random {tag} Gif</h1>
        
        {
          loading ? (<Spinner/>) : (<img src={gif} alt='gifImg' width={450}/>)
        }

        <input className="w-10/12 text-2xl rounded-lg py-1 text-center"
          type='text'
          onChange={(event) => setTag(event.target.value)}
          value={tag}
        />

        <button onClick={clickHandler} className="bg-green-100 w-10/12 transition-all 
        duration-300 hover:bg-green-200 rounded-lg text-2xl py-1 ">
          Generate Gif
        </button>

    </div>
  )
}

export default TagGif