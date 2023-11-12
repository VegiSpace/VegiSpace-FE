interface EmailDomainProps {
  content: string;
  value: string;
}

interface SignUpFormValues {
  name: string;
  emailAddress: string;
  emailDomain: string;
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
