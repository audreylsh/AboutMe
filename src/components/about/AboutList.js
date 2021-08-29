import AboutItem from './AboutItem';
import classes from './AboutList.module.css';

function AboutList(props) {
  return (
    <ul className={classes.list}>
      {props.aboutme.map((about) => (
        <AboutItem
          key={about.id}
          id={about.id}
          image={about.image}
          title={about.title}
          description={about.description}
        />
      ))}
    </ul>
  );
}
export default AboutList;