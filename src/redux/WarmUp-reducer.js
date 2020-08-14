import {birdsData} from '../components/birdsData';

function randomQuestion(min, max) {
  let randQuestion = min + Math.random() * (max + 1 - min);
  return Math.floor(randQuestion);
}

const CURRENT_BIRD = "CURRENT_BIRD";
const BIRD_DESCRIPTION_ID = "BIRD_DESCRIPTION_ID";
const NEXT_LEVEL = "NEXT_LEEVEL";


export const currentBirdAC = (id) => {
  return {
      type: CURRENT_BIRD,
      id
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
      birdDescriptionIdAC(birdId);
    }
  }
}

export const nextLevelAC = () => {
  return {
    type: NEXT_LEVEL,
  }
}



let initialState = {
    "gameOver": false,
    "counter": 0,
    "isCorrect": false,
    "questionNumber": randomQuestion(0, 5),
    "currentBirdName": "",
    "birdDescriptionId": "",
    "birdDescription": "",
    "birds" : [       
        {
          id: 1,
          name: 'Ворон',
          species: 'Corvus corax',
          description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
          image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
          audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
        },
        {
          id: 2,
          name: 'Журавль',
          species: 'Grus grus',
          description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
          image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
          audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
        },
        {
          id: 3,
          name: 'Ласточка',
          species: 'Delichon urbicum',
          description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
          image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
          audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
        },
        {
          id: 4,
          name: 'Козодой',
          species: 'Caprimulgus europaeus',
          description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
          image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
          audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
        },
        {
          id: 5,
          name: 'Кукушка',
          species: 'Cuculus canorus',
          description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
          image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
          audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
        },
        {
          id: 6,
          name: 'Синица',
          species: 'Parus major',
          description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
          image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
          audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
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
          }
          return localState;
        }
        case (NEXT_LEVEL) : {
          let localState = {...state};

          if (localState.counter <6) {
            localState.isCorrect = false;
            localState.currentBirdName = "";
            localState.birdDescriptionId = "";
            localState.birdDescription = "";
            localState.counter += 1;
            localState.birds = birdsData[localState.counter];
          }
          else if (localState.counter===6) {
            localState.counter += 1;
            localState.gameOver = true;
          }
          else if (localState.counter ===7) {
            localState.counter = 0;
            localState.gameOver = false;
          }
          return localState;
        }
        default: return state;
    }
}


export default warmupReducer;