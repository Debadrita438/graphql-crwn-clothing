import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`;

const GET_CART_ITEM = gql`
    {
        cartItems @client
    }
`;

const CartDropdownContainer = () => {
    const { error, data } = useQuery(GET_CART_ITEM);
    const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);

    if (error) return `Error in CartDropdownContainer: ${error.message}`;

    const { cartItems } = data;

    return <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
}

export default CartDropdownContainer;