import { Container, Jumbotron } from 'react-bootstrap';
import Hero from '../../components/hero/hero';
import Feed from '../../components/feed/feed';
import styles from './home.module.css'

export default function Home(props){
    //console.log(props);
  const feedItems = props.feeds.map((item) => {
        return <Feed key={item.id} item={item} />
  })
    return (
       <div className={styles.container}>
          <Hero />
          <div className={styles.grid}>
              {feedItems}
          </div>
       </div> 
        
    );
}

export async function getStaticProps(){

      const res =  await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      const feeds =  await res.json();

      return{
          props: {
              feeds: feeds
            }
      }
}