import {User} from '../model/user';

export interface ProjectDto {
  id: number;
  name: string;
  link: string;
  archived: boolean;
  user: User;
}
