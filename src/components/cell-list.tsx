import { useSelector } from 'react-redux';
// import { useTypedSelector } from '../hooks/use-typed-selector';
import { RootState } from '../state';
import CellListItem from './cell-list-item';
import { CellsState } from '../state/reducers/cellsReducer';

const CellList: React.FC = () => {
  const cellState = useSelector(
    (state: RootState) => state.cells,
  ) as CellsState;
  const cells = cellState.order.map((id) => cellState.data[id]);

  const renderedCells = cells.map((cell) => {
    return <CellListItem key={cell.id} cell={cell} />;
  });
  return <div>{renderedCells}</div>;
};

export default CellList;
