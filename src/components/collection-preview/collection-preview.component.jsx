import React from 'react';
import {withRouter} from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import {
    CollectionPreviewContainer,
    Title,
    PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({title,items, routeName, history, match}) =>{
    return(
        <CollectionPreviewContainer>
            <Title onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</Title>
            <PreviewContainer>
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                    <CollectionItem key={item.id} item={item} />
    
                ))
            }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
} 

export default withRouter(CollectionPreview);