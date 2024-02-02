import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyHobby() {
  return (

    <div className='hobby-Main'>
      <Header/>
      <div className='hobby-upperDiv'>
        <div className='hobby-innerUpperDiv'>
            <h1>Aileen is a digital product designer living in <del>Berlin</del> Seattle</h1>
        </div>
      </div>

      <div className="hobby1-imageContainer">
        <img className='hobby-Img1' src='src/image/graphics1.png' alt="image" />
      </div>

      <div className="hobbyCenter1">
        <h1 className='hobbyh1-1'>Tumblr  — Making Queueing Better on Mobile</h1>
        <h2 className='hobbyh2-1'>Product Design</h2>
      </div>

      <div className="hobby2-imageContainer">
        <img className='hobby-Img2' src="src/image/graphics2.png" alt="" />
      </div>

      <div className="hobbyCenter2">
        <h1 className='hobbyh1-2'>Tumblr  — Making Queueing Better on Mobile</h1>
        <h2 className='hobbyh2-2'>Product Design</h2>
      </div>

      <div className="hobby3-imageContainer">
        <img className='hobby-Img3' src="src/image/graphics3.png" alt="" />
      </div>

      <div className="hobbyCenter3">
        <h1 className='hobbyh1-3'>Tumblr  — Making Queueing Better on Mobile</h1>
        <h2 className='hobbyh2-3'>Product Design</h2>
      </div>


      <div className="hobby-lowerDiv">
        <div className="hobbyLower-Innerdiv">
            <div className="hobby1-imageContainer">
            <img className='hobby-Img1' src='src/image/graphics4.png' alt="image" />
          </div>

      
          <div className="hobbyCenter1">
            <h1 className='hobbyh1-1'>Tumblr  — Making Queueing Better on Mobile</h1>
            <h2 className='hobbyh2-1'>Product Design</h2>
          </div>
        </div>
     
        <div className="hobbyLower-Innerdiv">
            <div className="hobby2-imageContainer">
            <img className='hobby-Img2' src="src/image/graphics7.png" alt="" />
          </div>

          <div className="hobbyCenter2">
            <h1 className='hobbyh1-2'>Tumblr  — Making Queueing Better on Mobile</h1>
            <h2 className='hobbyh2-2'>Product Design</h2>
          </div>
        </div>
      </div>

      {/* <div className="hobby-lowerDiv">
        <div className="hobbyLower-Innerdiv">
            <div className="hobby1-imageContainer">
            <img className='hobby-Img1' src='src/image/graphics6.png' alt="image" />
          </div>

      
          <div className="hobbyCenter1">
            <h1 className='hobbyh1-1'>Tumblr  — Making Queueing Better on Mobile</h1>
            <h2 className='hobbyh2-1'>Product Design</h2>
          </div>
        </div>
     
        <div className="hobbyLower-Innerdiv">
            <div className="hobby2-imageContainer">
            <img className='hobby-Img2' src="src/image/graphics5.png" alt="" />
          </div>

          <div className="hobbyCenter2">
            <h1 className='hobbyh1-2'>Tumblr  — Making Queueing Better on Mobile</h1>
            <h2 className='hobbyh2-2'>Product Design</h2>
          </div>
        </div>
      </div> */}

   <Footer/>
    </div>
  )
}
