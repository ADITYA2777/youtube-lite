import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../context/contextApi';
import { fetchDataFromApi } from '../utils/api';
import LeftNav from './LeftNav';

const SearchResults = () => {

  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setloading } = useContext(context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custome-h")
    fetchSearchApi;
  },[searchQuery])
  
  const fetchSearchApi = () => {
    setloading(true)
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setloading(false)
    })
  }
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav/>
    </div>
  )
}

export default SearchResults