import Minimize from "~/components/icons/Minimize";
import Maximize from "~/components/icons/Maximize";

import { useModal } from "~/contexts/ModalContext";

export default function Controls(props) {
  const { modalIsOpen, onOpenModal, onCloseModal } = useModal();

  return (
    <div className="controls" {...props}>
      {modalIsOpen ? (
        <Minimize onClick={() => onCloseModal({ isAnimated: false })} />
      ) : (
        <Maximize onClick={() => onOpenModal({ isAnimated: false })} />
      )}
    </div>
  );
}
