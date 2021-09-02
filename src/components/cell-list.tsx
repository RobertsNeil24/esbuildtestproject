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
        <AddCell nextCellId={cell.id} />
        <CellListItem cell={cell} />
      </Fragment>
    );
  });
  return (
    <div>
      {renderedCells}
      <AddCell forceVisible={cells.length === 0} nextCellId={null} />
    </div>
  );
};

export default CellList;
