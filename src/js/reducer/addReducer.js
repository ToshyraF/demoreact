export default function reducer(state={
    number: 0
},action){
  switch (action.type) {
    case "ADD":
      return {number:action.payload}
      break;
    case "ADD_LOW":
        return {number:action.payload}
        break;
    default:
      return {number: 10}
  }
}
