import React from 'react'
import logo from '../assets/img/logo.png'
import bg_img from '../assets/img/bg-img.png'

export default function Header() {
  return (
    <>
        <div class="containers">
        <img class="test" src={logo} alt="" />
        <div class="background">
            <img src={bg_img} />
            <div class="text2">
                <p>To eat is necessity, <br />
                    <span> BUT TO EAT</span><br />
                    intelligently is an art.
                </p>
            </div>
        </div>

        <div class="menu">
            <h2 class="title"> Our Most Popular Recipes</h2>
            <p>Try Our Most Delicious foods and it usually takes minutes to deliver!
            </p>

            <div class="btn">
                <a href="#" target="_blank" class="btn btn-secondary">ALL</a>
                <a href="#" target="_blank" class="btn btn-secondary">HOT</a>
                <a href="#" target="_blank" class="btn btn-secondary">COLD</a>
                <a href="#" target="_blank" class="btn btn-secondary">BAGEL</a>
            </div>

        </div>
    </div>
    </>
  )
}
