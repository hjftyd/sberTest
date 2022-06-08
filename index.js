const client = {
  ProfileId: "12w562qrx",
  PersonInfo: {
    Name: "Василий Иванов",
    BirthDate: "12-09-1990",
    Citizenship: "Russian Federation",
  },
  CardInfo: [
    {
      CardNumber: "1234890456793333",
      CardName: "VISA CLASSIC",
      ExpDate: "30-02-2019",
    },
    {
      CardNumber: "1234000145292133",
      CardName: "MASTERCARD GOLD",
      ExpDate: "21-05-2020",
    },
    {
      CardNumber: "1234000145293333",
      CardName: "MIR КЛАССИЧЕСКАЯ",
      ExpDate: "02-12-2019",
    },
  ],
};

function getCardsArrayExpDate(json, date) {
  const data = JSON.parse(json);
  const cardsArray = [];
  for (let i = 0; i < data.CardInfo.length; i++) {
    if (convertDate(data.CardInfo[i].ExpDate) < convertDate(date)) {
      cardsArray.push(
        data.CardInfo[i].CardNumber.substring(
          data.CardInfo[i].CardNumber.length - 4
        )
      );
    }
  }
  if (cardsArray.length) {
    return cardsArray;
  }
  return null;
}
const info = JSON.stringify(client);
const clientInfo = info;
function convertDate(date) {
  const part = date.split("-");
  return new Date(part[2] + "-" + part[1] + "-" + part[0]);
}
console.log(getCardsArrayExpDate(clientInfo, "21-05-2020"));
