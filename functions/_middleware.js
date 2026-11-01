// Cloudflare Pages: أي عنوان ‎*.pages.dev‎ (الإنتاج والمعاينات) يُحوَّل إلى النطاق المحمي بـ Cloudflare Access
// حتى لا يبقى طريق جانبي مفتوح للصفحة وبياناتها.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname.endsWith('.pages.dev')) {
    url.protocol = 'https:';
    url.hostname = 'massar360.com';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
