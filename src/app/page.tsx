import { ChevronDown, Mail } from 'lucide-react'
import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import * as Select from '@radix-ui/react-select'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <section className="mt-6 flex flex-col ">
        {/* header da seção */}
        <div
          className="flex items-center justify-between border-b border-zinc-200 
        pb-5"
        >
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex-center flex gap-2">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="hover:bg-violet-700S rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Save
            </button>
          </div>
        </div>

        {/* Formulário */}
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* Linha do nome */}
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Diego" />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Fernandes" />
              </Input.Root>
            </div>
          </div>

          {/* Linha do email */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="diego@rocketseat.com.br"
              />
            </Input.Root>
          </div>

          {/* Linha do Your Photo */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-700">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* Linha do Role */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          {/* Linha do Country */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select.Root>
              <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
                <Select.Value className="text-black" />
                <Select.Icon>
                  <ChevronDown className="h-5 w-5 text-zinc-500" />
                </Select.Icon>
              </Select.Trigger>
            </Select.Root>
          </div>

          {/* Linha do Timezone */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div></div>
          </div>

          {/* Linha do Bio */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-700">
                Write a short introduction.
              </span>
            </label>
          </div>

          {/* Linha do Portfolio */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-700">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          {/* Última linha - rodapé */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="hover:bg-violet-700S rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Save
            </button>
          </div>

          {/* fim */}
        </form>
      </section>
    </>
  )
}
