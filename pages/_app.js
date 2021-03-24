import '../styles/globals.css'
import { wrapper } from '../Redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />

}

export default wrapper.withRedux(MyApp)
