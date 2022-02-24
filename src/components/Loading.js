import styled from "styled-components";

const Waiting = styled.h1`
  color: #e5e3c9;
  font-weight: bold;
  text-align: center;
  align-items: center;
`;

function Loading() {
  return <Waiting>Loading...</Waiting>;
}
export default Loading;
