interface FindPWProps {
  form: FindPWFormProps;
  setForm: React.Dispatch<React.SetStateAction<FindPWFormProps>>;
}

interface FindPWFormProps {
  email: string;
  isCheck: boolean;
  numbers: string;
}

export type { FindPWProps };
