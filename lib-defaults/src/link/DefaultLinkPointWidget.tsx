import * as React from 'react';
import { PointModel } from '@projectstorm/react-diagrams-core';

export interface DefaultLinkPointWidgetProps {
	point: PointModel;
	color?: string;
	colorSelected: string;
}

export interface DefaultLinkPointWidgetState {
	selected: boolean
}

export class DefaultLinkPointWidget extends React.Component<DefaultLinkPointWidgetProps, DefaultLinkPointWidgetState> {

	constructor(props){
		super(props);
		this.state = {
			selected: false
		}
	}

	render() {
		const { point } = this.props;
		return (
			<g>
				<circle
					cx={point.getPosition().x}
					cy={point.getPosition().y}
					r={5}
					fill={this.state.selected || this.props.point.isSelected() ? this.props.colorSelected : this.props.color}
				/>
				<circle
					className="point"
					onMouseLeave={() => {
						this.setState({ selected: false });
					}}
					onMouseEnter={() => {
						this.setState({ selected: true });
					}}
					data-id={point.getID()}
					data-linkid={point.getLink().getID()}
					cx={point.getPosition().x}
					cy={point.getPosition().y}
					r={15}
					opacity={0}
				/>
			</g>
		);
	}
}