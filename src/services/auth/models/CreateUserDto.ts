export interface CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  id_organisation?: string;
}
