import { FORM_FIELDS } from '../consts/const';
import { XIcon, SendIcon } from './Icons';

import FormField from './FormField';
import GradientButton from './GradientButton';
import BorderButton from './BorderButton';

interface ModalFormProps {
  handleChangeVisibility: () => void;
  isVisible: boolean;
}

export default function ModalForm({
  handleChangeVisibility,
  isVisible,
}: ModalFormProps) {
  return (
    <div
      className={`absolute left-[50%] top-[45%] -translate-y-[40%] -translate-x-[50%] bg-white flex flex-col gap-8 p-8 w-110 rounded-2xl shadow-lg shadow-gray-800 dark:shadow-gray-600 dark:bg-slate-900 dark:text-white transition ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Contáctame</h3>
        <button
          className="cursor-pointer hover:text-red-500 hover:-rotate-90 transition duration-300"
          onClick={handleChangeVisibility}
        >
          <XIcon className="size-8" />
        </button>
      </div>
      <form className="flex flex-col gap-8">
        {FORM_FIELDS.map(({ id, label, type, placeholder }) => (
          <FormField
            id={id}
            label={label}
            type={type}
            placeholder={placeholder}
          />
        ))}
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            className="border-1 border-gray-800/20 dark:border-gray-600 rounded-md py-2 outline-none px-4 shadow-sm shadow-gray-800 dark:shadow-gray-600 focus:border-gray-900 dark:focus:border-white transition w-full h-36 placeholder:text-gray-400 dark:placeholder:text-gray-300"
            placeholder="Cuentame sobre tu proyecto o consulta"
            id="message"
          ></textarea>
        </div>
        <footer className="flex gap-2">
          <BorderButton
            onClick={handleChangeVisibility}
            className="w-46 justify-center"
          >
            <XIcon />
            Cancelar
          </BorderButton>
          <GradientButton className="w-46 justify-center">
            <SendIcon />
            Enviar
          </GradientButton>
        </footer>
      </form>
    </div>
  );
}
