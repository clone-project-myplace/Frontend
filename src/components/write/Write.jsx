import React, {  useState } from "react";

import { WriteHeader,
  WriteHeaderTitle ,
  MainContainer, 
  EmojiContainer,
  EmojiTitle,
  EmojiSubTitle,
  EmojiChoiceContainer,
  EmojiPrice,
  EmojiChoiceBox
  } from './style';


function Write() {
  
  //이중 for

  const [Arr, setArr] = useState([]);

  const [click, setClick] = useState('true');
  const [clickBtn, setClickBtn] = useState('white');

  const [click2, setClick2] = useState('true');
  const [clickBtn2, setClickBtn2] = useState('white');

  const [click3, setClick3] = useState('true');
  const [clickBtn3, setClickBtn3] = useState('white');

  const [click4, setClick4] = useState('true');
  const [clickBtn4, setClickBtn4] = useState('white');

  const [click5, setClick5] = useState('true');
  const [clickBtn5, setClickBtn5] = useState('white');

  
  const [clic6k, setClick6] = useState('true');
  const [clickBtn6, setClickBtn6] = useState('white');

  const [click7, setClick7] = useState('true');
  const [clickBtn7, setClickBtn7] = useState('white');

  const [click8, setClick8] = useState('true');
  const [clickBtn8, setClickBtn8] = useState('white');

  const [click9, setClick9] = useState('true');
  const [clickBtn9, setClickBtn9] = useState('white');

  const [click10, setClick10] = useState('true');
  const [clickBtn10, setClickBtn10] = useState('white');

  const [click11, setClick11] = useState('true');
  const [clickBtn11, setClickBtn11] = useState('white');

  const [click12, setClick12] = useState('true');
  const [clickBtn12, setClickBtn12] = useState('white');

  const [click13, setClick13] = useState('true');
  const [clickBtn13, setClickBtn13] = useState('white');

  const [click14, setClick14] = useState('true');
  const [clickBtn14, setClickBtn14] = useState('white');

  const [click15, setClick15] = useState('true');
  const [clickBtn15, setClickBtn15] = useState('white');


  //클릭 시 배열에 추가
  

  console.log(Arr);

  const Click1 = () => {
    if (click === 'false') {
      setClick('true');
      setClickBtn('white');
      
      const Array = Arr.filter((item) => item !== 'k1');
      
      setArr(Array);

    } else {
      setClick('false');
      setClickBtn('#00CC99');

      setArr([...Arr, 'k1']);
      
    }
  }
  
  const Click2 = () => {
    if (click2 === 'false') {
      setClick2('true');
      setClickBtn2('white');

      const Array = Arr.filter((item) => item !== 'k2');
      setArr(Array);
    } else {
      setClick2('false');
      setClickBtn2('#00CC99');

      
      setArr([...Arr, 'k2']);
    }
  }


  const Click3 = () => {
    if (click3 === 'false') {
      setClick3('true');
      setClickBtn3('white')

      const Array = Arr.filter((item) => item !== 'k3');
      setArr(Array);
    } else {
      setClick3('false');
      setClickBtn3('#00CC99');
      setArr([...Arr, 'k3']);
    }
  }

  const Click4 = () => {
    if (click4 === 'false') {
      setClick4('true');
      setClickBtn4('white')

      const Array = Arr.filter((item) => item !== 'k4');
      setArr(Array);

    } else {
      setClick4('false');
      setClickBtn4('#00CC99')

      setArr([...Arr, 'k4']);
    }
  }

  
  const Click5 = () => {
    if (click5 === 'false') {
      setClick5('true');
      setClickBtn5('white')
      const Array = Arr.filter((item) => item !== 'k5');
      setArr(Array);
    } else {
      setClick5('false');
      setClickBtn5('#00CC99');
      setArr([...Arr, 'k5']);
    }
  }






  return (
    
<MainContainer>
    <WriteHeader>
      <WriteHeaderTitle>스타벅스 이수 자이점</WriteHeaderTitle>
      <div>2023.03.03 (금)</div>
      <div>따뜻한 아이스 아메리카노</div>
    </WriteHeader>
    <EmojiContainer>
      <EmojiTitle>
        어떤 점이 좋았나요?
      </EmojiTitle>
      <EmojiSubTitle>이 장소에 어울리는 키워드를 골라주세요.</EmojiSubTitle>

      <EmojiChoiceContainer>
        <EmojiPrice>
      
    {clickBtn === '#00CC99' ? <EmojiChoiceBox emoji="🍰" textColor="white" btnColor={clickBtn} onClick={Click1}  fontWeight="600" text="디저트가 맛있어요"/> : <EmojiChoiceBox emoji="🍰" textColor="black" btnColor={clickBtn} onClick={Click1}  text="디저트가 맛있어요" />}
    {clickBtn2 === '#00CC99' ? <EmojiChoiceBox emoji="🪙" textColor="white" btnColor={clickBtn2} onClick={Click2}  fontWeight="600" text="가성비가 좋아요"/> : <EmojiChoiceBox emoji="🪙" textColor="black" btnColor={clickBtn2} onClick={Click2}  text="가성비가 좋아요" />}
    {clickBtn3 === '#00CC99' ? <EmojiChoiceBox emoji="🍹" textColor="white" btnColor={clickBtn3} onClick={Click3}  fontWeight="600" text="음료가 맛있어요"/> : <EmojiChoiceBox emoji="🍹" textColor="black" btnColor={clickBtn3} onClick={Click3}  text="음료가 맛있어요" />}
    {clickBtn4 === '#00CC99' ? <EmojiChoiceBox emoji="👨‍🍳" textColor="white" btnColor={clickBtn4} onClick={Click4}  fontWeight="600" text="특별한 메뉴가 있어요"/> : <EmojiChoiceBox emoji="👨‍🍳" textColor="black" btnColor={clickBtn4} onClick={Click4}  text="특별한 메뉴가 있어요" />}
    {clickBtn5 === '#00CC99' ? <EmojiChoiceBox emoji="☕" textColor="white" btnColor={clickBtn5} onClick={Click5}  fontWeight="600" text="커피가 맛있어요"/> : <EmojiChoiceBox emoji="☕" textColor="black" btnColor={clickBtn5} onClick={Click5}  text="커피가 맛있어요" />}
      
        </EmojiPrice>
        

        <EmojiPrice>
        
    {clickBtn === '#00CC99' ? <EmojiChoiceBox emoji="🍰" textColor="white" btnColor={clickBtn} onClick={Click1}  fontWeight="600" text="디저트가 맛있어요"/> : <EmojiChoiceBox emoji="🍰" textColor="black" btnColor={clickBtn} onClick={Click1}  text="디저트가 맛있어요" />}
    {clickBtn2 === '#00CC99' ? <EmojiChoiceBox emoji="🪙" textColor="white" btnColor={clickBtn2} onClick={Click2}  fontWeight="600" text="가성비가 좋아요"/> : <EmojiChoiceBox emoji="🪙" textColor="black" btnColor={clickBtn2} onClick={Click2}  text="가성비가 좋아요" />}
    {clickBtn3 === '#00CC99' ? <EmojiChoiceBox emoji="🍹" textColor="white" btnColor={clickBtn3} onClick={Click3}  fontWeight="600" text="음료가 맛있어요"/> : <EmojiChoiceBox emoji="🍹" textColor="black" btnColor={clickBtn3} onClick={Click3}  text="음료가 맛있어요" />}
    {clickBtn4 === '#00CC99' ? <EmojiChoiceBox emoji="👨‍🍳" textColor="white" btnColor={clickBtn4} onClick={Click4}  fontWeight="600" text="특별한 메뉴가 있어요"/> : <EmojiChoiceBox emoji="👨‍🍳" textColor="black" btnColor={clickBtn4} onClick={Click4}  text="특별한 메뉴가 있어요" />}
    {clickBtn5 === '#00CC99' ? <EmojiChoiceBox emoji="☕" textColor="white" btnColor={clickBtn5} onClick={Click5}  fontWeight="600" text="커피가 맛있어요"/> : <EmojiChoiceBox emoji="☕" textColor="black" btnColor={clickBtn5} onClick={Click5}  text="커피가 맛있어요" />}
      
        </EmojiPrice>

        <EmojiPrice>
        
    {clickBtn === '#00CC99' ? <EmojiChoiceBox emoji="🍰" textColor="white" btnColor={clickBtn} onClick={Click1}  fontWeight="600" text="디저트가 맛있어요"/> : <EmojiChoiceBox emoji="🍰" textColor="black" btnColor={clickBtn} onClick={Click1}  text="디저트가 맛있어요" />}
    {clickBtn2 === '#00CC99' ? <EmojiChoiceBox emoji="🪙" textColor="white" btnColor={clickBtn2} onClick={Click2}  fontWeight="600" text="가성비가 좋아요"/> : <EmojiChoiceBox emoji="🪙" textColor="black" btnColor={clickBtn2} onClick={Click2}  text="가성비가 좋아요" />}
    {clickBtn3 === '#00CC99' ? <EmojiChoiceBox emoji="🍹" textColor="white" btnColor={clickBtn3} onClick={Click3}  fontWeight="600" text="음료가 맛있어요"/> : <EmojiChoiceBox emoji="🍹" textColor="black" btnColor={clickBtn3} onClick={Click3}  text="음료가 맛있어요" />}
    {clickBtn4 === '#00CC99' ? <EmojiChoiceBox emoji="👨‍🍳" textColor="white" btnColor={clickBtn4} onClick={Click4}  fontWeight="600" text="특별한 메뉴가 있어요"/> : <EmojiChoiceBox emoji="👨‍🍳" textColor="black" btnColor={clickBtn4} onClick={Click4}  text="특별한 메뉴가 있어요" />}
    {clickBtn5 === '#00CC99' ? <EmojiChoiceBox emoji="☕" textColor="white" btnColor={clickBtn5} onClick={Click5}  fontWeight="600" text="커피가 맛있어요"/> : <EmojiChoiceBox emoji="☕" textColor="black" btnColor={clickBtn5} onClick={Click5}  text="커피가 맛있어요" />}
      
        </EmojiPrice>

        <EmojiPrice>
        <button>하하</button>
        <button>하하</button>
        <button>하하</button>
        <button>하하</button>
        <button>하하</button>
        </EmojiPrice>
        
      </EmojiChoiceContainer>

    </EmojiContainer>
    
  
</MainContainer>
   

    
  );
}

export default Write;


