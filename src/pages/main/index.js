import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import backgroundIMG from "../../assets/images/background.gif";
import backgroundNtIMG from "../../assets/images/background_nt.gif";
import { ReactComponent as ChinaContainer } from "../../assets/images/china_container.svg";
import { ReactComponent as TwaianContainer } from "../../assets/images/twaian_container.svg";
import { ReactComponent as Panda } from "../../assets/images/panda.svg";
import { ReactComponent as BlueBird } from "../../assets/images/blue_bird.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundIMG});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
`;

const ChildContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.right ? "end" : "start")};
  justify-content: ${(props) => (props.right ? "end" : "start")};
`;

const Number = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.right ? "end" : "start")};
  justify-content: ${(props) => (props.right ? "end" : "start")};
`;

export default function Main({}) {
  const [marketCap, setMarketCap] = useState({
    china: 0,
    taiwan: 0,
  });

  return (
    <Container>
      <ChildContainer>
        <ChinaContainer />
        <Panda
          className="ball"
          style={{
            alignSelf: "end",
          }}
        />
      </ChildContainer>
      <ChildContainer right>
        <BlueBird
          className="ball"
          style={{ alignSelf: "start", marginLeft: "5%" }}
        />
        <TwaianContainer>
          {String(marketCap.taiwan)
            .split("")
            .map((x, i) => {
              return (
                <Number key={i.toString()} blue>
                  {x}
                </Number>
              );
            })}
        </TwaianContainer>
      </ChildContainer>
    </Container>
  );
}
