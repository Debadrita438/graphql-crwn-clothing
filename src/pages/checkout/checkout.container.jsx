import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS_AND_TOTAL = gql`
    {
        cartItems @client
        cartItemTotal @client
    }
`;

const CheckoutPageContainer = () => {
    const { error, data } = useQuery(GET_CART_ITEMS_AND_TOTAL);

    if (error) return `Error in CheckoutPageContainer: ${error.message}`;

    const { cartItems, cartItemTotal } = data;

    return <CheckoutPage cartItems={cartItems} total={cartItemTotal} />;
}

export default CheckoutPageContainer;