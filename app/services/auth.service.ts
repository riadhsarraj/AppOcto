import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Update this with your actual API URL

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

class AuthService {
  async signup(data: SignUpData): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
      if (response.data.token) {
        // Store the token in secure storage
        // You might want to use AsyncStorage or a more secure storage solution
        localStorage.setItem('token', response.data.token);
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Error setting up request');
    }
  }
}

export const authService = new AuthService(); 