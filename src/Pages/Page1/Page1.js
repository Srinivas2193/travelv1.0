import React from 'react'
// import Carousel from 'react-multi-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
// import img1 from './../../Assets/Images/img1.jpg'
// import img2 from './../../Assets/Images/img2.jpg'
// import img3 from './../../Assets/Images/img3.jpg'
// import img4 from './../../Assets/Images/img4.jpg'
// import img5 from './../../Assets/Images/img5.png'
import Items from './../Data/items.json';
import './Page1.css'
import { useNavigate } from 'react-router-dom';


const Page1 = () => {
  const navigateTo=useNavigate();
  // const mainCarousel=[
  //   {img:img1, id:1},
  //   {img:img2, id:2},
  //   {img:img3, id:3},
  //   {img:img4, id:4},
  //   {img:img5, id:5}]
  return (
    <div className='pb-9'>
      <h1 className='text-[50px] text-blue-500 font-bold text-center py-4 mt-12'>
      Most Visited Destinations
      </h1>
      <div className='flex flex-row justify-center items-center'>
       <Carousel showArrows={true} autoPlay={true} showThumbs={false} infiniteLoop={true} className="w-[1300px] h-[745px] text-center shadow-xl">
      {Items.mainCarosualImages.map((value, i) => {
        return (
          <div key={i}>
              <img src={value.image} alt="img"  className='!w-[1300px] !h-[745px]'/>
          </div>
        );
      })}
    </Carousel>
    </div>
    <h1 className='m-[100px] text-center font-bold text-[40px]'><span className='bg-indigo-200 p-5 rounded-2xl'>Famous Places In India</span></h1>
    <div className='flex flex-row justify-center gap-[77px] flex-wrap items-center'>
      
      {Items.page1Cards.map((val, i)=>{
        return(
          <div key={i} className="relative w-[448px] h-[622px] rounded-2xl shadow-lg cursor-pointer" onClick={()=>navigateTo('/destinations/detailpage',{state:val})}>
            <img src={val.image}  alt={val.title} className="w-[448px] h-[622px] rounded-2xl shadow-lg  transition duration-300 ease-in-out hover:scale-110"/>
            <div className="absolute left-[167px] rounded-2xl bg-orange-300 w-[140px] py-3 bottom-[87px] inset-x-0 text-white text-lg font-bold text-center leading-4">
              <p>{val.amount}</p>
            </div>

            <div className="absolute left-[164px] py-3 bottom-[17px] inset-x-0 text-white">
              <p className='mt-[20px] font-bold text-[30px] w-fit'>{val.title}</p>
            </div>
          </div>
        )
      })}
    <h1 className='m-[100px] text-center font-bold text-[40px]'><span className='bg-indigo-200 p-5 rounded-2xl'>Most Visited Places In India</span></h1>

<div className='flex flex-row justify-start flex-wrap gap-[33px] items-center m-2'>
  {Items.mostVisitedPlaces.map((val,i)=>{
    return(
      <div key={i} className='rounded-2xl'>
        <img src={val.image} alt={val.title} className='rounded-2xl shadow-xl'/>
      </div>
    )
  })}
</div>

    </div>
     </div>

  )
}

export default Page1