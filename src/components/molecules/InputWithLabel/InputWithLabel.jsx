import styles from "./InputWithLabel.module.css";
//Components
import Input from '@/components/atoms/Input/Input';

const InputWithLabel = ({ id, label, type, onChange, placeholder }) => {
  return (
    <div className={styles.inputLabelContainer} >
      <div>
        <label className={styles.label} htmlFor={id}>{label}</label>
      </div>
      <Input id={id} type={type} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default InputWithLabel