import React, { Component, PropTypes } from 'react';
import Modal from 'react-customizable-modal';

class CustomModal extends Component {
	static propTypes = {
		visible: PropTypes.bool.isRequired,
		onClose: PropTypes.func
	}
	static defaultProps = {
		onClose: () => {}
	}
	render() {
		return (
			<Modal name="Custom Modal" visible={this.props.visible} onSubmit={this.props.onClose} onClose={this.props.onClose}>
				<h1>Helloworld!</h1>
			</Modal>
		)
	}
}

export default CustomModal;