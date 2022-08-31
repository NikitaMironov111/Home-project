import { createContext, SetStateAction, Dispatch } from "react";

const Context = createContext({} as IModalLogin);

export default Context;

interface IModalLogin {
    openModalLogin: boolean;
    setOpenModalLogin: Dispatch<SetStateAction<boolean>>;
}