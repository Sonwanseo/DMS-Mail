import React, { useState, useEffect } from "react";
import data from "./test";
import Profile from "./Profile";
import * as S from "./Styles";

const Mail = () => {
  const [focusing, setFocusing] = useState(0);
  useEffect(() => {
    console.log("Mail 렌더링");
  });
  return (
    <S.Container>
      <S.LeftWrapper>
        <S.LeftTopText>MAIL</S.LeftTopText>
        {data.mailList.map((current, index) => {
          return (
            <Profile
              key={index}
              src={current.profile}
              name={current.name}
              focusing={focusing === index}
              setFocusing={setFocusing}
              index={index}
            />
          );
        })}
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.RightProfileWraper>
          <S.RightProfileImg src={data.mailList[focusing].profile} />
          <S.RightProfileName>
            {data.mailList[focusing].name}
          </S.RightProfileName>
        </S.RightProfileWraper>
        <S.RightFooter>
          <S.RightTitle>{data.mailList[focusing].header}</S.RightTitle>
          <S.RightComment>{data.mailList[focusing].content}</S.RightComment>
        </S.RightFooter>
      </S.RightWrapper>
    </S.Container>
  );
};

export default Mail;
