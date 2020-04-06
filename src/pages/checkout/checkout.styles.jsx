import styled from 'styled-components';

export const CheckOutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    
    button {
      margin-left: auto;
      margin-top: 15px;
    }
`;

export const CheckOutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;


export const TextWarning = styled.div`
    color: red;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;
