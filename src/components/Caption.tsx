import { observer } from "mobx-react";
import * as React from "react";

@observer
export default class Caption extends React.Component<{ current: any }> {
	public render() {
		const current = this.props.current;
		const currentRowIndex = current ? current.columnsIndex : undefined;
		return (
			<caption>
				行号：{currentRowIndex}，列号：{current ? current.rowsIndex : undefined}
			</caption>
		);
	}
}
