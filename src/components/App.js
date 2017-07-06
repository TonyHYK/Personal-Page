import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import AboutSite from './AboutSite';
import Work from './Work';
import Contact from './Contact';

//carousel stuff
import {Carousel} from 'react-responsive-carousel';
import 'style-loader!react-responsive-carousel/lib/styles/carousel.css';

export default function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<Content />
			<BackgroundCarousel />
		</div>
	);
}

function Content() {
  return (
	<div className="content">
		<Switch>
			<Route exact path="/about-me" component={AboutMe} />
			<Route exact path="/about-site" component={AboutSite} />
			<Route exact path="/work" component={Work} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	</div>
	)
}

function Header() {
	return (
		<div className="header">
			<Switch>
				<Route exact path="/" render={() => (
					<div>
						<h1>Tony Hung</h1>
						<div className="profile" />
						<h2 className="keywords">Programmer | Gamer | Traveler</h2>
					</div>
				)} />
				<Route render={() => <div className="profile hideOnMobile" />} />
			</Switch>
		</div>
	)
}

function NavBar() {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-collapse collapse">
					<ul className="nav navbar-nav navbar-right">
						<RowLink url="" label="Home" />
						<RowLink url="/work" label="Work" />
						<RowLink url="/contact" label="Contact" />
						<RowLink url="/about-me" label="About Me" />
						<RowLink url="/about-site" label="About This Site" />
					</ul>
				</div>
			</div>
		</nav>
	)
}

function BackgroundCarousel() {
	return (
		<Carousel className="carousel" axis="horizontal" showThumbs={false} showStatus={false} showArrows={false} autoPlay infiniteLoop interval={5000}>
			<div>
				<div className="background back1"/>
				<p className="legend">Kayangan Lake, Philippines</p>
			</div>
			<div>
				<div className="background back2"/>
				<p className="legend">Nara, Japan</p>
			</div>
			<div>
				<div className="background back3"/>
				<p className="legend">Berlin, Germany</p>
			</div>
		</Carousel>
	);
}

const RowLink = ({url, label}) => <li><Link to={url}>{label}</Link></li>
