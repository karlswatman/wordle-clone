import { Key } from "./Key";

export const Keyboard = () => {
	const handleClick = (e: React.MouseEvent<Element>) => {
		if (e) {
			console.log(e.currentTarget.innerHTML);
		}
	};

	return (
		<div>
			<div className="keyboard-row">
				<Key value="Q" onClick={handleClick} />
				<Key onClick={handleClick} value="W" />
				<Key onClick={handleClick} value="E" />
				<Key onClick={handleClick} value="R" />
				<Key onClick={handleClick} value="T" />
				<Key onClick={handleClick} value="Y" />
				<Key onClick={handleClick} value="U" />
				<Key onClick={handleClick} value="I" />
				<Key onClick={handleClick} value="O" />
				<Key onClick={handleClick} value="P" />
			</div>
			<div className="keyboard-row">
				<Key onClick={handleClick} value="A" />
				<Key onClick={handleClick} value="S" />
				<Key onClick={handleClick} value="D" />
				<Key onClick={handleClick} value="F" />
				<Key onClick={handleClick} value="G" />
				<Key onClick={handleClick} value="H" />
				<Key onClick={handleClick} value="J" />
				<Key onClick={handleClick} value="K" />
				<Key onClick={handleClick} value="L" />
			</div>
			<div className="keyboard-row">
				<Key onClick={handleClick} value="ENTER" />

				<Key onClick={handleClick} value="Z" />
				<Key onClick={handleClick} value="X" />
				<Key onClick={handleClick} value="C" />
				<Key onClick={handleClick} value="V" />
				<Key onClick={handleClick} value="B" />
				<Key onClick={handleClick} value="N" />
				<Key onClick={handleClick} value="M" />
				<Key onClick={handleClick} value="DELETE" />
			</div>
		</div>
	);
};
