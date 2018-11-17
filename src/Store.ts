import { action, observable } from "mobx";

export interface IData {
	columnsIndex: number;
	rowsIndex: number;
	text: string;
}

export default class Store {
	@observable public current?: Partial<IData>;
	@observable public currentColumnIndex?: number;
	@observable public data: IData[][] = [
		[
			{
				columnsIndex: 0,
				rowsIndex: 0,
				text: "",
			},
		],
	];
	constructor(columns: number = 6, rows: number = 7) {
		const data = this.getInitData(columns, rows);
		this.setData(data);
	}
	@action public setCurrent = (current: Partial<IData>) => (this.current = current);
	@action public setCurrentColumnIndex = (currentColumnIndex: number) =>
		(this.currentColumnIndex = currentColumnIndex);
	@action public setData = (data: IData[][] = []) => (this.data = data);
	private getInitData = (columns: number = 6, rows: number = 7) => {
		return new Array(rows).fill({}, 0, rows).map((value, rowsIndex) => {
			return new Array(columns).fill({}, 0, columns).map((data, columnsIndex) => {
				return {
					columnsIndex: columnsIndex + 1,
					rowsIndex: rowsIndex + 1,
					text: Math.random().toString(),
				};
			});
		});
	};
}
