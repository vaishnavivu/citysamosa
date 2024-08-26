import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
var heroData = [
  {
    id: 1,
    image: require('../assets/images/abc-02.png'),
    // title: 'The perfect design for your website',
    // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    // link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/abc-02.png'),
    // title: 'Start Your Future Financial Plan',
    // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    // link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/abc-02.png'),
    // title: 'Enjoy the Difference',
    // description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    // link: 'https://www.twitter.com'
  }
]

function ControlledCarousel() {
  return (
    <section id="home" className="hero-block mb-6">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  {/* <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>              */}
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default ControlledCarousel;