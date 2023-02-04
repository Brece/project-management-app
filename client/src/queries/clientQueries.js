import { gql } from '@apollo/client';


// Query
const GET_CLIENTS = gql`
    query getClients {
        clients {
            id,
            name,
            email,
            phone,
        }
    }`;

export { GET_CLIENTS };
