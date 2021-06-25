import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

import Spinner from '../spinner/spinner.component';
import CollectionsOverview from './collections-overview.component';

const GET_COLLECTIONS = gql`
    {
        collections {
            id 
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionsOverviewContainer = () => {
    const { loading, error, data } = useQuery(GET_COLLECTIONS);
    if (loading) return <Spinner />;
    if (error) return `Error in CollectionsOverviewContainer: ${error.message}`;
    return <CollectionsOverview collections={data.collections} />
}

export default CollectionsOverviewContainer;