import { ItemDetails } from "../redux/ducks/cart";
import noImage from "../localImages/noImage.png";
import { DrinkData } from "./products";

export function createEntry(
  item: ItemDetails
): { id: number; quantity: number; image: any; name: string; price: number } {
  let newEntry = {
    id: 0,
    quantity: 1,
    name: "default name",
    image: noImage,
    price: 0,
  };
  if (item.id) {
    newEntry.id = item.id;
  }
  if (item.quantity) {
    newEntry.quantity = item.quantity;
  }
  if (item.image) {
    newEntry.image = item.image;
  }
  if (item.name) {
    newEntry.name = item.name;
  }
  if (item.price) {
    newEntry.price = item.price;
  }
  return newEntry;
}

export function makeNeat(ordered) {
  const finalArr: Array<ItemDetails> = [];
  var idArrays = ordered.map((x) => x.id);
  var orderBank = {};
  for (let i of idArrays) {
    if (i in orderBank) {
      orderBank[i] += 1;
    } else {
      orderBank[i] = 1;
    }
  }
  for (const [key, value] of Object.entries(orderBank)) {
    finalArr.push(
      createEntry({
        id: DrinkData[key]._id,
        quantity: value,
        image: DrinkData[key].image,
        name: DrinkData[key].name,
        price: DrinkData[key].price,
      })
    );
  }

  return finalArr;
}
