import { observer } from "mobx-react";
import * as React from "react";
import Store from "../Store";

@observer
export default class Col extends React.Component<{ store: Store; index: number }> {
	public render() {
		const { store, index } = this.props;
		const { currentColumnIndex } = store;
		return (
			<col
				className={currentColumnIndex && index + 1 === currentColumnIndex ? "App-columns-active" : ""}
			/>
		);
	}
}
