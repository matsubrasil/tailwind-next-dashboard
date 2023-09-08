import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/diego3g.png"
        alt="foto perfil"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Diego Fernandes
        </span>
        <span className="truncate text-xs text-zinc-500">
          diego@rocketseat.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}