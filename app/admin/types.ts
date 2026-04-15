export interface CommunitySignup {
  id: string;
  parent_guardian_name: string;
  email: string;
  phone_number: string | null;
  child_age: string;
  interests: string[];
  child_interests: string[];
  newsletter_preference: string;
  newsletter_opt_in: boolean;
  source: string;
  created_at: string;
}
