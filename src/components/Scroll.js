import React, { useEffect } from 'react'


const Scroll = () => {
  useEffect(() => {
    const scrollContent = document.getElementById('scroll-content');
    const scrollContentClone = document.getElementById('scroll-content-clone');
    if (scrollContent && scrollContentClone) {
      scrollContentClone.innerHTML = scrollContent.innerHTML;
    }
  }, []);

    return (

        <div class="scroll-container">
    <div class="scroll-content" id="scroll-content">
      <img src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/twitter-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2"/>
      <img src="https://www.zarla.com/images/facebook-logo-2400x2400-20220512.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/google-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/ibm-logo-2400x2400-20220519-1.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/bmw-logo-2400x2400-20220512.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/mercedes-benz-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/coca-cola-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2" />
      </div>
    <div class="scroll-content" id="scroll-content-clone">
    <img src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/twitter-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2"/>
      <img src="https://www.zarla.com/images/facebook-logo-2400x2400-20220512.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/google-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/ibm-logo-2400x2400-20220519-1.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/bmw-logo-2400x2400-20220512.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/mercedes-benz-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2" />
      <img src="https://www.zarla.com/images/coca-cola-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2" />
      </div>
  </div>
      
    )
  }

export default Scroll;
