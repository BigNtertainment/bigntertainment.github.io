import classes from "./engine.module.css";
import Link from "../component/Link";

const BigNgine = (props:any) => {

	return	<article className={classes.engineArt}>
		<p className={classes.ArtText}>
			BigNgine was supposed to be a simple, customizable, lightweight 2D game engine. We have failed
			miserably at delivering that. It is so bad that I feel like we have to apologize for the hot mess we
			made. We tried to make a <Link to={"https://github.com/BigNtertainment/touhou-game-for-fair"}>game</Link>
			&nbsp;in this pile of segmentation faults and it didn't work out at all. There is one upside, we have learned a lot
			and <b>plan</b>(probably won't happen) on rewriting the whole thing in the future. Maybe it will be usable then.
			<br/><Link to={"https://github.com/BigNtertainment/big-ngine"}>Here is the github repo</Link>
		</p>
	</article>

}

export default BigNgine;