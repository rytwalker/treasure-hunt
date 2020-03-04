import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHolding,
  faStore,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

const Buttons = () => {
  return (
    <ButtonContainer>
      <ManualButton onClick={() => this.handleManualMove("n")}>N</ManualButton>
      <ManualButton onClick={() => this.handleManualMove("s")}>S</ManualButton>
      <ManualButton onClick={() => this.handleManualMove("w")}>W</ManualButton>
      <ManualButton onClick={() => this.handleManualMove("e")}>E</ManualButton>
      <ManualButton onClick={this.handleTravelToShop}>
        <FontAwesomeIcon icon={faStore} />
      </ManualButton>
      <ManualButton onClick={this.handleSellTreasure}>
        <FontAwesomeIcon icon={faDollarSign} />
      </ManualButton>
      <ManualButton onClick={this.handleTakeTreasure}>
        <FontAwesomeIcon icon={faHandHolding} />
      </ManualButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  ${"" /* padding: 0 1rem; */}
  background: #525959;
  height: 100%;
`;

const ManualButton = styled.div`
  ${"" /* border: 1px solid #000; */}
  font-size: 2.4rem;
  color: #f5f5f5;
  font-weight: 700;
  transition: all 0.2s;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #7dcdbe;
    background: #3b3f3f;
  }
`;

export default Buttons;
