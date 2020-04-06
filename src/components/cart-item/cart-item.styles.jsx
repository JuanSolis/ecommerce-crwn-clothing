import styled, {css} from 'styled-components';

const imageFontSize = css`
    font-size: 16px;
`;

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`;

const getImage = (props) => {
    return props.imageUrl;
}

export const Image = styled.img`
    width: 30%;
    content: url(${getImage})
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export const Name = styled.span`
    ${imageFontSize}
`;

export const Price = styled.span`
    ${imageFontSize}
`;
