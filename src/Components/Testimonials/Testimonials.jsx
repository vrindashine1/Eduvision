import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider=useRef();
  let tx=0;

  const slideForward=()=>{
    if(tx > -50){
      tx -=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }
  const slideBackward=()=>{
    if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={user_1} alt=''/>
                    <div>
                      <h3>Emily Johnson </h3>
                      <span>EduVision, USA</span>
                    </div>
                  </div>
                  <p>Studying at EduVision for my MCA was an enriching experience. 
                  The program's practical curriculum and supportive faculty were instrumental in my growth. 
                  The campus facilities and vibrant student life provided ample opportunities for personal and professional development. The excellent career services ensured I was well-prepared for the job market. 
                  I highly recommend EduVision for a quality education and transformative experience.</p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={user_2} alt=''/>
                    <div>
                      <h3>John Doe</h3>
                      <span>EduVision, USA</span>
                    </div>
                  </div>
                  <p>My experience at EduVision has been incredibly rewarding. 
                  The computer science program is well-structured, offering a perfect 
                  blend of theory and practical application. The professors are knowledgeable
                   and always willing to provide guidance and support. The vibrant campus 
                   life and numerous extracurricular activities made my time here truly 
                   unforgettable.

</p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={user_3} alt=''/>
                    <div>
                      <h3>Sarah Lee</h3>
                      <span>EduVision, USA</span>
                    </div>
                  </div>
                  <p>Pursuing my MBA at EduVision was one of the best decisions 
                  I've made. The curriculum is rigorous and relevant, preparing me well 
                  for the challenges of the business world. The faculty are not only 
                  experts in their fields but also approachable and supportive.
                   The university's strong network and career services were invaluable 
                   in securing a great job post-graduation.</p>
                </div>
              </li>
              <li>
                <div className='slide'>
                  <div className='user-info'>
                    <img src={user_4} alt=''/>
                    <div>
                      <h3>Michael Smith</h3>
                      <span>EduVision, USA</span>
                    </div>
                  </div>
                  <p>Studying psychology at EduVision has been a transformative experience. 
                  The courses are engaging and the professors are passionate about their subjects,
                   which made learning exciting. The university provides ample opportunities for 
                   research and internships, which enhanced my practical knowledge. The supportive 
                   community and beautiful campus made it an ideal place to study.</p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials