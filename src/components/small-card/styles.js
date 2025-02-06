import styled from 'styled-components';

export const Card = styled.div`
  background: #FFFFFF;
  width: 600px; 
  height: 140px;
  padding: 16px;
  gap: 16px;
  border-radius: 6px;
  justify-content: space-between;
  opacity: 1;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  flex-direction: column;

  @media (min-width: 1600px) {
    width: calc(50% - 10px); 
  }

  &.custom-percentage-card {
    color: #484848;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  &.custom-received-card {
    color: #484848;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  &.custom-investment-card {
    color: #484848;
  }

  &.custom-card-details {
    color: #484848;
    background: #FFFFFF;
    display: flex;
    justify-content: flex-end;
  }

  &.custom-plus-card {
    width: 570px; 
    height: 140px;
    background: #FFFFFF;
    color: #484848; 
    text-align: center;
    justify-content: center;
    align-items: center;

    .icon {
      color: #484848;
      font-size: 32px;
      margin-bottom: 10px;
    }

    .text {
      color: #484848;
      font-family: Lato;
      font-size: 18px;
      font-weight: 700;
      line-height: 21.6px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }
  }
`;

export const Percentage = styled.div`
  color: #1BC681;
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
  line-height: 28.8px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: 60px;
`;

export const InfoContainer = styled.div`
  color: #484848;
  width: 173.2px;
  height: 19px;
  gap: 0px;
  opacity: 1;
  font-family: Lato;
  font-size: 16px;
  font-weight: 300;
  line-height: 19.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  .value {
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
  }
`;

export const ReceivedInfoContainer = styled.div`
  color: #484848;
  width: 173.2px;
  height: 19px;
  gap: 0px;
  opacity: 1;
  font-family: Lato;
  font-size: 16px;
  font-weight: 300;
  line-height: 19.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  .value {
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
  }
`;

export const InvestmentHighlight = styled.div`
  background: #1BC681;
  padding: 5px;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 45px;
  white-space: nowrap;
`;

export const CardDetails = styled.div`
  color: #484848;
  background: #FFFFFF;
  padding: 5px;
  border-radius: 4px;
  margin-top: 10px;

  .title {
    font-family: Lato;
    font-size: 16px;
    font-weight: 300;
    line-height: 19.2px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .value {
    font-family: Lato;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;
