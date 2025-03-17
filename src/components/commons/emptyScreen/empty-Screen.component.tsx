import { Frown } from "lucide-react"

export const EmptyScreen: React.FC<{message: string}> = ({ message }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-[50vh]">
      <Frown size={80} color="#7c7c8a" />
      <h2 className="text-2xl font-bold text-gray-500">{message}</h2>
    </div>
  )
}