import classes from './Link.module.css';

const selfLink = (props:any) => {

	return <a
		className={classes.link}
		href={props.to}
		target="_self"
		rel="noopener noreferrer"
	>
		{props.children}
	</a>

}

export default selfLink;