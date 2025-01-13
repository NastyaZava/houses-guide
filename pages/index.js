import Link from "next/link"
import houses from "@/data/houses.json"

export default function Homepage({}) {
  return (
    <div className="flex w-full justify-center p-20">
      <ul className="flex flex-col gap-4 font-roboto text-[32px] font-semibold uppercase">
        {houses.map((house) => (
          <li key={house.id} className="p-5 w-[250px] text-center bg-[#59280b] text-[#F5E8D0] rounded-[2px]">
            <Link href={`/house/${house.id}`}>Дом {house.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
