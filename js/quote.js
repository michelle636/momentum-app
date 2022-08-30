const quotes = [
    {
        quote: "Life is either a daring adventure or nothing.",
        meaning: "인생은 과감한 모험이던가, 아니면 아무 것도 아니다.",
        author: "-헬렌 켈러-"
    },
    {
        quote: "I'm youth, I'm joy, I'm a little bird that has broken out of the egg.",
        meaning: "나는 젊음이요, 나는 기쁨이요, 나는 알에서 갓 깬 작은 새다.",
        author: "-제임스 M.배리-"
    },
    {
        quote: "Only passions, great passions, can elevate the soul to great things.",
        meaning: "마음을 위대한 일로 이끄는 것은 오직 열정, 위대한 열정뿐이다.",
        author: "-드니 디드로-"
    },
    {
        quote: "I think the prime reason for existence, for living in this world, is discovery.",
        meaning: "존재의 가장 중요한 이유, 세상을 사는 이유는 발견이다.",
        author: "-제임스 딘-"
    },
    {
        quote: "The reading of all good books is like a conversation with the finest men of past centuries.",
        meaning: "좋은 책을 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를 나누는 것과 같다.",
        author: "-르네 데카르트-"
    },
    {
        quote: "Learning to love yourself is the greatest love of all.",
        meaning: "자신을 사랑하는 법을 아는 것이 가장 위대한 사랑입니다.",
        author: "-마이클 매서-"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        meaning: "여러분의 삶을 정의하는 것은 여러분 자신입니다. 다름 사람들이 여러분의 대본을 쓰게 하지 마세요.",
        author: "-오프라 윈프리-"
    },
    {
        quote: "Yesterday is a history, tomorrow is a mystery, today is a gift of god, which is why we call it the present.",
        meaning: "어제는 이미 지나간 날이고, 내일은 알수가 없고, 오늘이 신의 선물이다. 그래서 우리는 present(현재=선물)라고 부른다.",
        author: "-빌 킨-"
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving.",
        meaning: "성공은 행동과 연결되어 있다. 성공적인 사람들은 계속해서 움직인다.",
        author: "-"
    },
    {
        quote: "Victory is sweetest when you've known defeat",
        meaning: "실패를 겪어봐야 성공이 가장 달콤하다.",
        author: "-"
    },
    
]

const quote = document.querySelector("#quote span:nth-child(1)");
const meaning = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:nth-child(3)");

const todaysQuote = quotes[Math.floor(Math.random() *quotes.length)];

quote.innerText = todaysQuote.quote;
meaning.innerText = todaysQuote.meaning;
author.innerText = todaysQuote.author;