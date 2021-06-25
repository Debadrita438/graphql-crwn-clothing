import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import Header from './header.component';

const GET_HEADER_PROPERTIES = gql`
    {
        cartHidden @client
        currentUser @client
    }
`;

const HeaderContainer = () => {
    const { error, data } = useQuery(GET_HEADER_PROPERTIES);

    if (error) return `Error in HeaderContainer: ${error.message}`;

    const { cartHidden, currentUser } = data;

    return <Header hidden={cartHidden} currentUser={currentUser} />;
};

export default HeaderContainer;