export function selectElement(element) {
  return {
    type: 'ELEMENT_SELECTED',
    payload: element
  };
}
