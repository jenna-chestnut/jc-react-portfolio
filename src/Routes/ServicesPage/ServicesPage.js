import './ServicesPage.css';
import React from 'react';
import ConsultantWhys from './WhyConsultantInfo';
import ServicesDescription from './ServicesDescriptions';
import JennaPitch from './JennaPitch';

class ServicesPage extends React.Component {
	render() {
		return (
			<div className="services-page">
				<div className="wrapper bottompadding toppadding">
					<ConsultantWhys />
					<JennaPitch />
				</div>
				<ServicesDescription />
				<div className="wrapper">
					<h2 className="center toppadding">
						Don't see what you're looking for?
					</h2>
					<h3 className="center">
						This is not an exhaustive list, and I'd love to discuss you & your
						business's unique needs. Contact me for more info!
					</h3>
				</div>
				<div className="open-to-work topspace center bottomspace">
					<a
						className="message-button"
						href="https://form.jotform.com/jennachestnut/restructsure"
						rel="noreferrer"
						target="_blank"
					>
						INQUIRE COST & AVAILABILITY
					</a>
				</div>
			</div>
		);
	}
}

export default ServicesPage;
