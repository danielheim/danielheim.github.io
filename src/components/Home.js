import { useLoaderData } from "react-router";
import './Home.scss';

import { ReactComponent as GithubSvg } from '../images/github.svg';
import { ReactComponent as LinkedinSvg } from '../images/linkedin.svg';
import { ReactComponent as TwitterSvg } from '../images/twitter.svg';

function Content(props) {

	function Items(props) {
		return <article key={props.id} id={props.id}>
			<div>
				{ props.img && <img src={props.img} alt='*' /> }
			</div>
			<div>
				<header>
					<h1>{props.title}</h1>
				</header>
				<div>
					{props.desc.split(/\n+/g).map((desc, index) => <p key={index}>{desc}</p>)}
				</div>
			</div>
		</article>
	}

	return <section id={props.id} className='section'>
		<header>
			<h1>{props.title}</h1>
		</header>
		{props.desc && <div>
			{props.desc.split(/\n+/g).map((desc, index) => <p key={index} dangerouslySetInnerHTML={{__html: desc}} />)}
		</div>}
		{ props.items?.length > 0 && <div className='articles'>
			{props.items?.map(i => <Items key={i.id} {...i} />)}
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

	return <main id='home'>
		<div className='section'>
			<header>
				<h1 className='home__title'>{home.title}</h1>
				<p className='subtitle'>{home.subtitle}</p>
			</header>
			<p dangerouslySetInnerHTML={{ __html: home.desc }} />
			<ul id='socials'>
				{home.socials.map(parseSocial)}
			</ul>
		</div>
		<div>
			<Content id='about' {...about} />
			<Content id='services' {...services} />
		</div>
	</main>
}

export default Home;