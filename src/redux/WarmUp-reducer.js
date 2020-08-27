import {birdsData} from '../components/birdsData';

function randomQuestion(min, max) {
  let randQuestion = min + Math.random() * (max + 1 - min);
  return Math.floor(randQuestion);
}

const CURRENT_BIRD = "CURRENT_BIRD";
const BIRD_DESCRIPTION_ID = "BIRD_DESCRIPTION_ID";
const NEXT_LEVEL = "NEXT_LEEVEL";
const SET_SCORE = "SET_SCORE";
const SET_ZERO_SCORE = "SET_ZERO_SCORE";
const SET_IS_CLICKED = "SET_IS_CLICKED";
const SET_STOP_CLICK = "SET_STOP_CLICK";

export const currentBirdAC = (id) => {
  return {
      type: CURRENT_BIRD,
      id,

  }
}

export const birdDescriptionIdAC = (id) => {
  return {
    type: BIRD_DESCRIPTION_ID,
    id
  }
}

export const setBirdThunk = (birdId) => {
  return (dispatch) => {
    if (birdId!== this.state.currentBirdName) {
     dispatch( birdDescriptionIdAC(birdId));
    }
  }
}

export const nextLevelAC = () => {
  return {
    type: NEXT_LEVEL,
  }
}

export const setScore = () => {
  return {
    type: SET_SCORE,
  }
}

export const setZeroScore = () => {
  return {
    type: SET_ZERO_SCORE,
  }
}

export const setIsClicked = () => {
  return {
    type: SET_IS_CLICKED,
  }
}
export const setStopClick = () => {
  return {
    type: SET_STOP_CLICK,
  }
}


let initialState = {
    "stopClick": false,
    "isClicked": false,
    "changeScore": true,
    "pressedAnswers": [],
    "score": 0,
    "defaultScore": 5,
    "gameOver": false,
    "counter": 1,
    "isCorrect": false,
    "questionNumber": randomQuestion(0, 5),
    "currentBirdName": "",
    "birdDescriptionId": "",
    "birdDescription": "",
    "birds" : [       
        {
          id: 1,
          name: 'Медведь',
          species: 'Ursus Arctos',
          description: 'Медведи обитают в северной Евразии и Северной Америке. Они редко нападают на людей с первого взгляда и обычно избегают людей.  В большинстве атак, приводящих к травмам, бурые медведи предшествуют атаке рычанием или фырканьем. ',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg',
          audio: 'https://freesound.org/data/previews/70/70333_1010254-lq.mp3'
        },
        {
          id: 2,
          name: 'Лев',
          species: 'Panthera leo',
          description: 'Львы способны издавать звуки, которые различаются по силе и высоте. Обычно львы ревут по ночам; звук слышен на расстоянии до 8 км. Он используется в качестве сигнала для других животных.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/African_Lion_Safari_BRK5021_%2819804147642%29.jpg/1920px-African_Lion_Safari_BRK5021_%2819804147642%29.jpg',
          audio: 'https://freesound.org/data/previews/212/212764_71257-lq.mp3'
        },
        {
          id: 3,
          name: 'Енот',
          species: 'Procyon lotor',
          description: 'Еноты довольно общительныe животные, у них весьма разнообразная звуковая гамма. Используя свой голос, представители этого семейства общаются между собой, также они могут проявлять звуками свои эмоции.',
          image: 'https://vignette.wikia.nocookie.net/lisenot/images/d/d9/-%D0%BF%D0%BE%D0%BB%D0%BE%D1%81%D0%BA%D1%83%D0%BD.jpg/revision/latest?cb=20150515121119&path-prefix=ru',
          audio: 'http://www.terrierman.com/Sounds/raccoon2.wav'
        },
        {
          id: 4,
          name: 'Волк',
          species: 'Canis lupus',
          description: 'Разнообразие и диапазон частот голосовых средств волков значительно превосходят возможности абсолютного большинства животных (кроме человека и рукокрылых). Волки издают такие звуки, как вой, завывание, хныканье, ворчание, рычание, тявканье, визг, лай.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Canis_lupus_265b.jpg',
          audio: 'https://freesound.org/data/previews/395/395192_7495033-lq.mp3'
        },
        {
          id: 5,
          name: 'Гиена',
          species: 'Crocuta crocuta',
          description: 'Исследователи обнаружили, что гиены обозначают свой социальный статус с помощью характерных звуков, напоминающих хохот или хихиканье, которые они издают обычно при драках за добычу.',
          image: 'https://i2.wp.com/media-news.com.ua/wp-content/uploads/2020/01/Birds-Pray.jpg',
          audio: 'http://cd.textfiles.com/sigserieswin/SOUNDS/WAV/HYENA.WAV'
        },
        {
          id: 6,
          name: 'Кошка',
          species: 'Félis silvéstris cátus',
          description: 'Для домашних кошек характерен звук "мяу", он имеет много разных вариаций. Например, затяжной звук, нечто среднее между «мяу» и криком, — это способ, которым кошка хочет привлечь к себе внимание.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Gato_enervado_pola_presencia_dun_can.jpg',
          audio: 'https://freesound.org/data/previews/412/412017_3652520-lq.mp3'
        },
      ],
}

const warmupReducer = (state = initialState, action) => {
    switch (action.type) {
        case (CURRENT_BIRD): {
          let localState = {...state};
          localState.currentBirdName = action.id;
          return localState;
        }
        case (BIRD_DESCRIPTION_ID) : {
          let localState = {...state};
          localState.birdDescriptionId = action.id;
          localState.birdDescription = localState.birds[action.id - 1];
          if (localState.currentBirdName===action.id) {
            localState.isCorrect = true;
            localState.stopClick=true;
          }
          return localState;
        }
        case (NEXT_LEVEL) : {
          let localState = {...state};
          
          if (localState.counter <= 6) {
            localState.gameOver = false;
            localState.isCorrect = false;
            localState.currentBirdName = "";
            localState.birdDescriptionId = "";
            localState.birdDescription = "";
            localState.birds = birdsData[localState.counter];
            localState.counter += 1;
            localState.changeScore=true;
            localState.isClicked=false;
            localState.stopClick=false;
            localState.questionNumber =  randomQuestion(0, 5);
          }
          if (localState.counter>6) {
            localState.isCorrect = true;
            localState.gameOver = true;
            localState.counter  = 0; 
            
          }
          return localState;
        }
        case (SET_SCORE): {
          let localState = {...state};
          function checkRepeatClick(arr, el) {
            return arr.some(function(arrEl) {
              return el === arrEl;
            })
          }
          if(!localState.isCorrect && !checkRepeatClick(localState.pressedAnswers, localState.birdDescriptionId)&&localState.changeScore) {
            localState.defaultScore -= 1;
            localState.pressedAnswers.push(localState.birdDescriptionId);
           
          }
          else if (localState.isCorrect&&localState.changeScore) {
            localState.score += localState.defaultScore;
            localState.pressedAnswers=[];
            localState.defaultScore = 5;
            localState.changeScore=false;
          }

          
          return localState;
        }
        case (SET_ZERO_SCORE): {
          let localState = {...state};
          localState.score = 0;
          return localState;
        }
        case (SET_IS_CLICKED): {
          let localState = {...state};
          localState.isClicked = true;
          return localState;
        }
        case (SET_STOP_CLICK): {
          let localState = {...state};
          localState.stopClick = true;
          return localState;
        }
        default: return state;
    }
}


export default warmupReducer;