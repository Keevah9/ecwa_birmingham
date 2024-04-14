// import React, { createContext, useContext, useRef } from "react"
// interface ModalContextData {
//   // declare userAuth here
//  modalVisible: false,
//     setModalVisible: (boolean: any) => { },
//     quoteModalVisible: false,
//     setQuoteModalVisible: (boolean: any) => {},
    
// }

// export const ModalContext = createContext<ModalContextData | undefined>(undefined);

// export const ModalProvider = ({ children }) => {
  
//   const userAuth = useRef<null | string>(null);

//   return (
//     <ModalContext.Provider value={{modalVisible,   userAuth }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };
// export const useBookingContext = () => {
//   const context = useContext(ModalContext);

//   // this will ensure that context is defined in the components
//   if (!context)
//     throw Error("useBookingContext must be used within BookingProvider");

//   return context;
// };

import React, { createContext } from "react"

export const ModalContext = createContext({
    modalVisible: false,
    setModalVisible: (boolean: any) => { },
    quoteModalVisible: false,
    setQuoteModalVisible: (boolean: any) => { },
    
});