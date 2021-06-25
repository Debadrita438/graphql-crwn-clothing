import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import App from './App';

const SET_CURRENT_USER = gql`
    mutation SetCurrentUser($user: User!) {
        setCurrentUser(user: $user) @client
    }
`;

const GET_CURRENT_USER = gql`
    {
        currentUser @client
    }
`;

const AppContainer = () => {
    const { data, error } = useQuery(GET_CURRENT_USER);
    const [setCurrentUser] = useMutation(SET_CURRENT_USER);

    if (error) return `Error in AppContainer: ${error.message}`;

    const { currentUser } = data;

    return <App setCurrentUser={user => { setCurrentUser({ variables: { user } }) }} 
        currentUser={currentUser} 
    />;
}

export default AppContainer;