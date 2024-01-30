let moreNews = [
    {
        id: 1,
        moreNewsImage: './images/moreNews/1.png',
        moreNewsHead: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
        moreNewsData: "После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.",
        moreNewsDateIcon: './images/moreNews/ic_outline-date-range.svg',
        moreNewsDate: "11:31 / 15.05.2020"
    },
    {
        id: 1,
        moreNewsImage: './images/moreNews/2.png',
        moreNewsHead: "Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть повседневной жизни»",
        moreNewsData: "Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.",
        moreNewsDateIcon: './images/moreNews/ic_outline-date-range.svg',
        moreNewsDate: "11:31 / 15.05.2020"
    },
    {
        id: 1,
        moreNewsImage: './images/moreNews/3.png',
        moreNewsHead: "В Ташкенте планируют ввести новую систему электронных проездных билетов",
        moreNewsData: "Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.",
        moreNewsDateIcon: './images/moreNews/ic_outline-date-range.svg',
        moreNewsDate: "11:31 / 15.05.2020"
    },
    {
        id: 1,
        moreNewsImage: './images/moreNews/1.png',
        moreNewsHead: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
        moreNewsData: "После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.",
        moreNewsDateIcon: './images/moreNews/ic_outline-date-range.svg',
        moreNewsDate: "11:31 / 15.05.2020"
    },
    {
        id: 1,
        moreNewsImage: './images/moreNews/2.png',
        moreNewsHead: "Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть повседневной жизни»",
        moreNewsData: "Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.",
        moreNewsDateIcon: './images/moreNews/ic_outline-date-range.svg',
        moreNewsDate: "11:31 / 15.05.2020"
    },
    {
        id: 1,
        moreNewsImage: './images/moreNews/3.png',
        moreNewsHead: "В Ташкенте планируют ввести новую систему электронных проездных билетов",
        moreNewsData: "Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.",
        moreNewsDateIcon: './images/moreNews/ic_outline-date-range.svg',
        moreNewsDate: "11:31 / 15.05.2020"
    },
]

let moreCards = document.querySelector("#cards__left")

for (let index = 0; index < moreNews.length; index++) {
    const element = moreNews[index];
    console.log(element);

    let moreCard = document.createElement("div")
    moreCard.className = "moreCard"

    let date = document.createElement("div")
    date.className = "date__group"

    let Image = document.createElement("div")
    Image.className = "card__image"
    
    let Text = document.createElement("div")
    Text.className = "card__text"

    let cardMoreImage = document.createElement("img")
    let cardMoreHead = document.createElement("h3")
    let cardMoreData = document.createElement("h5")
    let cardMoreDateIcon = document.createElement("img")
    let cardMoreDate = document.createElement("p")

    cardMoreImage.setAttribute("src" , element.moreNewsImage)
    cardMoreHead.textContent = element.moreNewsHead
    cardMoreData.textContent = element.moreNewsData
    cardMoreDateIcon.setAttribute("src" , element.moreNewsDateIcon)
    cardMoreDate.textContent = element.moreNewsDate


    Image.appendChild(cardMoreImage)

    date.appendChild(cardMoreDateIcon)
    date.appendChild(cardMoreDate)

    Text.appendChild(cardMoreHead)
    Text.appendChild(cardMoreData)
    Text.appendChild(date)

    moreCard.appendChild(Image)
    moreCard.appendChild(Text)

    moreCards.appendChild(moreCard)

}


