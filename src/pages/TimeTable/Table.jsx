import { forwardRef } from 'react';
import styled from 'styled-components';

const Table = forwardRef(({ value }, ref) => {
  return (
    <S.Table ref={ref} className="timetable">
      <thead>
        <tr>
          <S.TH></S.TH>
          <S.TH>Mon</S.TH>
          <S.TH>Tue</S.TH>
          <S.TH>Wed</S.TH>
          <S.TH>Thu</S.TH>
          <S.TH>Fri</S.TH>
          <S.TH>Sat</S.TH>
          <S.TH>Sun</S.TH>
        </tr>
      </thead>
      <tbody>
        {value.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <S.TH>{rowIndex + 9}</S.TH>
            {row.map((_, columnIndex) => (
              <S.TD key={columnIndex} selected={value[rowIndex][columnIndex]} />
            ))}
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
});

const S = {
  Table: styled.table`
    cursor: pointer;
  `,
  TD: styled.td`
    width: 80px;
    height: 60px;
    background-color: ${(props) =>
      props.selected ? props.theme.colors.blue : 'white'};
    border: 1px solid ${(props) => props.theme.colors.grey2};
  `,
  TH: styled.th`
    background-color: ${(props) => props.theme.colors.grey1};
    user-select: none;
  `,
};

export default Table;
