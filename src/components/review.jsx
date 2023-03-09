import React, { useEffect, useState } from 'react'
import good from '../assets/img/v-good.svg'
import excellent from '../assets/img/excellent.svg'
import dislike from '../assets/img/thumbs-down.svg'
import API from '../API'

export default function Review({selectedId, setShowReview, showReview, setSelectedId}) {
  const [reviews, setReviews] = useState([])
  const api = new API()


  useEffect(() => {
    api.getReviews(selectedId).then((reviews) => {
      setSelectedId(null);
      setReviews(reviews);
    });
  }, []);

  return (
    <section id="review" >
    <div class="close" onClick={()=>setShowReview(false)}>
      X
    </div>
    <p>Reviews for <em>"American Food"</em></p>
    <div class="like-btn">
      <div class="btn">
        <img src={good} alt="" />
        <div>
          <h5>Good</h5>
          <p>(15 Likes)</p>
        </div>
      </div>
      <div class="btn">
        <img src={good} alt="" />

        <div>
          <h5> Very Good</h5>
          <p>(15 Likes)</p>
        </div>
      </div>
      <div class="btn">
        <img src={excellent} alt="" />

        <div>
          <h5>Excellent</h5>
          <p>(15 Likes)</p>
        </div>
      </div>
      <div class="btn">
        <img src={dislike} alt="" />

        <div>
          <h5>NOT GOOD</h5>
          <p>(15 Likes)</p>
        </div>
      </div>
    </div>
    <div class="content">
      {reviews && reviews.length> 0 ? reviews.map(review=>(
        <div class="form-response">
      <h1>{review.name}</h1>
      <p>{review.body}</p>
      <hr />
    </div>
      )):(
        <div class="form-response">
          <br /><br />
          <p>No Review Available</p>
      <hr />
    </div>
      )}
     
   
    
    </div>
    
  </section>
  )
}
