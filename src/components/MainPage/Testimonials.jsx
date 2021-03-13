import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import styles from '../../modules/testimonialsStyle.module.css';
import Shape from '../Shape';
import ExpandingLine from './ExpandingLine';
import userImg from '../../images/guy.jpg';

const userTesimonials = [
  {
    id: 1,
    name: 'Adam Smith',
    city: 'Smithsville',
    img: userImg,
    testimonial: 'This is my first time ever having to use a fake attorney and I could not have made a better decision. Very honest and up front about everything. I have never once felt like I was just any client.',
  },
  {
    id: 2,
    name: 'Hans Olo',
    city: 'Spaceville',
    img: userImg,
    testimonial: 'This is my first time ever having to use a fake attorney and I could not have made a better decision. Very honest and up front about everything. I have never once felt like I was just any client.',
  },
  {
    id: 3,
    name: 'Chuck N.',
    city: 'Texas',
    img: userImg,
    testimonial: 'This is my first time ever having to use a fake attorney and I could not have made a better decision. Very honest and up front about everything. I have never once felt like I was just any client.',
  },
  {
    id: 4,
    name: 'John Doe',
    city: 'Forestville',
    img: userImg,
    testimonial: 'This is my first time ever having to use a fake attorney and I could not have made a better decision. Very honest and up front about everything. I have never once felt like I was just any client.',
  },
  {
    id: 5,
    name: 'Jane Doe',
    city: 'Forestville',
    img: userImg,
    testimonial: 'This is my first time ever having to use a fake attorney and I could not have made a better decision. Very honest and up front about everything. I have never once felt like I was just any client.',
  },
  {
    id: 6,
    name: 'Boris Y.',
    city: 'Moscow',
    img: userImg,
    testimonial: 'This is my first time ever having to use a fake attorney and I could not have made a better decision. Very honest and up front about everything. I have never once felt like I was just any client.',
  },
];

function Testimonials() {
  const [shownTestimonials, setShownTestimonials] = useState([]);
  useEffect(() => {
    const currentTestimonials = [];
    for (let i = 0; i < userTesimonials.length; i++) {
      currentTestimonials.push(
        <TestimonialCard
          name={userTesimonials[i].name}
          city={userTesimonials[i].city}
          imgSrc={userTesimonials[i].img}
          text={userTesimonials[i].testimonial}
          key={userTesimonials[i].id}
          animationDelay={(i + 1) * 150}
        />,
      );
    }
    setShownTestimonials(currentTestimonials);
  }, []);

  return (
    <section id="testimonials" className={`${styles.testimonialsSection} flexColumn`}>
      <Shape color="var(--primary-color)" text="Testimonials" />
      <h3 className={styles.testimonialsIntro}>We &apos;ve helped hundreds of people from all around the world. Here is what some of our clients say about us:</h3>
      <div id={styles.testimonials}>
        {shownTestimonials}
      </div>
      <ExpandingLine animationDuration={0.5} animationDelay={400} />
    </section>
  );
}

export default Testimonials;
