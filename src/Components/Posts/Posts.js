import React,{useEffect,useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../Store/FirbaseContext';
import { PostContext } from '../../Store/postContext';

function Posts() {
  const navigate=useNavigate()
  const {firebase}=useContext(FirebaseContext);
  const [product,setProduct]=useState([])
  const{setPostdetails}=useContext(PostContext);
  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost=snapshot.docs.map((obj)=>{
        return{
          ...obj.data(),
          id:obj.id
        }
      })
      setProduct(allPost)
    })
  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {product.map(product=>{
            return <div onClick={()=>
              setPostdetails(product)& navigate('/view')            
            }   
              className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          })}
        
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
