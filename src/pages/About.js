import AboutList from '../components/about/AboutList';
import work from '../images/work.jpg';
import yoga from '../images/yoga.jpg'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Business Analyst',
    image: work,
    description:
      'I spend most of my day digging into data and identifying opportunities for growth in the ecommerce space. I enjoy the challenge of harnessing meaningful insights for better business decision making. I have been in the analytics field for six years now and code mostly in SQL and Python. I am looking forward to learning a new coding language and I hope the TechLadies Bootcamp can help accelerate my learning in web development. ', 
  },
  {
    id: 'm2',
    title: '',
    image: yoga,
    description:
      'Outside of work, I love working out a good sweat on the mat. Yoga keeps me grounded in stillness while challenging the body to movement patterns. Like a typical Singaporean, food is joy and I love mindless kitchen experiments on weekends and feasting with friends and family. ',
  },
];

function About(){
    return (
        <section>
        <h1>Welcome to my world</h1>
        <AboutList aboutme={DUMMY_DATA} />
      </section>
    );
}

export default About;