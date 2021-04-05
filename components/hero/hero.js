import useSWR from 'swr';
import axios from 'axios';
import {Jumbotron} from 'react-bootstrap';
import styles from './hero.module.css'

const fetcher = (url) => fetch(url).then(res => Promise.resolve(res));

function Hero(){ 
    // https://jsonplaceholder.typicode.com/albums/1/photos
    // const {data, error} = useSWR('https://picsum.photos/1600/500', fetcher);
    // if (error) return 'An error has occured.'; 
    // if (!data) return 'Loading...';
   
    return (
        <div className={styles.container}>
            <img 
               src= '/images/sample1600x400.jpg'
               height= '300'
               width = '1600'
               alt ="hero image"
            />
            <p className={styles.heroText}>Text that will be displayed on hero. Needs updates</p>
        </div>
    )
}

export default Hero;