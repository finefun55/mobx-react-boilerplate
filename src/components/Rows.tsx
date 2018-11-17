import { observer } from "mobx-react";
import * as React from "react";
import Store from "../Store";

@observer
export default class Rows extends React.Component<{ store: Store }> {
	public render() {
		const { store } = this.props;
		const { data, current } = store;
		return data.map((rows, index) => {
			return (
				<tr
					key={index}
					className={current && index + 1 === current.rowsIndex ? "App-rows-active" : ""}
				>
					{rows.map(this.getCell)}
				</tr>
			);
		});
	}
	private getCell = (row: any, i: number) => {
		return (
			<td
				key={i}
				onMouseOver={this.setCurrentRow(row)}
				onClick={this.setCurrentColume(row.columnsIndex)}
			>
				{row.text}
			</td>
		);
	};

	private setCurrentRow = (current: any) => {
		return () => {
			this.props.store.setCurrent(current);
		};
	};

	private setCurrentColume = (columnsIndex: number) => {
		return () => {
			this.props.store.setCurrentColumnIndex(columnsIndex);
		};
	};
}
