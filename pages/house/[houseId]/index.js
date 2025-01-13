import houses from "@/data/houses.json"
import Link from "next/link"

export default function HousePage({ house }) {
  if (!house) return <div>Дом не найден</div>

  return (
    <div className="flex flex-col w-full items-center p-20 font-roboto ">
      <div className="text-center mb-5 text-[32px] text-[#59280b] font-semibold">
        Инструкции по использованию
      </div>
      <ul className="flex flex-col gap-4 text-[28px] font-semibold">
        {house.instructions &&
          house.instructions.length > 0 &&
          house.instructions.map((instr) => (
            <li
              className="p-5 w-[250px] text-center bg-[#59280b] text-[#F5E8D0] rounded-[2px]"
              key={instr.id}>
              <Link href={`/house/${house.id}/${instr.id}`}>{instr.title}</Link>
            </li>
          ))}
        {/* <li className="p-5 w-[250px] text-center bg-[#59280b] text-[#F5E8D0] rounded-[2px]">
          <Link href={`/house/${house.id}/instruction`}>Финская печь</Link>
        </li>
        <li className="p-5 w-[250px] text-center bg-[#59280b] text-[#F5E8D0] rounded-[2px]">
          <Link href={`/house/${house.id}/instruction`}>Сауна</Link>
        </li>
        <li className="p-5 w-[250px] text-center bg-[#59280b] text-[#F5E8D0] rounded-[2px]">
          <Link href={`/house/${house.id}/instruction`}>Хамам</Link>
        </li> */}
      </ul>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = houses.map((house) => ({
    params: { houseId: house.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { houseId } = params
  const house = houses.find((h) => h.id.toString() === houseId)

  if (!house) {
    return { notFound: true }
  }

  return {
    props: {
      house,
    },
  }
}
