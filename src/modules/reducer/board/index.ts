import { BoardObj } from '../../../components/default/Board/Board';
import {
  BoardAction,
  UPDATE_BOARD_LIST,
  UPDATE_BOARD_DETAIL,
} from '../../action/board';
import { BoardDetail } from '../../../containers/Notice/Detail/NoticeDetailContainer';

interface BoardState {
  list: BoardObj[];
  detail: BoardDetail;
}

const initialState: BoardState = {
  list: [],
  detail: {
    content: `- **동아리 메인**
    1. 에는 현재 모집 중인 동아리 리스트가 카드 형식으로 표시된다.
    2. 카드 형식에 들어갈 정보는 다음과 같다.
        1. 상단의 동아리 사진
        2. 동아리 이름, 동아리 장, 실, 모집 분야
    3. 카드를 클릭하면 동아리 세부 정보 페이지로 이동한다.
  
  - **동아리 세부 정보 페이지**
    1. 에 들어갈 정보는 다음과 같다.
    2. 우측 하단에 수정 완료 버튼이 있다.
    수정 완료 버튼을 누르면 동아리 정보가 수정되며 동아리 어드민 페이지로 이동한다.
        1. 상단의 동아리 사진
        2. 동아리 이름, 동아리 장, 실, 모집 분야
    3. 카드를 클릭하면 동아리 
    1. 에 들어갈 정보는 다음과 같다.
    2. 우측 하단에 수정 완료 버튼이 있다.
    수정 완료 버튼을 누르면 동아리 정보가 수정되며 동아리 어드민 페이지로 이동한다.`,
  },
};

const boardReducer = (
  state: BoardState = initialState,
  action: BoardAction,
): BoardState => {
  switch (action.type) {
    case UPDATE_BOARD_LIST: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case UPDATE_BOARD_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default boardReducer;
