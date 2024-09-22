import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect('https://ashish.top');
  return null;
}
