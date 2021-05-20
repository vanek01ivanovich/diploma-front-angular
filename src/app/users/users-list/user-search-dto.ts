import {Pageable} from '../../model/pageable';

export interface UserSearchDto {
  name: string;
  surname: string;
  email: string;
  roles: string[];
  notEnabledAlso: boolean;
  page: number;
  pageSize: number;
  sortOrder: string;
  sortField: string;
}
