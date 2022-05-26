import './App.css';

function PrTile(props) {
    return (
        <div className="periodic-table-tile">
            <div className="periodic-table-tile-id">{props.obj.id}</div>
            <div className="periodic-table-tile-abr">{props.obj.abr}</div>
            <div className="periodic-table-tile-name">{props.obj.name}</div>
            <div className="periodic-table-tile-mass">{props.obj.mass}</div>
        </div>
    );
}

export default PrTile;
