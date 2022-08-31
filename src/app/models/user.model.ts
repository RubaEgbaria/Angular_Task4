export interface List<Type> {
  data: Type[];
  total: number;
  page: number;
  limit: number;
}
export interface UserPreview{
  id: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string ;
  title: string;
}
export interface CreateUserModel {
  firstName: string;
  lastName: string;
  email: string;

}
export interface UserFull{
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: any;
}
