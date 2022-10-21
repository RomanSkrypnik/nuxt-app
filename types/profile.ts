export interface ProfileState {
    profile: ProfileDto;
    loading: boolean;
}

export interface ProfileDto {
    username: string | null;
    avatar_url: string | null;
}
