import React from 'react'
import Axios from 'axios';
import {useEffect,useState} from 'react';
import { MDBCard, MDBRow } from 'mdb-react-ui-kit';
const Card = () => {
  const [article,setArticles]=useState([]);


  useEffect(() => {
    Axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-11-22&to=2022-11-22&sortBy=popularity&apiKey=f4ca6284049c475e8db8aca582590592').then((res)=>{console.log(res);
  setArticles(res.data.articles)
  })
  }, []);

  return (
    <>
  <div className='horizontal'>
    {
    article.map((ar,index)=>{if(index>2 && index<10){
      return(
        <MDBRow>
            <MDBCard>
        <div className='card-contnt'>
        <div className='img-container'>
            <img src={ar.urlToImage} alt="" />
        </div>
        <div><h6>{ar.title}</h6></div>
        <div><p>{ar.content}</p></div>
        <div><strong><p>{ar.author}</p></strong></div>
        </div>
        </MDBCard>
        </MDBRow>
      );}
    })  
    
  }
    </div>
    </>
  )
}

export default Card