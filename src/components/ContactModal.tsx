import { useState } from 'react';
import GradientButton from './GradientButton';
import { MessageIcon } from './Icons';
import ModalForm from './ModalForm';

export default function ContactModal() {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <GradientButton onClick={handleChangeVisibility}>
        <MessageIcon />
        Contactame
      </GradientButton>

      {
        <div
          className={`fixed inset-0 z-40 flex items-center justify-center transition-opacity duration-300 backdrop-blur-md  ${
            isVisible
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleChangeVisibility}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ModalForm
              handleChangeVisibility={handleChangeVisibility}
              isVisible={isVisible}
            />
          </div>
        </div>
      }
    </>
  );
}
