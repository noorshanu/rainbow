import React from 'react'
import {FaYoutube,FaFacebookSquare,FaInstagram,FaTwitter} from 'react-icons/fa'
import Marquee from "react-fast-marquee";

function SocialMedias() {
  return (
<section>
    <div className='container-wrapper'>
        <div className='bg-[#FFD200] px-8 rounded-3xl'>
            <div className=' text-center py-8'>
                <h1 className='fredok-font text-center text-3xl font-semibold  uppercase text-black'>Follow us on social medias</h1>
                <p className=' fredok-font text-2xl text-black font-medium pt-4'>Rainbow_official</p>
                <div className=' bg-white rounded-full py-2 px-2 flex justify-center gap-5 items-center mx-auto max-w-[230px] mt-5'> 
                <a href="/"> <FaYoutube className='text-[#FF3000] text-3xl'/></a>
                <a href="/" className=''><FaFacebookSquare className='text-[#337FFF] text-2xl'/></a>
                <a href="/"><FaInstagram className='text-[#8AA3FB] text-2xl'/></a>
                <a href="/"><FaTwitter className='text-[#33CCFF] text-2xl'/></a>

                </div>
            </div>
            <div className=' pb-5'>
                <Marquee>
                    <img src="images/poster/img1.png" alt="" className='mx-2' />
                    <img src="images/poster/img2.png" alt=""  className='mx-2' />
                    <img src="images/poster/img3.png" alt=""  className='mx-2' />
                    <img src="images/poster/img4.png" alt=""  className='mx-2' />
                    <img src="images/poster/img5.png" alt=""  className='mx-2' />
                </Marquee>
            </div>

        </div>

    </div>
</section>
  )
}

export default SocialMedias