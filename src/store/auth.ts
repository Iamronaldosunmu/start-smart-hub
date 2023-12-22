import { useCookies } from "react-cookie";
import { create } from "zustand";
export interface User {
	id: number;
	username: string;
	email: string;
	blocked: boolean;
	createdAt: string;
	updatedAt: string;
}

interface AuthStore {
	user: User | null;
	actions: {
		setUser: (auth: User | null) => void;
		logout: () => void;
	};
}

const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	actions: {
		setUser: (user: User | null) => set({ user }),
		logout: () => {
			set({ user: null });
		},
	},
}));

export const useAuth = () => useAuthStore((s) => s.user);

export const useAuthActions = () => useAuthStore((s) => s.actions);
