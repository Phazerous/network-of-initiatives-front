import Image from 'next/image';
import Modal from '../../../../modal/Modal';

import styles from './initiative-modal-form-sent.module.scss';

interface InitiativeModalFormSentProps {
  onSubmit: () => void;
}

export default function InitiativeModalFormSent({
  onSubmit,
}: InitiativeModalFormSentProps) {
  return (
    <>
      <Modal size='s'>
        <div className={styles.container}>
          <Image
            src='/initiatives/tick.svg'
            alt={'Successful sent icon.'}
            width={109}
            height={109}
          />

          <h3 className={styles.message}>
            Заявка была<span>успешно отправлена</span>
          </h3>

          <div className={styles.line}></div>

          <button
            className={styles.back}
            onClick={onSubmit}>
            Вернуться
          </button>
        </div>
      </Modal>
    </>
  );
}
