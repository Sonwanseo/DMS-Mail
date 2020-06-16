import React, { useEffect } from "react";
import { LeftProfileWrapper, LeftProfileImg, LeftProfileName } from "./Styles";

const Profile = props => {
  const onClick = () => {
    props.setFocusing(props.index);
  };
  useEffect(() => {
    console.log("Profile 렌더링");
  });
  return (
    <LeftProfileWrapper
      key={props.index}
      focusing={props.focusing}
      onClick={onClick}
    >
      <LeftProfileImg src={props.src} />
      {props.name.length > 9 ? (
        <LeftProfileName>{props.name.slice(0, 10)}...</LeftProfileName>
      ) : (
        <LeftProfileName>{props.name}</LeftProfileName>
      )}
    </LeftProfileWrapper>
  );
};

export default Profile;
