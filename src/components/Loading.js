import styled from "styled-components";

const Waiting = styled.h1`
  color: #e5e3c9;
  font-weight: bold;
  font-style: italic;
  margin: 0 auto;
  position: absolute;
  right: 50%;
  top: 50%;
`;

function Loading() {
  return <Waiting>Loading...</Waiting>;
}
export default Loading;
