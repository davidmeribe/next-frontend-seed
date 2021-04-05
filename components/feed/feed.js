import { Card } from "react-bootstrap";
import styles from './feed.module.css';


export default function Feed(props){
    return(
             <Card className={styles.card}>
                 <Card.Img variant='top' src={props.item.thumbnailUrl} className={styles.cardImg} />
                 <Card.Body>
                     <Card.Title>{props.item.title}</Card.Title>
                     <Card.Text>{props.item.content}</Card.Text>
                 </Card.Body>
             </Card>
    )
}
