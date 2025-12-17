import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/wordpress';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Math.max(1, Number(searchParams.get('page') ?? '1') || 1);
  const perPage = Math.min(100, Math.max(1, Number(searchParams.get('per_page') ?? '12') || 12));

  const posts = await getBlogPosts(perPage, page);

  return NextResponse.json({
    page,
    perPage,
    posts,
    hasMore: posts.length === perPage,
  });
}




