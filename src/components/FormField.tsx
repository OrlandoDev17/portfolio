import type { Field } from '../consts/types';

export default function FormField({ id, label, type, placeholder }: Field) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        className={`border-1 border-gray-800/20 dark:border-gray-600 rounded-md py-2 outline-none px-4 shadow-sm shadow-gray-800 dark:shadow-gray-600 focus:border-gray-900 dark:focus:border-white transition w-full dark:placeholder:text-gray-300`}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
