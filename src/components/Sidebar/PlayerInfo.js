import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

import ProgressBar from "./ProgressBar";
import { PlayerLoader } from "./Loaders";

import { usePlayer } from "../../hooks";

const PlayerInfo = ({ examine }) => {
  const {
    player: { name, encumbrance, inventory, gold, speed, strength }
  } = usePlayer();

  return (
    <Player>
      {name.length ? (
        <>
          <PlayerId>
            <h2>{name}</h2>
            <GoldInfo>
              <FontAwesomeIcon icon={faDollarSign} /> <span>{gold}</span>
            </GoldInfo>
          </PlayerId>
          <ProgressBar sidebar />
          <PlayerStats>
            <ul>
              <li>
                Encumbrance: <span>{encumbrance}</span>
              </li>
              <li>
                Strength: <span>{strength}</span>
              </li>
              <li>
                Speed: <span>{speed}</span>
              </li>
              <li>
                <input type="text" className="secret-input" />
                <button>+</button>
              </li>
            </ul>
            <ul>
              <Inventory>
                Inventory:{" "}
                <span>
                  {!inventory.length ? (
                    <p>Empty.</p>
                  ) : (
                    inventory.map(item => (
                      <span
                        className="inventory-item"
                        onClick={() => examine(item)}
                        key={item + Math.random()}
                      >
                        {item}{" "}
                      </span>
                    ))
                  )}
                </span>
              </Inventory>
            </ul>
          </PlayerStats>
        </>
      ) : (
        <PlayerLoader />
      )}
    </Player>
  );
};

const Player = styled.div`
  background: #7dcdbe;
  height: 45%;
  width: 100%;
  padding: 2rem;
`;

const PlayerId = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  ${"" /* margin-bottom: 1rem; */}
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const GoldInfo = styled.div`
  font-size: 2rem;
  span {
    font-weight: 700;
    color: #d3e5e5;
  }
`;

const PlayerStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
  ul {
    width: 45%;
    li {
      display: flex;
      justify-content: space-between;
      font-size: 1.8rem;
      .secret-input {
        background: #7dcdbe;
        border: none;
        width: 50px;
        padding: 0 0.5rem;
        color: #f5f5f5;
        font-weight: 700;
        &:focus {
          border: 3px solid #d3e5e5;
          outline: none;
        }
      }
      button {
        border: none;
        background: #7dcdbe;
        cursor: pointer;
        color: #f5f5f5;
        font-weight: 700;
      }
      span {
        font-weight: 700;
        color: #d3e5e5;
      }
    }
  }
`;

const Inventory = styled.li`
  flex-direction: column;
  .inventory-item {
    display: block;
    font-size: 1.2rem;
    background: #3b3f3f;
    padding: 0.5rem;
    border-radius: 5px;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background: #d3e5e5;
      color: #3b3f3f;
    }
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }
`;

export default PlayerInfo;
