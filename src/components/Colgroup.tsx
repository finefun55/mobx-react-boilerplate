import { observer } from "mobx-react";
import * as React from "react";
import Store from "../Store";
import Col from "./Col";

@observer
export default class Colgroup extends React.Component<{ store: Store }> {
	public render() {
		const { store } = this.props;
		const { data } = store;
		return (
			<colgroup>
				{data.map((item, index) => {
					return <Col key={index} store={store} index={index} />;
				})}
			</colgroup>
		);
	}
}
