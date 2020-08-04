import React from 'react';
import styles from './Description.module.css'
import BirdDescription from './BirdDescription/BirdDescription';


class Description extends React.Component {
    
   state = {
       "birdDescriptionId": this.props.birdDescriptionId,
   }
   
    render()
    
   { if(this.state.birdDescriptionId === "" && !this.props.isCorrect) {
    console.log(this.props)
       return(<div>
            <p>Послушайте плеер.</p>
            <p>Выберите птицу из списка</p>
        </div>)
    }
    else if (this.props.isCorrect) {
        return(

            <BirdDescription {...this.props.bird}/>
   
        )
    }
    else if (this.state.birdDescriptionId !== "" && !this.props.isCorrect) {
        return (
            <div></div>
        )
    }
  }

            
             
        
    
}
export default Description;