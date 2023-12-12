import { create } from "zustand";

export interface AuthData {
	token: string;
	user: {
		id: number;
		username: string;
		email: string;
		blocked: boolean;
		createdAt: string;
		updatedAt: string;
	};
}

interface AuthStore {
	auth: AuthData | null;
	actions: {
		setAuth: (auth: AuthData | null) => void;
		logout: () => void;
	};
}

const useAuthStore = create<AuthStore>((set) => ({
	auth: null,
	actions: {
		setAuth: (auth: AuthData | null) => set({ auth }),
		logout: () => set({ auth: null }),
	},
}));

export const useAuth = () => useAuthStore((s) => s.auth);

export const useAuthActions = () => useAuthStore((s) => s.actions);
