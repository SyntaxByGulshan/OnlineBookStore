import { createContext } from "react";
import { useState } from "react";
export const IndexContext = createContext();
const IndexProvider = ({ children }) => {
    const [index, setIndex] = useState(null);
    return (
        <IndexContext.Provider value={{ index, setIndex }}>
            {children}
        </IndexContext.Provider>
    )
};
export default IndexProvider;
