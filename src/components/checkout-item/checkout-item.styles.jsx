import styled, {css} from 'styled-components';

const width = css`
    width: 23%; 
`;

const getImage = props => {
    return props.imageUrl;
}

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    ${width};
    padding-right: 15px;
`;

export const Image = styled.image`
    width: 100%;
    height: 100%;

    content: url(${getImage})
`;

export const Name = styled.span`
    ${width}
`;

export const Quantity = styled.div`
    display: flex;
    ${width};
`;

export const Arrow = styled.div`
    cursor: pointer;
`;

export const Value = styled.span`
    margin: 0 10px; 
`;

export const Price = styled.span`
    ${width};
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;