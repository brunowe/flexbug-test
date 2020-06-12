/* --------------------------------- IMPORTS ---------------------------------*/
import styled from "styled-components";

/* --------------------------------- EXPORTS ---------------------------------*/
export const Bg = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 15px 10px 15px;
  margin: auto 5px auto 5px;
  text-align: center;
  h1,
  h2 {
    color: #fff;
    margin-bottom: 10px;
  }
  h1 {
    margin-top: 10px;
  }
`;
