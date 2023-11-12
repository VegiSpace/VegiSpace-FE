import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { EMAIL_DOMAIN_ARR } from "constant";
import { SignUpFormValues } from "types";
import { colors } from "styles/options";
import { Button, Typo } from "components";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    watch,
    control,
    setValue,
    getValues,
  } = useForm<SignUpFormValues>({ mode: "onChange" });

  const makeSelectAll = () => {
    const state = !getValues("selectAll");
    console.log(state);
    setValue("selectAll", state, { shouldDirty: true });
    setValue("shopEmailTerms", state, { shouldDirty: true });
    setValue("shopSMSTerms", state, { shouldDirty: true });
    setValue("usingTerms", state, { shouldDirty: true });
    setValue("collectInfoTerms", state, { shouldDirty: true });
  };

  console.log(isValid);
  return (
    <StyledSection>
      <StyledBanner>베지스페이스에 오신 것을 환영합니다!</StyledBanner>
      <StyledFormCotainer
        autoComplete="off"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          try {
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        })}
      >
        <StyledInputWrapper>
          <div>
            <StyledInputContainer
              invalid={errors.name ? colors.warning[25] : colors.grey[400]}
            >
              <StyledInput
                type="text"
                placeholder="이름 입력"
                {...register("name", {
                  required: "이름을 입력해주세요",
                  minLength: {
                    value: 1,
                    message: "이름은 최소 1자여야 합니다.",
                  },
                  maxLength: {
                    value: 8,
                    message: "이름은 최소 8자여야 합니다.",
                  },
                })}
              />
            </StyledInputContainer>
            {errors?.name && <StyledError> {errors.name.message} </StyledError>}
          </div>
          <StyledInputContainer
            invalid={
              errors.emailAddress?.message || errors.emailDomain?.message
                ? colors.warning[25]
                : colors.grey[400]
            }
          >
            <div>
              <StyledInput
                type="text"
                placeholder="이메일 입력"
                {...register("emailAddress", {
                  required: "이메일 주소를 입력해주세요",
                })}
              />
            </div>
            @
            <div>
              <Controller
                control={control}
                name="emailDomain"
                render={({ field: { value } }) => (
                  <StyledInput
                    type="text"
                    placeholder="이메일 입력"
                    value={watch("emailDomain")}
                    onChange={(e) =>
                      setValue("emailDomain", e.target.value, {
                        shouldDirty: true,
                      })
                    }
                  />
                )}
              />
            </div>
            <div>
              <StyledSelect
                {...register("emailDomain", {
                  onChange: (e) => {
                    e.target.value &&
                      setValue("emailDomain", e.target.value, {
                        shouldDirty: true,
                      });
                  },
                })}
              >
                {EMAIL_DOMAIN_ARR?.map(({ value, content }) => (
                  <option key={content} value={value}>
                    {content || watch("emailDomain")}
                  </option>
                ))}
              </StyledSelect>
            </div>
          </StyledInputContainer>
          <div>
            {errors?.emailAddress && (
              <StyledError> {errors.emailAddress.message} </StyledError>
            )}
          </div>
          <div>
            {errors?.emailDomain && (
              <StyledError> {errors.emailDomain.message} </StyledError>
            )}
          </div>

          <div>
            <StyledInputContainer
              invalid={errors.name ? colors.warning[25] : colors.grey[400]}
            >
              <StyledInput
                type="password"
                placeholder="비밀번호 입력"
                {...register("password", {
                  required: "비밀번호를 입력해주세요",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 최소 8자여야 합니다",
                  },
                  maxLength: {
                    value: 20,
                    message: "비밀번호는 최대 20자여야 합니다",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/,
                    message: "영문 / 특수기호 / 숫자를 포함하여야 합니다.",
                  },
                })}
              />
            </StyledInputContainer>
            {errors?.password && (
              <StyledError> {errors.password.message}</StyledError>
            )}
          </div>
          <div>
            <StyledInputContainer
              invalid={errors.name ? colors.warning[25] : colors.grey[400]}
            >
              <StyledInput
                type="password"
                placeholder="비밀번호 재입력"
                {...register("passwordConfirm", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") ||
                    "입력값이 비밀번호와 동일해야 합니다",
                })}
              />
            </StyledInputContainer>
            {errors?.passwordConfirm && (
              <StyledError>{errors.passwordConfirm.message}</StyledError>
            )}
          </div>
          <div>
            <StyledInputContainer
              invalid={errors.name ? colors.warning[25] : colors.grey[400]}
            >
              <StyledInput
                type="text"
                placeholder="핸드폰 번호 입력(숫자만 입력)"
                {...register("phone", {
                  required: "핸드폰 번호를 입력해주세요",

                  pattern: {
                    value: /^[0-9]{11,11}$/,
                    message: "핸드폰 번호 11자리를 모두 입력해주세요",
                  },
                })}
              />
            </StyledInputContainer>
            {errors?.phone && (
              <StyledError> {errors.phone.message} </StyledError>
            )}
          </div>
        </StyledInputWrapper>

        <StyledCheckboxWrapper>
          <StyledCheckboxContainer>
            <input
              type="checkbox"
              {...register("selectAll")}
              onChange={makeSelectAll}
            />
            <Typo typoType="Body3"> 전체 동일</Typo>
            <StyledHR />
          </StyledCheckboxContainer>

          <StyledCheckboxContainer>
            <div>
              <Controller
                control={control}
                name="usingTerms"
                render={({ field: { value } }) => (
                  <>
                    <input
                      type="checkbox"
                      {...register("usingTerms", {
                        required: "필수 약관에 동의 해야 합니다.",
                      })}
                    />
                    <StyledTermTitle>[필수] 이용약관 동의</StyledTermTitle>
                  </>
                )}
              />
            </div>

            {errors?.usingTerms && (
              <StyledError> {errors.usingTerms.message} </StyledError>
            )}
          </StyledCheckboxContainer>
          <StyledCheckboxContainer>
            <div>
              <Controller
                control={control}
                name="collectInfoTerms"
                render={({ field: { value } }) => (
                  <>
                    <input
                      type="checkbox"
                      {...register("collectInfoTerms", {
                        required: "필수 약관에 동의 해야 합니다.",
                      })}
                    />
                    <StyledTermTitle>
                      [필수] 개인정보 수집 및 이용 동의
                    </StyledTermTitle>
                  </>
                )}
              />
            </div>

            {errors?.collectInfoTerms && (
              <StyledError> {errors.collectInfoTerms.message} </StyledError>
            )}
          </StyledCheckboxContainer>
          <StyledCheckboxContainer>
            <input type="checkbox" {...register("shopSMSTerms")} />
            <StyledTermTitle>[선택] 쇼핑정보 수신 동의(SMS)</StyledTermTitle>
          </StyledCheckboxContainer>
          <StyledCheckboxContainer>
            <input type="checkbox" {...register("shopEmailTerms")} />
            <StyledTermTitle>[선택] 쇼핑정보 수신 동의(이메일)</StyledTermTitle>
          </StyledCheckboxContainer>
        </StyledCheckboxWrapper>

        <DevTool control={control} />
        <StyledButtonContainer>
          <Button type="submit" btnType="primary" color="black">
            회원가입
          </Button>
        </StyledButtonContainer>
      </StyledFormCotainer>
    </StyledSection>
  );
};

export default Signup;

const StyledHR = styled.hr`
  color: ${colors.grey[100]};
  margin: 0.9rem 0;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInputWrapper = styled.div``;

const StyledCheckboxWrapper = styled.div`
  margin-top: 1.6rem;
`;

const StyledCheckboxContainer = styled.div`
  margin: 0.4rem 0;
`;

const StyledBanner = styled.div`
  font-size: 1.8rem;
  font-weight: lighter;
  padding: 4.4rem 0;
`;

const StyledFormCotainer = styled.form``;

const StyledInputContainer = styled.div<{ invalid: string }>`
  border-bottom: 2px solid ${(props) => props["invalid"]};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 32.4rem;
  margin-bottom: 0.5rem;
`;

const StyledSelect = styled.select`
  height: 100%;
  border: none;
  option {
    height: 100%;
  }
`;

const StyledError = styled.div`
  color: ${colors.warning[25]};
  margin: 1rem 0;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  color: ${colors.neutral[1000]};
`;

const StyledTermTitle = styled.span`
  font-size: 1.4rem;
  font-style: normal;
`;

const StyledButtonContainer = styled.div`
  margin-top: 10rem;
`;
