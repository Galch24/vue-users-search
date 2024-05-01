export interface UserInterface {
  name: string;
  email: string;
  id: number;
  username: string;
}

export interface UserStateInterface {
  users: UserInterface[];
  isUsersLoading: boolean;
  searchQuery: string;
  page: number;
  limit: number;
  totalPages: number;
  selectedUser: UserInterface | null;
}
