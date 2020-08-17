import { PageAction, PAGE_MOVE } from '../../action/page/index';

const pageReducer = (state: string = '', action: PageAction): string => {
  switch (action.type) {
    case PAGE_MOVE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default pageReducer;