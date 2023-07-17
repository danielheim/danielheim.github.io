import { useLoaderData } from "react-router";
import cx from 'classnames';
import { getAnalytics, logEvent } from "firebase/analytics";
import './Home.scss';

import { ReactComponent as GithubSvg } from '../images/github.svg';
import { ReactComponent as LinkedinSvg } from '../images/linkedin.svg';
import { ReactComponent as TwitterSvg } from '../images/twitter.svg';

function Desc(props) {
	if (!props.desc) return null;
	return <div className={cx('desc', { 'desc--thin': props.thin })}>
		{props.desc.split(/\n+/g).map((desc, index) => <p
			key={index}
			dangerouslySetInnerHTML={{ __html: desc }}
			/>
		)}
	</div>
}

function Item(props) {
	return <article className={props.blockName} key={props.id} id={props.id}>
		{ props.img && <img
			className={`${props.blockName}__img`}
			src={props.img}
			alt=''
		/> }
		<div>
			<header>
				<h1>{props.title}</h1>
			</header>
			<Desc desc={props.desc} />
		</div>
	</article>
}

function Content(props) {

	return <div id={props.id} className={props.blockName}>
		<header>
			<h1 className={`${props.blockName}__title`}>{props.title}</h1>
			{ props.subtitle && <p className={`${props.blockName}__subtitle`}>{props.subtitle}</p> }
		</header>
		<Desc desc={props.desc} thin={true} />
		{ props.children }
	</div>
}

function Home() {

	logEvent(getAnalytics(), 'screen_view', {
		firebase_screen: 'home',
		firebase_screen_class: 'Home'
	});

	const {
		intro,
		about,
		services
	} = useLoaderData();

	const Social = (props) => {

		const svg = (() => { switch (props.id) {
			case 'github': return <GithubSvg />;
			case 'linkedin': return <LinkedinSvg />;
			case 'twitter': return <TwitterSvg />;
			default: return null;
		}})();

		return <li key={props.id} id={props.id}>
			<a
				href={props.href}
				target='_blank'
				rel='noopener noreferrer'>
				{svg}
			</a>
		</li>
	}

	return <>
		<section className='section'>
			<Content blockName='intro' {...intro} >
				<ul className='intro__socials'>
					{intro.socials.map(v => <Social key={v.id} {...v} />)}
				</ul>
			</Content>
		</section>
		<section className='section'>
			<Content blockName='about' {...about}>
			</Content>
		</section>
		<section className='section'>
			<Content blockName='services' {...services}>
				<div className='services__articles'>
				{services.items.map(v => <Item key={v.id} blockName='services_article' {...v} />)}
				</div>
			</Content>
		</section>
	</>
}

export default Home;