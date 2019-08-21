import { useState, useEffect, useRef } from "react";

export function useLayoutObserver() {
  const [entries, updateEntries] = useState([]);

  const observer = useRef(
    new PerformanceObserver(list => {
      list.getEntries().map(console.log)
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
