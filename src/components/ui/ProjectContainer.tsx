export default function ProjectContainer() {
  return (
    <article className="grid grid-cols-3 md:grid-cols-2 grid-rows-3 md:grid-rows-5 gap-2 md:gap-2 m-4">
      <div className="hidden md:block md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2 bg-gray-300 rounded-md p-10">
        <img
          src="/images/nike-store-desktop.png"
          alt="Mockup del Proyecto Nike Store"
        />
      </div>
      <div className="hidden md:block md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1 bg-gray-300 rounded-md p-10">
        <h4>Propósito</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          consequatur in ratione laboriosam ipsum error.
        </p>
      </div>
      <div className="hidden md:block md:col-start-1 md:row-start-4 md:col-span-1 md:row-span-2 bg-gray-300 rounded-md p-10 h-fit">
        <h4>Stack</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className="hidden md:block md:col-start-2 md:row-start-4 md:col-span-1 md:row-span-2 bg-gray-300 rounded-md p-10 h-fit">
        <h4>Estado</h4>
        <ul>
          <li>
            Inicio
            <span className="text-green-500">Enero 2025</span>
          </li>
          <li>
            {" "}
            Actualizado
            <span className="text-green-500">Marzo 2025</span>
          </li>
          <li>En Produccion</li>
        </ul>
      </div>
    </article>
  );
}
