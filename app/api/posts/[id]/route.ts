import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  // получить загаловки
  const headerList = headers();
  const type = headerList.get('Content-Type');

  // получить куку
  const cookiesList = cookies();
  const coo_2 = cookiesList.get('Cookie_2')?.value;

  redirect('/blog');
  return NextResponse.json({ id, type, coo_2 });
}
