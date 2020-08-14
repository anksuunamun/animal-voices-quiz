import React from 'react';
import styles from './Description.module.css'
import BirdDescription from './BirdDescription/BirdDescription';



class Description extends React.Component {
    state = {
        "birdDescriptionId": this.props.birdDescriptionId,
         "birdDescription": this.props.birdDescription,
         "isCorrect": this.props.isCorrect,
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.birdDescriptionId !== this.props.birdDescriptionId) {
            this.setState(
                {
                 "birdDescriptionId": this.props.birdDescriptionId,
                 "birdDescription": this.props.birdDescription,
                 "isCorrect": this.props.isCorrect,
                }
            )  
        }
    }
  
   
    render(){ 
        console.log(this.state)
         if(this.state.birdDescriptionId === "" && !this.state.isCorrect) {
    
       return(<div>
            <p>Послушайте плеер.</p>
            <p>Выберите птицу из списка</p>
        </div>)
    }
    else if (this.state.isCorrect) {
        return(

            <BirdDescription {...this.props.bird}/>
   
        )
    }
    else if (this.state.birdDescriptionId !== "" && !this.state.isCorrect) {
        return (
            <BirdDescription {...this.state.birdDescription} />
        )
    }
  }

            
             
        
    
}
export default Description;