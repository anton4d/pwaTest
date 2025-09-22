
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("output").textContent = "Button clicked! 🎉";
});


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js").then(() => {
    console.log("Service Worker Registered");
  });
}
