import React, { Component } from 'react';
import AboutMe from './AboutMe';
import AboutSite from './AboutSite';
import Work from './Work';
import Contact from './Contact';
import isMobile from 'is-mobile';

//carousel stuff
import {Carousel} from 'react-responsive-carousel';
import 'style-loader!react-responsive-carousel/lib/styles/carousel.css';

let TABS = ["Home", "Work", "Contact", "About Me", "About This Site"];

class App extends Component {
	constructor(props) {
		super(props);
		this.changeTab = this.changeTab.bind(this);
		this.state = {tab: TABS[0]};
	}

	render() {
		return (
			<div>
				<NavBar changeTab={this.changeTab} />
				<Header tab={this.state.tab} />
				<Content tab={this.state.tab} />
				<BackgroundCarousel />
			</div>
		);
	}

	changeTab(newTab) {
		this.setState({tab: TABS[newTab]});
	}
}

function Content({tab}) {
	let div;
	switch (tab) {
		case TABS[1]:
			div = <Work />;
			break;
		case TABS[2]:
			div = <Contact />;
			break;
		case TABS[3]:
			div = <AboutMe />;
			break;
		case TABS[4]:
			div = <AboutSite />;
			break;
		default:
			div = <div />;
	}
	return <div className="content">{div}</div>;
}

function Header({tab}) {
	return (
		<div className="header">
			{
				tab === TABS[0] ?
					<div>
						<h1>Tony Hung</h1>
						<div className="profile" />
						<h2 className="keywords">Programmer | Gamer | Traveler</h2>
					</div>
					:
					<div className="profile hideOnMobile" />
			}
		</div>
	)
}

function NavBar({changeTab}) {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-collapse collapse">
					<ul className="nav navbar-nav navbar-right">
						{
							TABS.map((t, i) => {
								return (
									<li key={i} onClick={() => changeTab(i)}><a>{t}</a></li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</nav>
	)
}

function BackgroundCarousel() {
	if (isMobile()) {
		return (
			<div className="carousel">
				<div className="background backMobile" />
			</div>
		);
	} else {
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
}

export default App;
