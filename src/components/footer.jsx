import React from 'react'
import logo from '../assets/img/logo.png'

export default function Footer() {
  return (
    <footer>
    <img src={logo} />
    <div class="bottom">
        <h2 class="conclude"> Premium Quality food at the best and most afforable prices.
            we have a new offer everyday for 365 days
        </h2><br />
        <p><strong>Contact:</strong></p>
        <p> Email: quickfood@tastytaters.com|Hotline + 131 138 138 </p><br/><br  />
        <hr/>
        <p class="conclude">
            DESIGN BY TASTY TATERS - © 2022. ALL RIGHTS RESERVED.
        </p>
    </div>
</footer>
  )
}
