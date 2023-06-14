import React from 'react'
import graphic from '../assets/graphic.avif'
import blue from '../assets/blue.jpg'
import green from '../assets/green.jpg'
import yellow from '../assets/yellow.jpg'
import Home from '../pages/Home'
import Footer from '../pages/Footer'
import '../App.css'

function Project1() {
  return (
    <div>
      <Home/> <br/>
      <div class="lightbox" style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
  <div class="row" style={{width:"60%"}}>
    <div className="col-lg-6">
      <div className=''>
      <img
        src={green}
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
        alt="Table Full of Spices"
        className="w-100  shadow-1-strong rounded"
      />
      

      </div> <br/>
      
      <div className=''>
      <img
        src={graphic}
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
        alt="Coconut with Strawberries"
        class="w-100 shadow-1-strong rounded"
      />
      
      </div> <br/>
     
      
    </div>
    <div class="col-lg-6">
      <div className=''>
      <img
        src={blue}
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
        alt="Dark Roast Iced Coffee"
        class="w-100 shadow-1-strong rounded"
      />
      </div> <br/> 
      <div className=''>
      <img
        src={yellow}
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
        alt="Dark Roast Iced Coffee"
        class="w-100 shadow-1-strong rounded"
      />
      </div>
      
    </div>


  </div>
</div> <br/> <br/>
<h2>Project Description</h2>
<div className='desc-part' >
    
    < p >
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ratione doloribus iste autem, amet quibusdam eligendi ab magnam mollitia aliquid laborum eveniet distinctio quidem placeat itaque quos, facere voluptatum alias!
      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima sequi explicabo quod expedita eos ipsa porro suscipit, praesentium consequatur neque ad eligendi tempore quidem laudantium consequuntur, saepe autem maxime vel adipisci est nostrum perferendis. Vitae hic quisquam laboriosam similique quibusdam veniam expedita mollitia earum, cum consectetur corporis ea nam.
    </p>
</div> <br/><br/>
<Footer/>
    </div>
  )
}

export default Project1
