export interface ChildProps {
  children: React.ReactNode;
}

export interface UserListType {
  id: number
  email: string;
  first_name: string;
  last_name: string;
}


export interface UserResponseType {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
}
