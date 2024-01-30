let right = [
    {
        id: 1,
        rightData: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
        rightDate: "11:31 / 15.05.2020"
    },
    {
        id: 1,
        rightData: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
        rightDate: "11:31 / 15.05.2020"
    },
    {
        id: 1,
        rightData: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
        rightDate: "11:31 / 15.05.2020"
    },
    {
        id: 1,
        rightData: "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
        rightDate: "11:31 / 15.05.2020"
    }

]

let rightCards = document.querySelector("#top")

for (let index = 0; index < right.length; index++) {
    const element = right[index];
    console.log(element);

    let rightCard = document.createElement("div")
    rightCard.className = "rightCard"

    let rightData = document.createElement("h5")
    let rightDate = document.createElement("p")
    let rightHr = document.createElement("hr")

    rightData.textContent = element.rightData
    rightDate.textContent = element.rightDate

    rightCard.appendChild(rightData)
    rightCard.appendChild(rightDate)
    rightCard.appendChild(rightHr)

    rightCards.appendChild(rightCard)

}

