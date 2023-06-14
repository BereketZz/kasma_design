import React from 'react'
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css'
import inter3 from "../assets/inter3.jpg" 
import inter1 from "../assets/inter5.jfif" 
import graphic from '../assets/graphic.avif'
import blue from '../assets/blue.jpg'
import green from '../assets/green.jpg'
import yellow from '../assets/yellow.jpg'
import ag from '../assets/ag.jpg'
import workers from '../assets/workers.jpg'
import Home from './Home';
import Footer from './Footer';
import{Link} from 'react-router-dom'
function Other() {
  return (
   <>
   <Home/>
     

     <div >
       <div class="carousel-inner">
         <div className='conatiner'>
           
           
           <img src="https://www.home-designing.com/wp-content/uploads/2016/06/dark-and-sophisticated-interior-ideas.jpg" class="d-block w-100 h-50" alt="Wild Landscape"/>
           <div className='center'>
     
           <h2> Kasma Architect</h2>  
           <span>Building your Dreams with Creativity and Precision</span>
            
           </div>
         </div>
      
         
        
       </div>
     
     </div> <br/> <br/>
     
     
     <section id='service'>
     <h2 >OUR SERVICE</h2> <br/>  <br/>
     <div class="lightbox" style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
       <div class="row" style={{width:"60%"}}>
         <div className="col-lg-6">
           <div className='img-cont-one'>
           <img
             src={green}
             data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
             alt="Table Full of Spices"
             className="w-100  shadow-1-strong rounded"
           />
           <div className='inside-one'> <h2>Interior Design</h2></div>
     
           </div> <br/>
           
           <div className='img-cont-one'>
           <img
             src={graphic}
             data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
             alt="Coconut with Strawberries"
             class="w-100 shadow-1-strong rounded"
           />
           <div className='inside-one'> <h2>Graphics Design</h2></div>
           
           </div> <br/>
          
           
         </div>
         <div class="col-lg-6">
           <div className='img-cont-one'>
           <img
             src={blue}
             data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
             alt="Dark Roast Iced Coffee"
             class="w-100 shadow-1-strong rounded"
           />
            <div className='inside-one'> <h2>Furniture</h2></div>
           </div>
           
         </div>
     
     
       </div>
     </div>
     </section>
     
     
     <br/> <br/>
     <section className='project-cont' id="portfoli">
       <br/><br/>
      <h2>OUR PORTFOLIO</h2> <br/>
     
      <section style={{color:"#000", backgroundColor:"#f3f2f2"}} >
       <div class="container py-5">
         
     
         <div class="row text-center">
           <div class="col-md-4 mb-4 mb-md-0">
           <div class="card">
                   <img
                     src={yellow}
                     class="card-img-top"
                     alt="Waterfall"
                   />
                   <div class="card-body">
                     <h5 class="card-title">Project-1</h5>
                     <p class="card-text">
                       Some quick example text to build on the card title and make up the bulk
                       of the card's content.
                     </p>
                     <Link className="btn " style={{border:"2px solid black", }} to="/project-1">see more</Link>
                   
                   </div>
                 </div>
           </div>
           <div class="col-md-4 mb-4 mb-md-0">
           <div class="card">
                   <img
                     src={inter1}
                     class="card-img-top"
                     alt="Sunset Over the Sea"
                   />
                   <div class="card-body">
                     <h5 class="card-title">Project-2</h5>
                     <p class="card-text">
                       Some quick example text to build on the card title and make up the bulk
                       of the card's content.
                     </p>
                     <a href="#!" class="btn " style={{border:"2px solid black"}}>see more</a>
                   </div>
                 </div>
           </div>
           <div class="col-md-4 mb-0">
           <div class="card">
                   <img
                     src={ag}
                     class="card-img-top"
                     alt="Sunset over the Sea"
                   />
                   <div class="card-body">
                     <h5 class="card-title">project-3</h5>
                     <p class="card-text">
                       Some quick example text to build on the card title and make up the bulk
                       of the card's content.
                     </p>
                     <a href="#!" class="btn " style={{border:"2px solid black"}}>see more</a>
                   </div>
                 </div>
           </div>
         </div>
       </div>
     </section>
     
     <br/><br/>
     
     </section> <br/><br/><br/>
     
     <section  id='about'>
     <br/><br/>
     <h2>ABOUT US</h2> <br/><br/>
     
     <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
     <div class="card mb-3" style={{maxWidth:"940px",maxHeight:"550px"}} >
       <div class="row g-0">
         <div class="col-md-4">
           <img
             src={workers}
             style={{height:"300px", width:"100%"}}
             alt="Trendy Pants and Shoes"
             class="img-fluid rounded-start"
           />
         </div>
         <div class="col-md-8" >
           <div class="card-body">  
             <h5 class="card-title">About Kasma</h5> <br/>
             <p class="card-text" style={{textAlign:"justify"}}>
             Established in 2014 E.C, Kasma Interiors is an interior design firm based in Arbaminch, Ethiopia 
             focuses on creating spaces on Functional, aesthetic, sustainable philosophical bases that
              improve engagement between people and their surroundings. 
             </p>
         
           </div>
         </div>
       </div>
     </div>
     
     </div>
     
     </section><br/><br/>
     
     <section id='contact'>
     <br/><br/>
     <h2>CONTACT US</h2><br/><br/>
     
     
     <div className="sub-contact"   >
     
          
     <div className="row" style={{ display:"flex", justifyContent:"center", alignItems:"center",border:"1px solid white" , padding:"20px"}}  >
     <form class=" col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"  style={{width:"50%"}}>
     
     <div class="form-outline mb-4">
     <input type="text" id="form4Example1" class="form-control" />
     <label class="form-label" for="form4Example1" >Name</label>
     </div>
     
     <div class="form-outline mb-4">
     <input type="email" id="form4Example2" class="form-control" />
     <label class="form-label" for="form4Example2" >Email address</label>
     </div>
     
     
     <div class="form-outline mb-4">
     <textarea class="form-control" id="form4Example3" rows="4"></textarea>
     <label class="form-label" for="form4Example3" >Message</label>
     </div>
     
     
     
     
     
     <button type="submit" class="btn  btn-block mb-4" style={{border:"2px solid black", backgroundColor:"black", color:"white"}}>Send</button>
     </form>
     
     <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{backgroundColor:"",}}>
      
       
       <p><i class="fas fa-home me-3 text-secondary" ></i>Arbaminch Ethiopia</p>
       <p>
         <i class="fas fa-envelope me-3 text-secondary"></i>
         kasma@gmail.com
       </p>
       <p><i class="fas fa-phone me-3 text-secondary" ></i>   +251   945637782</p>
     
     </div>
     </div>
     
     
     
     </div>
     
     </section>
     
       
     
     
     
     
     
     <br/><br/>
     
     
     <Footer/>
     
   
   
   </>
  )
}

export default Other
