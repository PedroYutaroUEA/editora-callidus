import logo from '../assets/logo.png'

export function Header() {
  return (
    <header className="flex flex-row bg-slate-400 items-center py-4 px-6 w-screen shad relative">
        <img src={logo} alt="logo" />
        <div className="flex items-center flex-col absolute left-1/2 -translate-x-1/2">
          <h1 className="text-4xl font-bold text-slate-800">Table Editor</h1>
          <p className="text-sm text-slate-700">
            Edit and manage your tables in real-time.
          </p>
        </div>
      </header>
  )
}
