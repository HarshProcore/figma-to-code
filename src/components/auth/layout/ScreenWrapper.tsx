import styled from "styled-components";

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 80px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  gap: 20px;
  max-width: 1454px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
