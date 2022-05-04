import React from 'react'
import "./css/Navbar.css"
import "./css/App.css"

function Row({title,name}) {
  return (
    <div className="row">
    <h2>{name}</h2>
    <hr />
    <div className="row-posters">
    {title.map(item =>{
             return(
                <div className='ccard' key={item.image}>
                          <img src={item.image} alt="" className='imgg'/>
                          <p>{item.name}</p>
                           <p>{item.quantity}</p>
                          <div className='card-detail'>
                            <div className='card-detail-left'>
                            <h5>₹{item.price}</h5>
                            <del>₹{item?.delprice || item.price + 10}</del>
                            </div>
                            <div className='card-detail-right'>
                                  <button>ADD</button>
                            </div>
                          </div>    
               </div>
             )
           })}
      </div>
  </div>
  )
}

export default Row