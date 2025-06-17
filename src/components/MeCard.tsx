import { HOBBIES } from '../consts/const';

export default function MeCard() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-violet-600 to-violet-700 rounded-xl p-2 shadow-lg shadow-gray-800 hover:shadow-xl transition dark:shadow-gray-600">
      <article className="flex flex-col justify-center items-center py-8 px-4 bg-white rounded-xl dark:bg-slate-800 dark:text-white">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="size-42 rounded-full outline-3 mb-4"
            src="./images/photo.png"
            alt="Foto #2 de Orlando López"
          />
          <h3 className="text-3xl font-medium">Orlando López</h3>
          <h3 className="text-2xl text-blue-500 font-medium">
            Desarrollador Front-End
          </h3>
        </div>
        <hr className="w-100 mt-4 text-gray-200 my-4" />
        <ul className="flex flex-col gap-4">
          {HOBBIES.map(({ icon: Icon, text, color }) => (
            <li className="flex items-center gap-2">
              <Icon className={`${color}`} />
              <span className="font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
