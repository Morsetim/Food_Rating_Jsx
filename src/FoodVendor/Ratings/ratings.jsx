import {Wrapper, Rating} from "./index";

const Ratings = ({ratings}) => (
 <Wrapper>
     {[...Array(5)].map((_, index) =>(
         <Rating color={ index+1 <= ratings? 'orange': 'grey'}>
        &#9733; 
        </Rating>
     )
     )}
 </Wrapper>
)

export default Ratings

