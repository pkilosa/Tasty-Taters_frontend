import React, {useEffect, useState} from 'react'
import like from '../assets/img/like-icon.png'
import chicken from '../assets/img/item-chicken.png'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, fetchFromLocalStorage, increaseCart, decreaseCart } from '../reducks/carts/operations'
import { getCarts } from '../reducks/carts/selectors'


export default function Item({item, setShowReview, setShowWriteReview, setSelectedId}) {
    const dispatch=useDispatch()
    const [selected_count,setSelected_count] = useState(0)
    const carts= useSelector(getCarts)
    const[temp, setTemp] = useState(false)

    useEffect(()=>{
        dispatch(fetchFromLocalStorage())
        
    },[])
    useEffect(()=>{
        if(carts[item.id]&& carts[item.id].selected_count){
            setSelected_count(carts[item.id].selected_count)
        }
        else{
            setSelected_count(0)

        }
    }, [carts, temp])
    console.log(selected_count)

    const handleAddCart =()=>{
        dispatch(addCart(item))
        setTemp(!temp)
    }
    const handleInc = ()=>{
       dispatch(increaseCart(item))
        setTemp(!temp)
    }
    const handleDec = ()=>{
        dispatch(decreaseCart(item))
        setTemp(!temp)
    }
    const handleShowReview = ()=>{
        setShowReview(true)
        setSelectedId(item.id)
        console.log(item.id)

    }
    const handleAddReview = ()=>{
        setSelectedId(item.id)
        setShowWriteReview(true)

    }

  return (
    <>
            <div class="items">
            <img src={`https://res.cloudinary.com/techis/${item.image}`} />
            <div class="details">
                <div class="like">
                    <img src={like} class="heart" alt="" />
                    <p>(0)</p>
                </div>
                <h2>{item.name}</h2>
                <div class="details-sub">
                    <div onClick={handleAddReview}>Write Review</div>
                    <div onClick={handleShowReview}>Check Review</div>
                </div>
                <div class="details-price">
                    {selected_count > 0 ?(
                        <div class='cart-btn'>
                            <span class='btn' onClick={handleInc}>+</span>
                            <span>{selected_count}</span>
                            <span class='btn' onClick={handleDec}>-</span>
                        </div>
                    ):(
<button 
onClick={handleAddCart}>
    Add To Cart</button>
                    )}
                    
                    <h3 class="price">${item.price}</h3>
                </div>
            </div>
        </div>
        </>
  )
}
