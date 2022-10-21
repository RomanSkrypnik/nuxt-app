export interface ProfileState {
    profile: ProfileDto;
    loading: boolean;
}

export interface ProfileDto {
    bio: null | string;
    id: string;
    updated_at: string | null;
    website: string | null;
    username: string | null;
    avatar_url: string | null;
}
