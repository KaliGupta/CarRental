import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Star = ({ filled }) => {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

const testimonials = [
  {
    
    name: "Surbhi Mehta",
    location: "New delhi, INDIA",
    image: assets.testimonial_image_1,
    review: "I've rented cars from various companies, but he experience with car rental was exceptional."
  },
  {
    
    name: "Shina Malhotra",
    location: "Maharastra, INDIA",
    image: assets.testimonial_image_2,
    rating: 5,
    review: "CarRental made my trip so much easier . The car was delivered right to my door , ad the customer service was fan" 
    },
  {
    
    name: "Aarvi Sharma",
    location: "uttar Pradesh, INDIA",
    image: assets.testimonial_image_1,
    rating: 4,
    review: "I highly recomended CarRental ! Their fleet is amazing , and I always feel like i'm getting the best deal with excellent service"
  }
]

const Testimonial = () => {
  return (
    <div>
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

            <Title title="What Our Customers Say" subTitle="Discover why discerning travelers choose our car rental service for 
            their transportation needs around the world."/>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial , index ) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">


                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                              <img key = {index} src ={assets.star_icon} alt="star-icon"/>
                              
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    
    </div>
  )
}

export default Testimonial