import classes from './Link.module.css';

const Link = (props:any) => {

	return <a
		className={classes.link}
		href={props.to}
		target="_blank"
		rel="noopener noreferrer"
	>
		{props.children}
	</a>

}

export default Link;