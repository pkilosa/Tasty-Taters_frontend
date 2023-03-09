import React, {useState} from 'react'
import good from '../assets/img/v-good.svg'
import excellent from '../assets/img/excellent.svg'
import dislike from '../assets/img/thumbs-down.svg'
import API from '../API'

export default function Writereview({showWriteReview, setShowWriteReview, selectedId}) {
  const [name, setName ]= useState('')
  const [body, setBody] = useState('')
  const [like_count, setLike_count] = useState()
  const item=selectedId
  const api = new API()
  const handleReview = () =>{
    api.addReview(name, body, like_count, item).then(review=>{
      setName('')
      setBody('')
      setLike_count(null)
    })
  }
  return (
    <section id="review" >
    <div class="close" onClick={()=>setShowWriteReview(false)}>
      X
    </div>
    <h1>Write Review</h1>
    <p>Choose your thought</p>
    <div class="like-btn">
      <div class="btn" onClick={()=>setLike_count(3)}>
        <img src={good} alt="" />
        <div>
          <h5>Good</h5>
          <p>(3 Likes)</p>
        </div>
      </div>
      <div class="btn" onClick={()=>setLike_count(5)}>
        <img src={good} alt="" />

        <div>
          <h5> Very Good</h5>
          <p>(5 Likes)</p>
        </div>
      </div>
      <div class="btn" onClick={()=>setLike_count(10)}>
        <img src={excellent} alt="" />

        <div>
          <h5>Excellent</h5>
          <p>(10 Likes)</p>
        </div>
      </div>
      <div class="btn" onClick={()=>setLike_count(0)}>
        <img src={dislike} alt="" />

        <div>
          <h5>NOT GOOD</h5>
          <p>(0 Likes)</p>
        </div>
      </div>
    </div>
    <div class="form">
      <input placeholder="Enter your name" type="text" onChange={(e)=>setName(e.target.value)} />
      <input placeholder='Enter your Feedback or Review'v type="text" onChange={(e)=>setBody(e.target.value)}  />
      <button onClick={handleReview}>Send Review</button>
    </div>
  </section>
  )
}
