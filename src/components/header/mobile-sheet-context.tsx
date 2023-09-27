'use client';
import { createContext, useContext, useMemo, useState } from 'react';

export const MobileSheetContext = createContext({
  isOpen: false,
  close: () => {},
  open: () => {},
});

export const MobileSheetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen: open,
      close: () => setOpen(false),
      open: () => setOpen(true),
    }),
    [open],
  );

  return (
    <MobileSheetContext.Provider value={value}>
      {children}
    </MobileSheetContext.Provider>
  );
};

export const useMobileSheet = () => useContext(MobileSheetContext);
