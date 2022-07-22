/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
}

addEventListener("fetch", (event) => {
  const data = [
    {
      id: "0",
      name: "kunimi",
      party: [
        // TODO: 自分のpartyに手持ちポケモンを入れてください。
      ],
    },
    {
      id: "0",
      name: "inoue",
      party: [
        "steelix",
        "salamander",
        "heatran",
        "coil",
        "electabuzz",
        "roserade",
      ],
    },
    {
      id: "0",
      name: "hirama",
      party: [
        // TODO: 自分のpartyに手持ちポケモンを入れてください。
      ],
    },
    {
      id: "0",
      name: "hoi",
      party: [
        // TODO: 自分のpartyに手持ちポケモンを入れてください。
      ],
    },
  ];

  const json = JSON.stringify(data);

  return event.respondWith(
    new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
  );
});
