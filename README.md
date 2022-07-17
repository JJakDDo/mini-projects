# mini-projects

HTML/CSS/JS로 만드는 미니 프로젝트

### 01 - Expanding Cards [코드](https://github.com/JJakDDo/mini-projects/tree/main/01-Expanding-Cards)

css의 flex 속성과 transition을 활용해서 각 카드들을 클릭했을 때 펼쳐지는 애니메이션을 구현했다.

### 02 - Progress Steps [코드](https://github.com/JJakDDo/mini-projects/tree/main/02-Progress-Step)

현재 진행 정도를 step으로 나누어서 보여주는 progress bar를 구현했다.

다음 step으로 이동할 때 transition으로 애니메이션을 구현했다.

### 03 - Search Bar [코드](https://github.com/JJakDDo/mini-projects/tree/main/03-Search-Bar)

검색창이 처음에는 돋보기 아이콘만 보이다가 아이콘을 클릭했을 때 width가 늘어나면서 input 박스가 보인다.

다시 돋보기 아이콘을 클릭하면 크기가 줄어든다.

검색창이 줄어들었을 때는 input 박스가 안보이고 늘어났을 때는 보이는 기능은 css의 overflow: hidden 속성을 활용해서 구현했다.

### 04 - Blurry Loading Image [코드](https://github.com/JJakDDo/mini-projects/tree/main/04-Blur-Image-Loading)

이미지가 로딩이 될 때 처음에는 Blurry 상태이다가 로딩이 100%가 되면 선명한 이미지가 노출된다.

css의 filter: blur() 함수를 사용해서 이미지의 blur 효과를 구현했다.

### 05 - Hidden Search Bar [코드](https://github.com/JJakDDo/mini-projects/tree/main/05-Hidden-Search-Bar)

돋보기 모양의 버튼을 클릭하면 숨겨져있던 Search Bar가 애니메이션과 함께 노출된다.

버튼 안에 icon을 추가해줬는데 icon이 가운데 정렬이 되지 않아서 line-height: 0을 추가해줘서 해결했다.

### 06 - Text Wave [코드](https://github.com/JJakDDo/mini-projects/tree/main/06-Text-Wave)

Input 박스를 클릭하면 텍스트들이 웨이브 치듯이 위로 올라가는 애니메이션을 구현했다.

다른 영역을 클릭하면 텍스트들이 다시 웨이브 치면서 원래 위치로 내려간다.

### 07 - KeyCodes [코드](https://github.com/JJakDDo/mini-projects/tree/main/07-KeyCodes)

키보드에서 임의의 키를 누르면 해당 키의 키코드 값들이 노출되게 구현했다.

div에서 텍스트를 정중앙에 위치하기 위해서 text-align:center와 line-height를 div의 height와 동일하게 맞춰서 해결했다.

event.keyCode는 현재 deprecated 되어서 사용 하지않고 event.code를 대신 사용한다.

### 08 - Drink Water [코드](https://github.com/JJakDDo/mini-projects/tree/main/08-DrinkWater)

하루에 물을 얼마나 마시는지 측정하기 위해 250ml 잔을 마우스로 클릭하면 목표치인 2L 중 얼마나 마셨는지와 몇 L가 남았는지 알려준다.
