import { observer } from "mobx-react";
import * as React from "react";
import "./App.css";
import Caption from "./components/Caption";
import Colgroup from "./components/Colgroup";
import Rows from "./components/Rows";
import Store from "./Store";

@observer
class App extends React.Component<any> {
	public store: Store;

	constructor(props: any) {
		super(props);
		this.store = new Store(6, 7);
	}

	public render() {
		const store = this.store;
		const { current } = store;
		return (
			<table className="pure-table pure-table-bordered">
				<Caption current={current} />
				<Colgroup store={store}/>
				<Rows store={store} />
			</table>
		);
	}
}

export default App;
