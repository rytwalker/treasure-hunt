import React from "react";
import styled from "styled-components";
import { useRoom, useGraph } from "../../hooks";

const RoomInfo = ({ examine }) => {
  const {
    room: {
      clickedTitle,
      clickedDescription,
      description,
      coords,
      items,
      players,
      room_id,
      title
    }
  } = useRoom();

  const {
    graph: { isClicked }
  } = useGraph();

  return (
    <Room>
      <RoomId>
        Room {room_id}{" "}
        <span className="coords">{`(${coords.x}, ${coords.y})`}</span>
      </RoomId>

      <RoomInfoContainer>
        <h3>{isClicked ? clickedTitle : title}</h3>
        <p>{isClicked ? clickedDescription : description}</p>
        {/* <p onClick={() => handleClickable()} className="back-button">
          {isClicked ? 'back' : null}
        </p> */}
      </RoomInfoContainer>

      <InfoContainer>
        <h3>Items</h3>
        {!items.length ? (
          <p>There are no items in this room.</p>
        ) : (
          items.map(item => (
            <span
              className="room-clickable"
              onClick={() => examine(item)}
              key={item + Math.random()}
            >
              {item}{" "}
            </span>
          ))
        )}
      </InfoContainer>
      <InfoContainer>
        <h3>Players</h3>
        {!players.length ? (
          <p>There are no players in this room.</p>
        ) : (
          players.map(player => (
            <span
              className="room-clickable"
              onClick={() => examine(player)}
              key={player}
            >
              {player}{" "}
            </span>
          ))
        )}
      </InfoContainer>
    </Room>
  );
};

const Room = styled.div`
  padding: 2rem;
  ${"" /* flex: 1; */}
  height: 55%;
  overflow: auto;
`;

const RoomId = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  span {
    color: #7dcdbe;
  }
`;

const InfoContainer = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .back-button {
    ${"" /* width: 50px; */}
    display: inline;
  }

  .room-clickable,
  .back-button {
    border-bottom: 3px solid #7dcdbe;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background: #7dcdbe;
      color: #f5f5f5;
    }
  }
`;

const RoomInfoContainer = styled(InfoContainer)`
  h3 {
    font-size: 2rem;
  }
`;

export default RoomInfo;
