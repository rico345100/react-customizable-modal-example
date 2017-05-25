import React, { Component, PropTypes } from 'react';
import Modal from 'react-customizable-modal';

class FormModal extends Component {
	static propTypes = {
		onClose: PropTypes.func,
		visible: PropTypes.bool.isRequired
	}
	state = {
		name: '',
		age: ''
	}
	onAdd = () => {
		console.log('Add: ', this.state);
		this.props.onClose();
	}
	onClose = () => {
		this.props.onClose();
	}
	handleChange(key, ev) {
		this.setState({
			[key]: ev.target.value
		});
	}
	render() {
		const { visible } = this.props;
		const { name, age } = this.state;

		return (
			<Modal name="Form Modal" onSubmit={this.onAdd} onClose={this.onClose} submitText="Add" closeText="Close" visible={visible}>
				<div className="form-horizontal">
					<div>
						<label>Name</label>
						<input type="text" value={name} onChange={this.handleChange.bind(this, 'name')} />
					</div>

					<div>
						<label>Age</label>
						<input type="text" value={age} onChange={this.handleChange.bind(this, 'age')} />
					</div>
				</div>
			</Modal>
		);
	}
}

export default FormModal;