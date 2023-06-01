import React, { ReactNode, createContext, useState } from 'react';

type MenuContextProps = {
    children: ReactNode
};

type MenuContextType = {
    openMenu: boolean,
    setOpenMenu: (newState:boolean) => void
};

const initialValue = {
    openMenu: true,
    setOpenMenu: () => {}
};

export const MenuContext = createContext<MenuContextType>(initialValue);

export const UserStore = ({ children}: MenuContextProps) => {
    const [openMenu, setOpenMenu] = useState(initialValue.openMenu);

    return (
        <MenuContext.Provider value={{openMenu,setOpenMenu}}>
            {children}
        </MenuContext.Provider>
    )
};