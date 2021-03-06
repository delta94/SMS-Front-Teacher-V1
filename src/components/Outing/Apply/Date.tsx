import React, {
  FC,
  ReactElement,
  Dispatch,
  SetStateAction,
  useMemo,
  FormEvent
} from "react";

import * as S from "../style";

interface Props {
  formDate: string;
  onInputDate: (e: FormEvent<HTMLInputElement>) => void;
}

const ApplyDate: FC<Props> = ({ formDate, onInputDate }): ReactElement => {
  const getMinDate = useMemo((): string => {
    const date: Date = new Date();
    const y: number = date.getFullYear();
    const m: number = date.getMonth() + 1;
    const d: number = date.getDate();

    return `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`;
  }, []);

  const getMaxDate = useMemo((): string => {
    const min = getMinDate;
    const date = new Date();
    const lastDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const splitMin = min.split("-");
    let y = +splitMin[0];
    let m = +splitMin[1];
    let d = +splitMin[2] + 7;

    if (d > lastDate) {
      d = d - lastDate;
      m++;
    }
    if (m > 12) {
      m = 1;
      y++;
    }

    return `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`;
  }, []);

  const getLocalDate = useMemo(() => {
    const selected: Date = new Date(formDate);
    const y = selected.getFullYear();
    const m = selected.getMonth() + 1;
    const fixedM = m < 10 ? `0${m}` : `${m}`;
    const d = selected.getDate();
    return `${y}년 ${fixedM}월 ${d}일`;
  }, [formDate]);

  return (
    <S.FormDate>
      <S.ApplyFormItemTitle>날짜</S.ApplyFormItemTitle>
      <S.ApplyFormInputWrap className="dateWrap">
        <S.FormDateText className={formDate ? "selected" : ""}>
          {formDate ? getLocalDate : "외출 날짜를 선택하세요"}
        </S.FormDateText>
        <S.FormDateInput
          type="date"
          min={getMinDate}
          max={getMaxDate}
          onInput={onInputDate}
        />
      </S.ApplyFormInputWrap>
    </S.FormDate>
  );
};

export default ApplyDate;
