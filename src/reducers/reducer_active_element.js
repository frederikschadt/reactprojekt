export default function (state = null, action) {
  switch (action.type) {
    case 'ELEMENT_SELECTED':
      return action.payload;
    }

    return state;
}
