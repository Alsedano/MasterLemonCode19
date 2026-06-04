export interface MemberRoot {
  totalCount: number;
  members: MemberEntity[];
}

export interface MemberEntity {
  id: number;
  login: string;
  avatarUrl: string;
}
