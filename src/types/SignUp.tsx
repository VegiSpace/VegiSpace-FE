interface EmailDomainProps {
  content: string;
  value: string;
}

interface SignUpFormValues {
  name: string;
  email: {
    address: string;
    domain: string;
  };
  password: string;
  passwordConfirm: string;
  phone: string;
  selectAll: boolean;
  usingTerms: boolean;
  collectInfoTerms: boolean;
  shopSMSTerms: boolean;
  shopEmailTerms: boolean;
}

export type { EmailDomainProps, SignUpFormValues };
