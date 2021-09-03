import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { RootState } from '../state';
import CellListItem from './cell-list-item';
import { CellsState } from '../state/reducers/cellsReducer';
import AddCell from './add-cell';

const CellList: React.FC = () => {
  const cellState = useSelector(
    (state: RootState) => state.cells,
  ) as CellsState;
  const cells = cellState.order.map((id) => cellState.data[id]);

  const renderedCells = cells.map((cell) => {
    return (
      <Fragment key={cell.id}>
        <CellListItem cell={cell} />
        <AddCell previousCellId={cell.id} />
      </Fragment>
    );
  });
  return (
    <div>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
