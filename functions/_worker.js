// Cloudflare Pages Functions Worker
// 这个文件是必需的，但我们的应用是纯静态的

export async function onRequest(context) {
  // 对于所有请求，返回静态资源
  return context.next();
}