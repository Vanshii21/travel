import React from 'react'
import './Main.css'
import img from '../../assets/img1.jpg'

const Data=[
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora',
    location:'NewYork',
    grade:'Cultural relax',
    fees:'$500',
    description:'visiting'
  },
  // {
  //   id:2,
  //   imgSrc:img,
  //   destTitle:'rrrr',
  //   location:'NewYork',
  //   grade:'Cultural relax',
  //   fees:'$500',
  //   description:'visiting'
  // },
]

export const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'>
       <h3 className='title'>Most Visited Destinations</h3>
      </div>
<div className='seeContent grid'>
  {
    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
      return(
        <div key={id} className='singleDestination'>
          <div className='imageDiv'>
            <img src={imgSrc} alt={destTitle}/>
          </div>
          <div className='cardInfo'>
            <h4 className="destTitle"></h4>
        </div>
        </div>
      
      )
    })
  }
</div>


    </section>
  )
}
export default Main