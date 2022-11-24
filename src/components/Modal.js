import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

const Modal = () => {
    const [scrollableModal, setScrollableModal] = useState(false);

    const [article,setArticles]=useState([]);
  
  
    useEffect(() => {
      Axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-11-22&to=2022-11-22&sortBy=popularity&apiKey=f4ca6284049c475e8db8aca582590592').then((res)=>{console.log(res);
    setArticles(res.data.articles)
    })
    }, []);
  
    return (
      <>
      <div className="text-center fixed-bottom">
        <MDBBtn  rounded className='mx-2' color='danger' onClick={() => setScrollableModal(!scrollableModal)} >Explore</MDBBtn>
        </div>
        <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
          <MDBModalDialog scrollable>
            <MDBModalContent>
              <MDBModalHeader>
                
                <MDBBtn
                  className='btn-close'
                  color='none'
                  onClick={() => setScrollableModal(!scrollableModal)}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
              <MDBCard>
      {
      article.map((ar,index)=>{if(index>2 && index<27){
        return(
          <MDBCardBody >
          
              <MDBCardImage src={ar.urlToImage}  className='img-thumbnail' alt="" />
          
          <MDBCardTitle><h3>{ar.title}</h3></MDBCardTitle>
          <MDBCardText><p>{ar.content}</p></MDBCardText>
          <MDBCardSubTitle><h4>{ar.author}</h4></MDBCardSubTitle>
          </MDBCardBody>
        );}
      })  
      
    }
      </MDBCard>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                  Close
                </MDBBtn>
                <MDBBtn>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
}

export default Modal