import { SkeletonComponent } from "@/components/commons/skeleton/skeleton.component"

export const LoadingComponent: React.FC = () => {
  return (
    <div className="flex flex-col w-full mt-12 p-8">
      <div className="flex w-full items-center justify-between">
        <SkeletonComponent
          height={30}
          width={200}
          baseColor="#e0e0e0"
          highlightColor="#f5f5f5"
          borderRadius={5}
        />

        <SkeletonComponent
          height={30}
          width={100}
          baseColor="#e0e0e0"
          highlightColor="#f5f5f5"
          borderRadius={5}
        />
      </div>

      <div className="mt-16">
        <SkeletonComponent
          height={300}
          width="100%"
          baseColor="#e0e0e0"
          highlightColor="#f5f5f5"
          borderRadius={5}
        />
      </div>

      <div className="flex justify-end mt-8">
        <SkeletonComponent
          height={30}
          width={200}
          baseColor="#e0e0e0"
          highlightColor="#f5f5f5"
          borderRadius={5}
        />
      </div>
    </div>
  )
}