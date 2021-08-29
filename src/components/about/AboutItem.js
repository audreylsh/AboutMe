import classes from './AboutItem.module.css';

function AboutItem(props){
    return  (
        <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </li>
    );
}

export default AboutItem;