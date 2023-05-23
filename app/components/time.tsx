import { type LocaleContext, useLocale } from "~/utils/locale-provider";

type IntlDateFormatterParams = LocaleContext & {
  date: string;
};

export function Time({
  date,
  formatFn,
  defaultValue = "-",
}: {
  date?: string | null;
  formatFn: (params: IntlDateFormatterParams) => string;
  defaultValue?: string;
}) {
  const { locale, timeZone } = useLocale();

  if (!date) return <span>{defaultValue}</span>;

  return <time dateTime={date}>{formatFn({ date, locale, timeZone })}</time>;
}

export const formatDate =
  (options?: {
    withTime?: boolean;
    dateStyle?: Intl.DateTimeFormatOptions["dateStyle"];
  }) =>
  ({ date, locale, timeZone }: IntlDateFormatterParams) =>
    new Intl.DateTimeFormat(locale, {
      dateStyle: options?.dateStyle ?? "medium",
      timeStyle: options?.withTime ? "short" : undefined,
      timeZone,
    })
      .format(new Date(date))
      .replace(/[\u202F\u00A0]/, " ");
