import '../styles/globals.css'
import Header from "../components/Header/Header"
import {store} from "../redux/store";
import {Provider} from "react-redux"
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Component {...pageProps} />
    </Provider>
    </>
    )
}

export default MyApp
