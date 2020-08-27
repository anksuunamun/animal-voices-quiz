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
         if(this.state.birdDescriptionId === "" && !this.state.isCorrect) {
    
       return(<div >
            <p>Послушайте, какие звуки издают представители разных систематических единиц <i>Царства Животные</i>.</p>
            <p>Выберите животное из списка вариантов ответа.</p>
            <p><b>Удачи!</b></p>
        </div>)
    }
 
    else if (this.state.isCorrect) {
            if (this.setState.birdDescriptionId === this.props.bird.id) {
                return (
                    <BirdDescription {...this.state.birdDescription} />
                )
            }
            return <BirdDescription {...this.state.birdDescription} />
    }
    else if (this.state.birdDescriptionId !== "" && !this.state.isCorrect) {
        return (
            <BirdDescription {...this.state.birdDescription} />
        )
    }
  }

            
             
        
    
}
export default Description;