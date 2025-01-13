import houses from "@/data/houses.json"

export default function InstructionPage({ house, instruction }) {
  return (
    <div className="flex flex-col w-full items-center font-roboto font-medium text-[16px] my-10 text-[#59280b]">
      {instruction.id === "finnish-stove" && (
        <div className="w-[80vw] sm:w-[50vw] flex flex-col items-center gap-10">
          <div className="flex flex-col gap-4  items-center ">
            <p className="font-bold text-[16px] uppercase">Как топить нижнюю топку (камин):</p>
            <div className="flex w-full h-[300px] bg-[#aabccd] items-center justify-center uppercase text-[#fff] p-5 text-center">
              <span>можно добавить фото в любом месте</span>
            </div>
            <ul className="flex gap-2 flex-col list-decimal p-6">
              <li>Проверьте что задвижка на дымоходе открыта</li>
              <li>Рычажок около пола поставьте в крайнее правое положение</li>
              <li>Рычаг под нижней топкой выдвиньте на себя</li>
              <li>
                Рычажком на рамке дверцы нижней топки отожмите стекло от рамки чтобы был зазор.
              </li>
              <li>
                На дверце духовки наоборот, плотно прижмите стекло к рамке аналогичным рычажком.
              </li>
              <li>Положите в нижнюю топку бумагу, картон и 4 полена потоньше в форме колодца</li>
              <li>
                Зажгите огонь, закройте дверцу. Если плохо разгорается, откройте поддувало каменную
                дверцу под топкой внизу у пола.
              </li>
              <li>
                Когда дрова разгонятся закройте каменную дверцу и через 10 минут утопите рычаг под
                нижней топкой
              </li>
              <li>Подкладывайте дрова по мере необходимости</li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="font-bold text-[16px] uppercase">Как топить верхнюю топку ( духовка ):</p>
            <div className="flex w-full h-[300px] bg-[#aabccd] items-center justify-center uppercase text-[#fff] p-5 text-center">
              можно добавить фото в любом месте
            </div>
            <ul className="flex gap-2 flex-col list-decimal p-6">
              <li>
                Нужно закрыть все в нижней топке. (Рычажок внизу у пола влево, рычаг под нижней
                полкой утопить, стекло нижней топки плотно прижать к рамке)
              </li>
              <li>Вынуть все из духовки</li>
              <li>Отжать стекло от рамки дверцы духовки</li>
              <li>Разжечь дрова в духовке, подкидывать по мере сгорания</li>
              <li>Дождаться когда температура на термометре достигнет нужного значения</li>
              <li>Дождаться когда дрова прогорят до мелких углей</li>
              <li>
                Кочергой в лючок сзади духовки и скинуть в все угли и золу, очистив таким образом
                дно духовки
              </li>
              <li>Прижать стекло к рамке дверцы духовки</li>
              <li>Рычажок у пола поставить в среднее положение</li>
            </ul>
            <p className="uppercase">Вуаля! Можно приступать к готовке.</p>
            <p className="opacity-[0.6] mb-10">*Только рыбу в печи не готовьте, пожалуйста.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export async function getStaticPaths() {
  const paths = []

  houses.forEach((house) => {
    house.instructions.forEach((instruction) => {
      paths.push({
        params: {
          houseId: house.id.toString(),
          instructionId: instruction.id,
        },
      })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { houseId, instructionId } = params

  // Ищем дом
  const house = houses.find((h) => h.id.toString() === houseId)
  if (!house) {
    return { notFound: true }
  }

  // Ищем инструкцию внутри дома
  const instruction = house.instructions.find((instr) => instr.id === instructionId)
  if (!instruction) {
    return { notFound: true }
  }

  return {
    props: {
      house,
      instruction,
    },
  }
}
