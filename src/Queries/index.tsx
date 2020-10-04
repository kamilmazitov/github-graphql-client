import { gql } from "apollo-boost";

export const SEARCH_POPULAR_REPOS = gql`
  query searchPopularRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 12) {
      repositoryCount
      edges {
        repository: node {
          ... on Repository {
            id
            name
            description
            stargazers {
              totalCount
            }
            updatedAt
            licenseInfo {
              spdxId
            }
            forks {
              totalCount
            }
            primaryLanguage {
              id
              name
              color
            }
          }
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    viewer {
      login
      name
      location
      avatarUrl(size: 150)
      bio
      websiteUrl
      starredRepositories(last: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export const SEARCH_USER = gql`
  query userSearch($queryString: String!, $cursor: String) {
    search(query: $queryString, type: USER, first: 12, after: $cursor) {
      edges {
        cursor
        user: node {
          ... on User {
            id
            name
            avatarUrl
            login
          }
        }
      }
    }
  }
`;
