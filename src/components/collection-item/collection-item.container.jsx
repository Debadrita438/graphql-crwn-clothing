import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItem from './collection-item.component';

const ADD_ITEMS_TO_CART = gql`
    mutation AddItemToCart($item: Item!) {
        addItemToCart(item: $item) @client
    }
`;

const CollectionItemContainer = props => {
    const [addItemToCart] = useMutation(ADD_ITEMS_TO_CART);

    return <CollectionItem { ...props } addItem={item => addItemToCart({ variables: { item } })} />
}

export default CollectionItemContainer;