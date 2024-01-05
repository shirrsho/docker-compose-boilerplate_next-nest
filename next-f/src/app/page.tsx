import { getall } from '@/utils/api'

export default function Home() {

  const show = getall('home')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello: {show}
    </main>
  )
}
