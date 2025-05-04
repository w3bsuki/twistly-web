export interface Database {
  public: {
    Tables: {
      // Add your Supabase tables here
      // example:
      // profiles: {
      //   Row: {
      //     id: string;
      //     name: string;
      //     email: string;
      //     created_at: string;
      //   };
      //   Insert: {
      //     id: string;
      //     name?: string;
      //     email?: string;
      //     created_at?: string;
      //   };
      //   Update: {
      //     id?: string;
      //     name?: string;
      //     email?: string;
      //     created_at?: string;
      //   };
      // };
    };
    Views: {
      // Add your Supabase views here
    };
    Functions: {
      // Add your Supabase functions here
    };
    Enums: {
      // Add your Supabase enums here
    };
  };
} 