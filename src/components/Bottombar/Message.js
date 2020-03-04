import React from "react";
import styled, { keyframes } from "styled-components";

const Message = ({ messages }) => {
  return (
    <StyledMessage style={messages.length >= 4 ? { fontSize: "1.8rem" } : null}>
      {!messages.length ? (
        <p>Click EXPLORE to start exploring.</p>
      ) : (
        messages.map(message => (
          <span
            style={messages.length >= 4 ? { fontSize: "1.8rem" } : null}
            key={message}
          >
            {message}{" "}
          </span>
        ))
      )}
    </StyledMessage>
  );
};

const fadeIn = keyframes`
   from {
     opacity: 0
   }

   to {
     opacity: 1
   }
 `;

const StyledMessage = styled.div`
  margin: auto;
  font-size: 2rem;
  font-weight: 700;
  span {
    animation: ${fadeIn} 0.3s ease-in-out;
  }
`;

export default Message;
