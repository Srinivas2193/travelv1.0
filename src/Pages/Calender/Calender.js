import React,{useState} from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calender from './../../Assets/Images/calender.png'

const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (<div className='flex flex-col'>
    {/* //creates a calendar with decade view and navigate up to year view. */}
    <div className='py-16 flex flex-row max-w-full justify-around mt-5 flex-wrap'>
    <Calendar onChange={onChange} value={value} className='!w-[900px] p-5 rounded-[40px] shadow-lg' />
    <div>
      <img src={calender} alt='cal' className='p-5 rounded-[40px] shadow-lg' />
    </div>
  </div>

  <div>
  <h1 className="text-[34px] text-blue-500 font-bold text-center pl-3 underline">
        Plan Your Trip
      </h1>
<h1  className='text-[28px] mt-5 text-blue-500 font-semibold p-5'>
Planning a trip can be an exciting and overwhelming experience. To help make the process easier, here are some steps to consider when scheduling your trip:
</h1>
<div className='mt-5 p-10 marker:text-red-700'>
<ul className='list-disc text-2xl pl-3 space-y-4'>
  <li>
  <span className='font-bold text-blue-500'>Determine your budget:</span> Before you start planning, figure out how much money you can spend on your trip. This will help you narrow down your destination options and give you an idea of what kind of accommodations, activities, and dining options you can afford.
  </li>
  <li>
  <span className='font-bold text-blue-500'>Choose your destination:</span> Once you know your budget, start thinking about where you want to go. Consider factors like the season, weather, local events, and cultural attractions. If you're not sure where to go, do some research on popular travel destinations or ask friends and family for recommendations.
  </li>
  <li>
  <span className='font-bold text-blue-500'>Decide on travel dates:</span> Choose the dates you want to travel, taking into account any work or family commitments, as well as any events or festivals you want to attend at your destination. Be flexible with your travel dates if possible to take advantage of lower prices or better availability.
  </li>
  <li>
  <span className='font-bold text-blue-500'>Book your flights and accommodations:</span> Once you have your destination and travel dates, book your flights and accommodations. You can use travel websites or apps to compare prices and options, and consider staying in a hotel, hostel, vacation rental, or even camping depending on your budget and preferences.
  </li>
  <li>
  <span className='font-bold text-blue-500'>Plan your itinerary:</span> Decide on the activities and attractions you want to see and do at your destination, and make a rough itinerary. Consider including some free or low-cost activities to save money, and leave some flexibility in your schedule for spontaneous adventures or relaxation time.
  </li>
  <li>
  <span className='font-bold text-blue-500'>Pack your bags: </span> A few days before your trip, start packing your bags. Make a list of essential items you'll need, and check the weather forecast to pack appropriate clothing. Don't forget to bring any necessary travel documents, such as passports or visas.
  </li>
  <li>
  <span className='font-bold text-blue-500'>Enjoy your trip: </span> Once you're on your way, relax and enjoy your trip! Take lots of photos, try new foods, and immerse yourself in the local culture. Remember to stay safe and be respectful of the people and customs of the places you visit.
  </li>
</ul>
</div>
  </div>
  </div>
  )
}

export default Calender;

