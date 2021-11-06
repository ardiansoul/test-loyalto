import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers";

interface Props {

}

const App: React.FC<Props> = (props) => {
  const { } = props;

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
