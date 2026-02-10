import React, { useState } from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const user = dummyUserData;
    const location = useLocation();
    const [image,setImage]= useState('');

    const updateImage = async ()=>{
        user.image= URL.createObjectURL(image)
        setImage('')
    }
  return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 
    md:max-w-60 w-full border-r border-borderColor text-sm'>
      <div className='group relative'>
       <label htmlFor="image">
        <img className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto' src={image ? URL.createObjectURL(image) : user?.image || "https://www.google.com/imgres?q=virat%20kohli&imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5d7fa27ac591f01062106a9f%2Fd355ee04-655f-4f37-99bb-744d97a6bd1a%2FVirat%2BKohli.jpg&imgrefurl=https%3A%2F%2Fwww.thechakkar.com%2Fhome%2Fviratkohliretirement&docid=ALPg_qchZb8j0M&tbnid=N7A6-NLtApXcMM&vet=12ahUKEwjNmL7N4M6SAxXOS3ADHXdyDkoQnPAOegQIHxAB..i&w=1012&h=675&hcb=2&ved=2ahUKEwjNmL7N4M6SAxXOS3ADHXdyDkoQnPAOegQIHxAB"} alt="" />
        <input type="file" id='image' accept='image/*' hidden onChange={e=>setImage(e.target.files[0])} />
        <div className='absolute hidden top-0 left-0 right-0 bottom-0 
        bg-black/10 rounded-full group-hover:flex items-center justify-around cursor-pointer'>
            <img src={assets.edit_icon} alt="" />
       </div>
       </label>
      </div>
      {image && (
        <button className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 
        text-primary cursor-pointer'>Save <img src={assets.check_icon} width={13} alt="" onClick={updateImage} /></button>
      )}
      <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>
      <div className='w-full'>
       {ownerMenuLinks.map((link, index)=>(
        <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${link.path === location.pathname ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}>
            <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt="car icon" />
            <span className='max-md:hidden'>{link.name}</span>
            <div className={`${link.path === location.pathname && 'bg-primary'}
            w-1.5 h-8 rounded-l right-0 absolute`}></div>
        </NavLink>
       ))}
      </div>
    </div>
  )
}

export default Sidebar
