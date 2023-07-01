import { useLoaderData } from "react-router";
import './Home.scss';

function Content(props) {

	function Items(props) {
		return <article key={props.id} id={props.id}>
			<header>
				<h1>{props.title}</h1>
			</header>
			<div>
				{props.desc.split(/\n+/g).map((desc, index) => <p key={index}>{desc}</p>)}
			</div>
		</article>
	}

	return <section id={props.id}>
		<h1>{props.title}</h1>
		{props.desc && <div>
			{props.desc.split(/\n+/g).map((desc, index) => <p key={index}>{desc}</p>)}
		</div>}
		{props.items?.map(i => <Items key={i.id} {...i} />)}
	</section>
}

function Home() {

	const {
		home,
		about,
		services
	} = useLoaderData();

	const parseSocial = (social) => {
		return <li key={social.id} id={social.id}>
			<a
				href={social.href}
				target='_blank'
				rel='noopener noreferrer'>
				{social.title}
			</a>
		</li>
	}

	return <main id='home'>
		<div>
			<header>
				<h1>{home.title}</h1>
				<p>{home.subtitle}</p>
				<p>{home.desc}</p>
			</header>
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