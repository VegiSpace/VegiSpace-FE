interface EmailDomainProps {
  content: string;
  value: string;
}

/**
 * 
 * 
 * email,
password,
nickname,
phone,
 * agree_terms,
agree_personal,
agree_sms,
agree_email
 */

interface SignUpFormValues {
  nickname: string;
  emailAddress: string;
  emailDomain: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  selectAll: boolean;
  agree_terms: boolean;
  agree_personal: boolean;
  agree_sms: boolean;
  agree_email: boolean;
}

export type { EmailDomainProps, SignUpFormValues };
