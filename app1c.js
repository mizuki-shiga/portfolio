const quiz = [
  {
    question: '問題１. 飛行機の中で食べるように作られた野菜があります。その野菜はどれでしょうか？',
    answers: ['①ミニトマト','②パプリカ','③アボカド','④ズッキーニ'],
    correct: '①ミニトマト'
  },{
    question: '問題２. 大根おろしはあるすり方をすると辛くなります。そのすすり方とはどれでしょうか？',
    answers: ['①ゆっくりする','②力を込めてする','③力を弱めてする','④ 早くする '],
    correct: '④ 早くする '
  },{
    question: '問題３. 砂糖は昔あるものとして活用されていました。活用されていたものとはなんでしょう？',
    answers: ['① 湿布 ','②頭痛薬','③風邪薬','④胃痛薬'],
    correct: '③風邪薬'
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解....');
  }

 quizIndex++;

 if(quizIndex < quizLength){
   setupQuiz();
 }else {
   window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
 }

};
//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
