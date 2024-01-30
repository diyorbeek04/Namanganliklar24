let news = [
    {
        id: 1,
        newsImage: './images/news/1.jpg',
        newsData: "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
        newsDate: "05:28 / 16.05.2020"
    },
    {
        id: 1,
        newsImage: './images/news/2.jpg',
        newsData: "Карантин в Узбекистане продлен до 1 июня",
        newsDate: "05:28 / 16.05.2020"
    },
    {
        id: 1,
        newsImage: './images/news/3.jpg',
        newsData: "Обмелевшая Сардоба: стихия или человеческий фактор?",
        newsDate: "05:28 / 16.05.2020"
    },
    {
        id: 1,
        newsImage: './images/news/4.jpg',
        newsData: "Следствие проверяет четыре версии прорыва Сардобинской плотины",
        newsDate: "05:28 / 16.05.2020"
    },
    {
        id: 1,
        newsImage: './images/news/5.jpg',
        newsData: "Выявлено еще 7 случаев коронавируса",
        newsDate: "05:28 / 16.05.2020"
    },
    {
        id: 1,
        newsImage: './images/news/6.jpg',
        newsData: "Итоги второго месяца карантина",
        newsDate: "05:28 / 16.05.2020"
    },
]

let Cards = document.querySelector("#cards")

for (let index = 0; index < news.length; index++) {
    const element = news[index];
    console.log(element);

    let card = document.createElement("div")
    card.className = "card"

    let cardImage = document.createElement("img")
    let cardData = document.createElement("h5")
    let cardDate = document.createElement("p")

    cardImage.setAttribute("src" , element.newsImage)
    cardData.textContent = element.newsData
    cardDate.textContent = element.newsDate

    card.appendChild(cardImage)
    card.appendChild(cardData)
    card.appendChild(cardDate)

    Cards.appendChild(card)

}

