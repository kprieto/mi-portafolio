import React, { createContext, useState, useContext } from 'react';

const ShowDivContext = createContext();

export const ShowDivProvider = ({ children }) => {
    const [showDiv, setShowDiv] = useState(false);

    return (
        <ShowDivContext.Provider value={{ showDiv, setShowDiv }}>
            {children}
        </ShowDivContext.Provider>
    );
};

export const useShowDiv = () => useContext(ShowDivContext);