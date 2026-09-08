export interface CharacterEntityVm {
  totalCount: number;
  members: MemberEntity[];
}

export interface MemberEntity {
  id: number;
  name: string;
  avatarUrl: string;
}