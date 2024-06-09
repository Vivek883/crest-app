import React from 'react'

function Hero() {
  return (
    <div>
      <div id="hero-content">
      <div className="hero">
        <div className='hero-image-wrapper'>
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="every order fullfilled" className='hero-dashboard-img my-5'/>
        </div>
        <h1 className='h1 costume-h1 mx-5'>
          <br></br>
          <br></br><strong>
          Every order
          <br></br>
          fulfilled,
          <span className="text-style-gradient"> on time.</span>
          </strong>
        </h1>
        <br></br>
        <p className='text-large mx-5'>
          Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts,<br></br> it brings the same technology used by large global brands to power fast-growing <br></br>startups. In short, we make supply meet demand, and then help you grow both.</p>
        <br></br>
        <br></br>
        <div className="button-wrapper pos-rel">
        <button type="button" className="btn hero-btn">Get started with Crest</button>
        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" loading="eager" data-w-id="9275ef4b-fcfa-597b-1596-96578baf76a8" alt="Integrate crest in two days" className="pos-absolute hero-cta"/>
        </div>
      </div>
      <div className='tilted-edge'></div>
        </div>
    </div>
  )
}

export default Hero
