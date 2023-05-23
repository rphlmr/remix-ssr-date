import React, { createContext, useContext, useMemo } from "react";

export type LocaleContext = {
  locale: string | undefined;
  timeZone: string;
};

type LocaleProviderProps = LocaleContext & {
  children: React.ReactNode;
};

const Context = createContext<LocaleContext | null>(null);

//@credits https://donavon.com/blog/remix-locale

export const LocaleProvider = ({
  locale,
  timeZone,
  children,
}: LocaleProviderProps) => {
  const value = useMemo(() => ({ locale, timeZone }), [locale, timeZone]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useLocale = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(`useLocale must be used within a LocaleProvider.`);
  }
  return context;
};
