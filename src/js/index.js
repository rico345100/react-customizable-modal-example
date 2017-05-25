import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'react-customizable-modal/style.css';
import CustomModal from 'modals/CustomModal';
import FormModal from 'modals/FormModal';

class App extends Component {
	state = {
		showCustomModal: false,
		showFormModal: false
	}
	showCustomModal = () => {
		this.setState({ showCustomModal: true });
	}
	closeCustomModal = () => {
		this.setState({ showCustomModal: false });
	}
	showFormModal = () => {
		this.setState({ showFormModal: true });
	}
	closeFormModal = () => {
		this.setState({ showFormModal: false });
	}
	render() {
		return (
			<div>
				<h1>Modal Test</h1>
				<button onClick={this.showCustomModal}>Custom Modal</button>
				<button onClick={this.showFormModal}>Form Modal</button>

				<CustomModal visible={this.state.showCustomModal} onClose={this.closeCustomModal} />
				<FormModal visible={this.state.showFormModal} onClose={this.closeFormModal} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
document.getElementById('entry'));