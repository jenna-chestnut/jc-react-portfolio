import './Footer.css';
import React from 'react';
import logo from '../../images/logo.png';
import githubIcon from '../../images/github-icon-tiny.png';
import instagramIcon from '../../images/insta-icon-tiny.png';
import linkedInIcon from '../../images/linkedin-icon-tiny.png';
import youtubeIcon from '../../images/yt-icon-tiny.png';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<hr className="footer-bar"></hr>
				<div className="footer-details">
					<img className="item logo" src={logo} alt="logo" width="100" />
					<div className="item spacr"></div>
					<div className="item group footer-contact">
						<span>
							Jenna Chestnut /{' '}
							<a
								href="https://linktr.ee/jenna.chestnut"
								target="_blank"
								rel="noopener noreferrer"
							>
								<b>@Jenna</b>
							</a>
						</span>
						<div className="tiny-icons">
							<a
								href="https://www.linkedin.com/in/jenna-chestnut/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={linkedInIcon} alt="tiny linkedin icon" />
							</a>
							<a
								href="https://github.com/jenna-chestnut"
								target="_blank"
								rel="noreferrer"
							>
								<img src={githubIcon} alt="tiny github icon" />
							</a>
							<a
								href="https://instagram.com/RestructSure"
								target="_blank"
								rel="noreferrer"
							>
								<img src={instagramIcon} alt="tiny twitter icon" />
							</a>
							<a
								href="https://www.youtube.com/channel/UCcVIfNta88p-qtpNpLbZapQ"
								target="_blank"
								rel="noreferrer"
							>
								<img src={youtubeIcon} alt="tiny instagram icon" />
							</a>
						</div>
						<span className="lil-r">
							Created with React & Designed with Vanilla CSS
						</span>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
