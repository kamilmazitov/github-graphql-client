import { action, makeAutoObservable, runInAction } from 'mobx';
import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";

class AppStore {
  token: string | null = localStorage.getItem('token')

  constructor() {
    makeAutoObservable(this);
  }

  get isLogged(): boolean {
    return this.token ? true : false;
  }

  @action validateAndSetToken(token: string) {
    const apolloClient = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: async operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${token}`
          }
        });
      }
    });
    apolloClient.query({
      query: gql`
          query ViewerQuery {
            viewer {
              login
           }
          }
        `
    }).then(() => {
      runInAction(() => {
        localStorage.setItem('token', token);
        this.token = token;
        alert('Авторизация прошла успешно!')
      })
    }).catch(() => {
      runInAction(() => {
        this.token = null;
        alert('Неправильный токен!')
      })
    })
  }

  @action logout() {
    runInAction(() => {
      localStorage.removeItem('token');
      this.token = null;
    })
  }
}

export default AppStore;
