import {
  put_text,
  remove_text,
  get_text_list
} from '../actions/types';

function removeHtml(html) {
  const div = document.createElement('div');

  div.innerHTML = html;

  return div.textContent;
}


function textList(state = {}, action) {

  switch (action.type) {
    case get_text_list: {
      const texts = {};

      action.payload.forEach(text => {
        texts[text.id] = text;
        texts[text.id].snippet = removeHtml(text.text).substring(0, 50);
      });

      return texts;
    }

    case put_text: {
      const texts = Object.assign({}, state, { [action.payload.id]: action.payload });

      return texts;
    }

    case remove_text: {
      const texts = Object.assign({}, state);

      delete texts[action.payload];

      return texts;
    }



    default:
      return state
  }
}

export default textList;