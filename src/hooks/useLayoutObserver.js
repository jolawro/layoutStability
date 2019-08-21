import { useState, useEffect, useRef } from "react";

export function useLayoutObserver() {
  const [entries, updateEntries] = useState([]);

  const observer = useRef(
    new PerformanceObserver(list => {
      console.log("list", list.getEntries());
      const newEntries = list.getEntries().map(entry => entry.value)
      updateEntries([...entries, ...newEntries]);
    })
  );

  useEffect(() => {
    const { current: currentObserver } = observer;

    currentObserver.observe({ type: "layoutShift", buffered: true });

    return () => currentObserver.disconnect();
  }, []);

  return entries;
}
