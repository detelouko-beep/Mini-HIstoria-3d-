import { sanitize } from 'isomorphic-dompurify';

export function sanitizeStoryHtml(html: string): string {
  return sanitize(html, {
    ALLOWED_TAGS: [
      'p',
      'br',
      'strong',
      'em',
      'u',
      'h1',
      'h2',
      'h3',
      'ul',
      'ol',
      'li',
      'blockquote',
      'code',
      'pre',
      'a',
      'img',
    ],
    ALLOWED_ATTR: ['href', 'title', 'src', 'alt', 'target'],
    KEEP_CONTENT: true,
  });
}

export function sanitizePlainText(text: string): string {
  return sanitize(text, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true,
  });
}
