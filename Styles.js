import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const LeftWrapper = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: #373b5f;
`;

export const LeftTopText = styled.p`
  position: relative;
  top: 1vh;
  left: 2vw;
  width: 5vw;
  height: 5vh;
  text-align: left;
  font-weight: bold;
  font-size: 1.75rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
`;

export const LeftProfileWrapper = styled.div`
  display: flex;
  width: 20vw;
  height: 8vh;
  background-color: ${props => (props.focusing ? "#242849" : "#373b5f")};
  cursor: pointer;
  &:hover {
    background-color: #242849;
    transition: 1s;
  }

  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
`;

export const LeftEachProfileWrapper = styled.div`
  position: relative;
`;

export const LeftProfileImg = styled.img`
  margin: 0.5rem 0 0 1rem;
  border-radius: 100%;
  width: 3vw;
  height: 5vh;
`;

export const LeftProfileName = styled.p`
  padding-left: 1vw;
  padding-top: 2vh;
  position: relative;
  flex: 1;
  font-size: 1rem;
  font-family: "Segoe UI";
  margin: 0;
  color: white;
  width: 15vw;
  height: 8vh;
`;

export const RightWrapper = styled.div`
  width: 80vw;
  height: 100vh;
`;

export const RightProfileWraper = styled.div`
  display: flex;
  height: 10vh;
  margin-top: 10vh;
  margin-left: 5vw;
`;

export const RightProfileImg = styled.img`
  margin-left: 1vw;
  margin-top: 2vh;
  border-radius: 100%;
  width: 3vw;
  height: 5vh;
`;

export const RightProfileName = styled.p`
  position: relative;
  padding-left: 1vw;
  padding-top: 3vh;
  flex: 1;
  font-family: "Segoe UI";
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  color: black;
  width: 20vw;
  height: 8vh;
`;

export const RightFooter = styled.div`
  margin-left: 8vw;
  width: 60vw;
  height: 65vh;
`;

export const RightTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Segoe UI";
`;

export const RightComment = styled.p`
  font-size: 1rem;
  font-family: "Segoe UI";
  white-space: pre-line;
`;
