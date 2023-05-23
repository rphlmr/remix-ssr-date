import { type V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Time, formatDate } from "~/components/time";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader() {
  return json({ date: new Date() });
}

export default function Index() {
  const { date } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome</h1>
      <p>
        Current time{" "}
        <Time
          date={date}
          formatFn={formatDate({ withTime: true, dateStyle: "full" })}
        />
      </p>
    </div>
  );
}
