export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-sm">
        <p className="mb-4 text-sm font-bold text-blue-600">
          日本株IRリアルタイム通知
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          IR速報サービス
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          株式分割・株主優待などのIR情報をリアルタイムで通知します。
          忙しくても、重要な開示を見逃しにくくなります。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              無料
            </h2>
            <p className="mt-3 text-slate-600">
              Xで1日1回、IRをまとめて発信。
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-blue-900">
              有料
            </h2>
            <p className="mt-3 text-blue-800">
              メールで株式分割・優待IRを即時通知。
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
  href="ここにGoogleフォームのURL"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-blue-600 px-6 py-3 text-center font-bold text-white"
>
  事前登録する
</a>

          <a
  href="https://x.com/ir_watch_jp?s=21&t=Rs6ZEUBSRQUK8lYKjuzCyg"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-slate-300 px-6 py-3 text-center font-bold text-slate-700"
>
  Xを見る
</a>
        </div>
      </section>
    </main>
  );
}