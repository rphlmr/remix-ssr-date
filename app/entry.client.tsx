/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { LocaleProvider } from "./utils/locale-provider";

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.cookie = `timeZone=${timeZone}; path=/; max-age=${
  60 * 60 * 24 * 365
}; secure; samesite=lax`;

const locale = window.navigator.languages?.[0];
document.cookie = `locale=${locale}; path=/; max-age=${
  60 * 60 * 24 * 365
}; secure; samesite=lax`;

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <LocaleProvider locale={locale} timeZone={timeZone}>
        <RemixBrowser />
      </LocaleProvider>
    </StrictMode>
  );
});
