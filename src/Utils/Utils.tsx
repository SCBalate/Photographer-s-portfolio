export function extractYouTubeId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    const hostname = parsedUrl.hostname;

    // Handle youtu.be/<id>
    if (hostname === 'youtu.be') {
      return parsedUrl.pathname.slice(1);
    }

    // Handle youtube.com/watch?v=<id>
    if (hostname.includes('youtube.com')) {
      const v = parsedUrl.searchParams.get('v');
      if (v) return v;

      // Handle youtube.com/shorts/<id>
      const pathMatch = parsedUrl.pathname.match(/^\/shorts\/([^/]+)/);
      if (pathMatch) return pathMatch[1];
    }

    return null;
  } catch {
    return null;
  }
}
