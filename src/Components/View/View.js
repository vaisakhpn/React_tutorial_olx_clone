import React, { useEffect,useState,useContext } from 'react';
import './View.css';
import Header from '../Header/Header';
import { PostContext } from '../../Store/postContext';
import { FirebaseContext } from '../../Store/FirbaseContext';
function View() {
  
  const [userDetails,setUserdetails]=useState('')
  const {postDetails}=useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  
  useEffect(()=>{
    
    const {userId}=postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserdetails(doc.data())
      })
    })}
  ,[])
  return (
    <>
    <Header/>
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetails &&<div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
    </>
  );
}
export default View;
