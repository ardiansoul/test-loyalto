import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import AppRouter from "./routers";

interface Props {

}

const App: React.FC<Props> = (props) => {
  const { } = props;

  return (
    <Provider store={store} >
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </Provider>
  )
}

export default App
