import { Item } from "../types/Item";
import { ListActions } from "../types/ListActions";

export const listReducer = (list: Item[], action: ListActions) => {
  switch (action.type) {
    case 'add':
      return [...list, {
        id: list.length,
        text: action.payload.text,
        done: false
      }]
      
    case 'editText':
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.newText
        }
        return item;
      })

    case 'toggleDone':
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.done = !item.done
        }
        return item;
      })

    case 'remove':
      return list.filter(item => item.id !== action.payload.id);
      
    default:
      return list;
  }
}