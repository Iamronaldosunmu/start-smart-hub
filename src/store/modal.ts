import { create } from "zustand";

type Modal = "fullname" | "email" | "password" | null;

interface ModalStore {
	isOpen: boolean;
	modal: Modal;
	actions: {
		openModal: (modal: Modal) => void;
		closeModal: () => void;
	};
}

const useModalStore = create<ModalStore>((set) => ({
	isOpen: false,
	modal: null,
	actions: {
		openModal: (modal) => set({ modal, isOpen: true }),
		closeModal: () => set({ isOpen: false }),
	},
}));

export default useModalStore;
