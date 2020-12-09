import React, { FC, ReactElement, ChangeEvent, useState } from "react";

import SearchList from "./SearchList";

import * as S from "../style";
import { OutingPlaceSearch } from "../../../assets";

interface Props {
  place: string;
  handlePlace: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ApplyPlace: FC<Props> = ({ place, handlePlace }): ReactElement => {
  const [searchProp, setSearchProp] = useState([]);

  const searchPlace = () => {
    console.log(place);
  };

  return (
    <S.FormPlace>
      <S.ApplyFormItemTitle htmlFor="place">장소</S.ApplyFormItemTitle>
      <S.ApplyFormInputWrap>
        <S.FormPlaceInput
          type="text"
          id="place"
          placeholder="외출 장소를 입력하세요."
          onChange={handlePlace}
          onKeyDown={e => e.key === "Enter" && searchPlace()}
        />
        <S.FormPlaceInputSearch
          src={OutingPlaceSearch}
          alt="searching"
          title="searching"
          onClick={searchPlace}
        />
        <SearchList />
      </S.ApplyFormInputWrap>
    </S.FormPlace>
  );
};

export default ApplyPlace;
