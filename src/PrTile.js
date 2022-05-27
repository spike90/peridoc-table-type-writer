import './App.css';

function PrTile(props) {
    let obj;
    if (props.character) {
        obj = {abr: props.character}
    } else {
        obj = props.obj;
    }

    let abr = obj.abr;

    if (props.half) {
        abr = <><div>{abr[0]}</div><div>{abr.substring(1)}</div></>
    }

    return (
        <div className={'periodic-table-tile' + (props.character ? ' borderless' : '')}>
            <div className="periodic-table-tile-id">{obj.id}</div>
            <div className="periodic-table-tile-abr">{abr}</div>
            <div className="periodic-table-tile-name">{obj.name}</div>
            <div className="periodic-table-tile-mass">{obj.mass}</div>
        </div>
    );
}

export default PrTile;
