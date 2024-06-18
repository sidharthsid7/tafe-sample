export default function swDev() {
  const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(swUrl).then((response) => {
      console.log("Service Worker registered:", response);
    }).catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
  }
}
