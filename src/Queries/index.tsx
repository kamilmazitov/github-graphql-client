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

export const LOGGED_IN_USER = gql`
  query getUser {
    viewer {
      login
      name
      location
      avatarUrl(size: 150)
      bio
      websiteUrl
      status {
        id
        message
        emoji
      }
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
            bio
          }
        }
      }
    }
  }
`;

export const USER = gql`
  query UserQuery($username: String!) {
    user(login: $username) {
      id
      name
      bio
      login
      avatarUrl
      status {
        id
        message
        emoji
      }
    }
  }
`;

// # organizations(first: 10) {
//   #   nodes {
//   #     ...Org
//   #   }
//   # }
//   # repositories(
//   #   first: 10
//   #   isFork: false
//   #   orderBy: { field: STARGAZERS, direction: DESC }
//   # ) {
//   #   nodes {
//   #     ...Repo
//   #   }
//   # }

// fragment UserHeader on User {

// }

// Org.fragment = gql`;
//   fragment Org on Organization {
//     id
//     name
//     avatarUrl
//   }
// `;

// fragment Repo on Repository {
//   id
//   ...RepoHeader
//   ...RepoStats
// }

// ${RepoStats.fragment}
// ${RepoHeader.fragment}
// `;

// fragment RepoHeader on Repository {
//   id
//   url
//   name
//   description
//   ...ToggleStarButton
// }
// ${ToggleStarButton.fragment}
