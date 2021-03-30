addEventListener("fetch", (event) => {
  const response = new Response("Hello deno", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
