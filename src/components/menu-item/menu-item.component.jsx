import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImage,
    Content,
    Title,
    SubTitle
} from './menu-item.styles';


const MenuItem = ({item:{title, imageUrl, size, linkUrl}, history, match}) => (
    <MenuItemContainer className={`${size}`} onClick={() => (history.push(`${match.url}${linkUrl}`))}>   
        <BackgroundImage imageUrl={imageUrl} />
        <Content>
            <Title>{title.toUpperCase()}</Title>
            <SubTitle>SHOP NOW</SubTitle>
        </Content>
    </MenuItemContainer>
);

export default withRouter(MenuItem);