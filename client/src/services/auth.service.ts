import api from "@/lib/axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  user: User;
}

class AuthService {
  /**
   * Login User
   */
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>(
      "/auth/login",
      data
    );

    return response.data;
  }

  /**
   * Refresh Access Token
   */
  async refreshToken(refreshToken: string) {
    const response = await api.post("/auth/refresh", {
      refresh_token: refreshToken,
    });

    return response.data;
  }

  /**
   * Get Logged In User
   */
  async profile() {
    const response = await api.get<User>("/auth/profile");

    return response.data;
  }

  /**
   * Logout
   */
  async logout() {
    const response = await api.post("/auth/logout");

    return response.data;
  }

  /**
   * Forgot Password
   */
  async forgotPassword(email: string) {
    const response = await api.post("/auth/forgot-password", {
      email,
    });

    return response.data;
  }

  /**
   * Reset Password
   */
  async resetPassword(
    token: string,
    password: string,
    confirm_password: string
  ) {
    const response = await api.post("/auth/reset-password", {
      token,
      password,
      confirm_password,
    });

    return response.data;
  }
}

export default new AuthService();