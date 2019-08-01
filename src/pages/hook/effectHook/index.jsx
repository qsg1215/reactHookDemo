import { useState, useEffect } from "react";
function EffectHook(props) {
  const [isOnline, setIsOnline] = useState(null);

  setTimeout(() => {
    setIsOnline(true);
  }, 3000);
  return isOnline ? "Online" : "Offline";
}

export default EffectHook;
