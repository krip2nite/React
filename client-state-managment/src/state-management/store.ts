import { create } from "zustand";

interface UserStore{
    user: string;
    counter: number;
    login: (user: string) => void;
    logout: () => void
};

const useUserStore = create<UserStore>(set => ({
    user: "",
    counter: 0,
    login: (username:string) => set((state) => (username === state.user ? state : {
        user: username, counter: state.counter + 1
    })),
    logout:() => set(() => ({
        user: ""
    }))
}))

export default useUserStore