export interface MemberDetailEntity {
  id: number;
  login: string;
  name: string;
  company: string;
  bio: string;
  avatarUrl: string;
}

export interface ExtendedMemberDetailEntity extends MemberDetailEntity {
  status: string;
  species: string;
  gender: string;
}

export const createDefaultMemberDetail = () => ({
  id: 0,
  login: "",
  name: "",
  company: "",
  bio: "",
  avatarUrl: "",
});
