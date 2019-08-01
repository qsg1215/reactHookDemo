import { useState, useEffect } from "react";
function EffectHook(props) {
  const [isOnline, setIsOnline] = useState(null);

  setTimeout(() => {
    setIsOnline(true);
  }, 3000);
  useEffect(() => {
    // 更新文档的标题
    document.title = `chen`;

    return () => {
      document.title = `华桥`;
    };
  });

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

export default EffectHook;
