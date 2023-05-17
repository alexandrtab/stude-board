import { useAppSelector } from "./useRedux";

export function useAuth () {
    const { name, email, password } = useAppSelector(state => state.user);

    return { isAuth: !!email, name, password };
}
