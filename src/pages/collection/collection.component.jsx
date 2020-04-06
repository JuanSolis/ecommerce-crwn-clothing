import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
    CollectionPageContainer,
    Title,
    Items
} from './collection.styles';

const CollectionPage = ({collection}) => {
    const { title, items } = collection;
    return(
    <CollectionPageContainer>
        <Title>{title}</Title>
        <Items>
        {
            items.map(item => (
                <CollectionItem className="collection-item" key={item.id} item={item} />
                )
            )
        }
        </Items>
    </CollectionPageContainer>
)
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
