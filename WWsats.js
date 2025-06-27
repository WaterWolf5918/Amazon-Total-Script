// ==UserScript==
// @name        WaterWolf's Amazon Total Script
// @namespace   https://waterwolf.net
// @match       https://www.amazon.com/hz/wishlist/*
// @grant       none
// @version     1.1
// @author      -
// @description 6/24/2025, 8:20:56 PM
// ==/UserScript==
// 1.1 -> Round to 2 decimal places for total
let total = 0;
const totalElDiv = document.createElement('div')
totalElDiv.classList.add('aok-float-right')
totalElDiv.innerHTML = `<span class="a-size-medium a-text-bold">Total: </span><span class="a-size-medium" id="WWsats-inject-total">$0.00</span><span class="a-letter-space"></span>`

const elLoaderTimer = setInterval(() => {
  const el = document.getElementById('wishlist-page')
  if (el == null) return
  clearInterval(elLoaderTimer)
  console.log("Element exists, getting prices.")
  document.querySelectorAll('#g-items .g-item-sortable').forEach(i => total += parseFloat(i.dataset.price))
  console.log("Creating new elements in the DOM.")
  document.querySelector('#wl-list-info .a-row').append(totalElDiv)
  document.getElementById('WWsats-inject-total').innerText = `$${total.toFixed(2)}`

},500)
