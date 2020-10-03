export interface IUser {
  id: string;
  name: string;
  avatarUrl: string;
  login: string;
}

export interface IRepository {
  name: string;
  id: string;
  descriptionHTML: string;
  stargazers: {
    totalCount: number;
  };
}
