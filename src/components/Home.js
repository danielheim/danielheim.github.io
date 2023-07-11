import { useLoaderData } from "react-router";
import cx from 'classnames';
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

function Content(props) {

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

	return <section id={props.id} className={props.blockName}>
		<header>
			<h1 className={`${props.blockName}__title`}>{props.title}</h1>
		</header>
		<Desc desc={props.desc} thin={true} />
		{ props.items?.length > 0 && <div className={`${props.blockName}__articles`}>
			{props.items?.map(i => <Item
				key={i.id}
				blockName={`${props.blockName}_article`}
				{...i}
			/>)}
		</div> }
	</section>
}

function Home() {

	const {
		home,
		about,
		services
	} = useLoaderData();

	const parseSocial = (social) => {

		const svg = (() => { switch (social.id) {
			case 'github': return <GithubSvg />;
			case 'linkedin': return <LinkedinSvg />;
			case 'twitter': return <TwitterSvg />;
			default: return null;
		}})();

		return <li key={social.id} id={social.id}>
			<a
				href={social.href}
				target='_blank'
				rel='noopener noreferrer'>
				{/* <img src={imgSrc} role='presentation' /> */}
				{svg}
			</a>
		</li>
	}

	return <>
		<div className='section'>
			<div className='home'>
				<header>
					<h1 className='home__title'>{home.title}</h1>
					<p className='home__subtitle'>{home.subtitle}</p>
				</header>
				<Desc desc={home.desc} thin={true} />
				<ul className='home__socials'>
					{home.socials.map(parseSocial)}
				</ul>
			</div>
		</div>
		<div className='section'>
			<Content blockName='about' {...about} />
		</div>
		<div className='section'>
			<Content blockName='services' {...services} />
		</div>
	</>
}

export default Home;