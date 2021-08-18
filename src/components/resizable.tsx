import './resizable.css';
import { ResizableBox } from "react-resizable";


interface ResizableProps {
  direction: "horizontal" | "vertical";
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return (
    <ResizableBox maxConstraints={[Infinity, window.innerHeight * 0.9]} height={300} width={Infinity} resizeHandles={["s"]}>
      <div>{children}</div>
    </ResizableBox>
  );
};

export default Resizable;
