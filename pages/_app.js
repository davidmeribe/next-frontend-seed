import Navigation from '../components/navigation/navigation'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return(
       <div>
            <Navigation />
            <Component {...pageProps} />
       </div>
         
  )
}

export default MyApp
