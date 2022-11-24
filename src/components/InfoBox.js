import React from 'react'
import Axios from 'axios';
import {useEffect,useState} from 'react';
import { MDBCard } from 'mdb-react-ui-kit';
const InfoBox = () => {
const [article,setArticles]=useState([]);


  useEffect(() => {
    Axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4ca6284049c475e8db8aca582590592').then((res)=>{console.log(res);
  setArticles(res.data.articles)
  })
  }, []);
  return (
    <div>
         {
    article.map((ar,index)=>{if(index>8){
      return(
        <div className='box'>
        <div className='infobox'>
        <div><h3>{ar.title}</h3></div>
        
        <div><p>{ar.content}</p></div>
        
        <div><h4>{ar.author+'. Daily Beast'}</h4></div>
        
        </div>
        <div className='imgbox'>
         <img src={ar.urlToImage} alt="" />

        </div>
        </div>
      );
    }
    })  
    
  }
    </div>
  )
}

export default InfoBox