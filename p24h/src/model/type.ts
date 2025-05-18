export interface Monstre {
  id: number;
  nom: string;
  image: string;
}

export interface User {
  nom: string;
  prenom: string;
  droit: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
