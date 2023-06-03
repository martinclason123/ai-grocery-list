// src/components/WaitingList/WaitingList.js
import { useState } from "react";
import {
  WaitingListContainer,
  LogoContainer,
  Logo,
  WaitingListTitle,
  WaitingListDescription,
  Form,
  Input,
  Button,
  InputWrapper,
  Icon,
  CopyContainer,
  Copy,
  CheckList,
  CheckListItem,
  ChecklistText,
  CheckListIcon,
  Arrow,
} from "./WaitingListStyles";

import { useForm } from "react-hook-form";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const WaitingList = () => {
  const url = "YOUR_MAILCHIMP_URL"; // Replace with your Mailchimp POST URL
  const { register, handleSubmit, formState } = useForm();
  const [nameFocus, setnameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const borderActive = { border: "0.01em solid #365d5a" };

  return (
    <WaitingListContainer>
      <LogoContainer>
        <Logo
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 95.54 95.47"
        >
          <defs></defs>
          <g id="Layer_1-2" data-name="Layer 1">
            <g>
              <g>
                <path
                  class="cls-1"
                  fill="#fdfdfd"
                  d="M95.54,47.81c0,25.16-20,47.87-48.37,47.66C19.46,95.26-.18,72.55,0,47.33,.19,20.78,21.26-.12,47.88,0c26.92,.12,47.75,21.01,47.66,47.81Zm-87.11-.2c-.06,21.18,17.07,39.23,39,39.29,22.4,.06,39.45-17.98,39.63-39.06,.18-21.3-16.56-39.17-38.99-39.25-22.2-.08-39.43,17.11-39.64,39.02Z"
                />
                <path d="M8.44,47.61c.2-21.91,17.44-39.1,39.64-39.02,22.43,.08,39.17,17.95,38.99,39.25-.18,21.08-17.23,39.12-39.63,39.06-21.93-.06-39.05-18.11-39-39.29Zm36.2-7.31c-.79-.66-1.43-1.19-2.07-1.71-.18-.15-.19-.33-.18-.55,.15-3.56-1.34-6.32-4.18-8.37-2.43-1.75-4.88-3.47-7.32-5.19-1.05-.74-2.1-1.47-3.15-2.21-.38-.27-.69-.22-1,.12-.35,.38-.06,.6,.18,.84,.17,.18,.36,.34,.54,.51,2.63,2.46,5.26,4.93,7.89,7.38,.35,.33,.62,.6,.2,1.1-.42,.51-.7,.15-1.01-.08-2.18-1.59-4.35-3.2-6.54-4.79-1.05-.77-2.12-1.52-3.19-2.27-.35-.25-.66-.2-.94,.15-.28,.35-.07,.58,.17,.8,.5,.48,1,.97,1.51,1.45,2.4,2.28,4.8,4.56,7.19,6.85,.15,.14,.4,.25,.35,.53-.11,.66-.77,.93-1.33,.52-2.14-1.58-4.27-3.16-6.4-4.74-1.08-.8-2.17-1.61-3.25-2.41-.35-.26-.67-.35-.99,.06-.29,.37-.08,.62,.17,.88,.12,.13,.25,.26,.38,.38,2.81,2.73,5.61,5.47,8.42,8.19,.37,.36,.48,.63,.11,1.07-.41,.49-.68,.12-.95-.09-2.2-1.68-4.39-3.38-6.58-5.07-1.01-.78-2.03-1.56-3.04-2.34-.41-.32-.73-.28-1,.17-.28,.47,.12,.71,.37,.97,2.99,3.02,5.98,6.05,9,9.05,2.96,2.94,7.07,3.53,10.74,1.56,.38-.21,.63-.18,.95,.09,1.45,1.21,2.91,2.41,4.39,3.59,.39,.31,.56,.61,.56,1.12-.02,7.21-.01,14.41-.01,21.62,0,1.62-.02,3.24,.01,4.86,.03,1.51,1.15,2.68,2.64,2.85,1.35,.15,2.69-.79,3.06-2.14,.13-.46,.09-.94,.09-1.41,0-6.91,0-13.83,.02-20.74,0-.23-.09-.49,.12-.73,.13,.09,.26,.17,.38,.27,4.25,3.48,8.5,6.96,12.74,10.44,2.71,2.23,5.43,4.45,8.14,6.69,.71,.58,1.5,.82,2.39,.58,1.04-.28,1.74-.94,1.99-1.99,.28-1.16-.16-2.05-1.06-2.79-8.07-6.66-16.14-13.34-24.21-19.99-.37-.3-.52-.6-.51-1.08,.02-3.85,.02-7.7,0-11.55,0-1.7-1.3-2.97-2.95-2.95-1.61,.02-2.84,1.29-2.85,2.98-.01,1.31,0,2.61,0,3.92,0,1.14,0,2.29,0,3.62Zm-23.72,7.78h0c0-1.06,.01-2.12,0-3.17-.02-1.35-.94-2.26-2.25-2.26-1.31,0-2.22,.91-2.22,2.28,0,2.14,.03,4.28,.04,6.41,0,.37,.07,.71,.26,1.03,.51,.86,1.52,1.28,2.5,1.05,.96-.23,1.63-1,1.66-2.04,.04-1.1,0-2.21,0-3.31Zm53.14,.16h0c0,.97,0,1.93,0,2.9,0,.07,0,.13,0,.2,.03,1.31,.93,2.18,2.24,2.17,1.3-.02,2.2-.9,2.2-2.21,.01-2.05,0-4.09,0-6.14,0-1.27-.98-2.22-2.22-2.22-1.28,0-2.21,.91-2.22,2.2-.01,1.03,0,2.07,0,3.1Z" />
              </g>
              <path
                class="cls-1"
                fill="#fdfdfd"
                d="M44.64,40.3c0-1.33,0-2.48,0-3.62,0-1.31,0-2.61,0-3.92,.01-1.69,1.24-2.96,2.85-2.98,1.65-.02,2.94,1.25,2.95,2.95,.02,3.85,.02,7.7,0,11.55,0,.47,.15,.78,.51,1.08,8.08,6.66,16.14,13.33,24.21,19.99,.89,.74,1.34,1.64,1.06,2.79-.26,1.05-.95,1.72-1.99,1.99-.89,.24-1.68,0-2.39-.58-2.71-2.23-5.42-4.46-8.14-6.69-4.25-3.48-8.49-6.96-12.74-10.44-.12-.1-.25-.18-.38-.27-.21,.24-.12,.5-.12,.73,0,6.91-.01,13.83-.02,20.74,0,.47,.03,.95-.09,1.41-.37,1.35-1.71,2.29-3.06,2.14-1.49-.16-2.61-1.34-2.64-2.85-.03-1.62-.01-3.24-.01-4.86,0-7.21,0-14.41,.01-21.62,0-.51-.17-.82-.56-1.12-1.48-1.17-2.94-2.37-4.39-3.59-.32-.27-.57-.3-.95-.09-3.67,1.97-7.78,1.38-10.74-1.56-3.02-3-6.01-6.03-9-9.05-.25-.25-.65-.49-.37-.97,.26-.45,.59-.49,1-.17,1.01,.79,2.02,1.56,3.04,2.34,2.19,1.69,4.38,3.39,6.58,5.07,.28,.21,.55,.58,.95,.09,.37-.44,.25-.72-.11-1.07-2.82-2.72-5.62-5.46-8.42-8.19-.13-.13-.26-.25-.38-.38-.24-.25-.46-.5-.17-.88,.32-.4,.65-.31,.99-.06,1.08,.8,2.17,1.61,3.25,2.41,2.13,1.58,4.26,3.17,6.4,4.74,.56,.41,1.21,.14,1.33-.52,.05-.28-.2-.39-.35-.53-2.39-2.29-4.79-4.57-7.19-6.85-.51-.48-1.01-.97-1.51-1.45-.24-.23-.44-.45-.17-.8,.28-.35,.58-.4,.94-.15,1.07,.75,2.13,1.5,3.19,2.27,2.18,1.59,4.36,3.19,6.54,4.79,.31,.22,.59,.59,1.01,.08,.42-.5,.15-.78-.2-1.1-2.63-2.46-5.26-4.92-7.89-7.38-.18-.17-.36-.34-.54-.51-.23-.24-.53-.46-.18-.84,.31-.34,.62-.39,1-.12,1.05,.74,2.11,1.47,3.15,2.21,2.44,1.73,4.9,3.44,7.32,5.19,2.84,2.05,4.33,4.81,4.18,8.37,0,.21,0,.4,.18,.55,.64,.53,1.28,1.06,2.07,1.71Z"
              />
            </g>
            <path
              class="cls-1"
              fill="#fdfdfd"
              d="M20.92,48.08c0,1.1,.03,2.21,0,3.31-.03,1.03-.7,1.81-1.66,2.04-.98,.23-1.99-.19-2.5-1.05-.19-.32-.25-.67-.26-1.03-.01-2.14-.04-4.28-.04-6.41,0-1.37,.91-2.27,2.22-2.28,1.31,0,2.23,.91,2.25,2.26,.02,1.06,0,2.12,0,3.17h0Z"
            />
            <path
              class="cls-1"
              fill="#fdfdfd"
              d="M74.06,48.24c0-1.03,0-2.07,0-3.1,.01-1.29,.94-2.2,2.22-2.2,1.25,0,2.21,.95,2.22,2.22,.01,2.05,.01,4.09,0,6.14,0,1.31-.9,2.2-2.2,2.21-1.31,.02-2.2-.85-2.24-2.17,0-.07,0-.13,0-.2,0-.97,0-1.93,0-2.9h0Z"
            />
          </g>
        </Logo>
      </LogoContainer>
      <WaitingListTitle>
        Join the <br /> Waitlist
      </WaitingListTitle>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <Form
            status={status}
            message={message}
            onSubmit={handleSubmit((data) => subscribe(data))}
          >
            <InputWrapper
              style={nameFocus ? borderActive : null}
              onFocus={() => {
                setnameFocus(true);
              }}
              onBlur={() => {
                setnameFocus(false);
              }}
            >
              <Icon
                id="uuid-f234ad64-2158-4ad5-9dfe-14739df736ee"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.54 30.62"
              >
                <g
                  id="uuid-53b04d1b-4192-455f-8051-6b88ece73089"
                  data-name="Layer 2"
                >
                  <path
                    d="m1.5,30.62v-5.62c0-2.26,1.83-4.09,4.09-4.09h17.37c2.26,0,4.09,1.83,4.09,4.09v5.62m-6.13-22.48c0,3.67-2.97,6.64-6.64,6.64s-6.64-2.97-6.64-6.64S10.6,1.5,14.27,1.5s6.64,2.97,6.64,6.64Z"
                    fill="none"
                    stroke="#365d5a"
                    strokeMiterlimit="10"
                    stroke-width="3"
                  />
                </g>
              </Icon>
              <Input
                {...register("FNAME", { required: true })}
                type="text"
                placeholder="Full Name..."
              />
            </InputWrapper>

            <InputWrapper
              style={emailFocus ? borderActive : null}
              onFocus={() => {
                setEmailFocus(true);
              }}
              onBlur={() => {
                setEmailFocus(false);
              }}
            >
              <Icon
                id="uuid-48b2cc8f-bc78-463a-8029-815122e510cd"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.36 23.28"
              >
                <g
                  id="uuid-ece9d9af-bff1-4afb-be2e-a09812068c10"
                  data-name="Layer 2"
                >
                  <g>
                    <path
                      d="m1,1h27.36v21.28H1V1Z"
                      fill="none"
                      stroke="#365d5a"
                      strokeMiterlimit="10"
                      stroke-width="2"
                    />
                    <path
                      d="m1,1l13.68,10.64L28.36,1"
                      fill="none"
                      stroke="#365d5a"
                      strokeMiterlimit="10"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </Icon>
              <Input
                {...register("EMAIL", { required: true })}
                type="email"
                placeholder="Email Address.."
              />
            </InputWrapper>
            <Button type="submit" disabled={formState.isSubmitting}>
              {status === null && (
                <>
                  Join The Waitlist
                  <Arrow
                    id="uuid-042f7a63-55f5-476c-9488-ad5e37930bec"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 47.06 36.35"
                  >
                    <g
                      id="uuid-1501c61b-8ecd-44db-8bc2-7bbe28af7b10"
                      data-name="Layer 2"
                    >
                      <path
                        d="m42.81,18.18H0M26.76,2.12l16.05,16.05-16.05,16.05"
                        fill="none"
                        stroke="#fff"
                        stroke-miterlimit="10"
                        stroke-width="6"
                      />
                    </g>
                  </Arrow>
                </>
              )}
              {status === "sending" && "sending..."}
              {status === "error" && "error"}
              {status === "success" && "Success!"}
            </Button>
          </Form>
        )}
      />
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <CopyContainer>
        <Copy>
          Stop stressing and have your meal plan done in moments rather than
          hours{" "}
        </Copy>
        <CheckList>
          <CheckListItem>
            <ChecklistText>Meal plan tailored to your needs</ChecklistText>
            <CheckListIcon
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 41.61 38.73"
            >
              <g
                id="uuid-0b045581-fa05-4a51-9d55-ae7d9cdfabc6"
                data-name="Layer 2"
              >
                <path
                  d="m41.37,5.32c2.04-2.56-9.77-5.32-9.77-5.32,0,0-18.07,22.08-18.95,24.93-1.34-2.68-3.07-5.15-5.15-7.31-2.06-1.43-7.5,6.09-7.5,6.09,3.42,5.42,7.4,10.45,11.88,15.02,0,0,16.23-16.72,29.49-33.41h0Z"
                  fill="#365d5a"
                />
              </g>
            </CheckListIcon>
          </CheckListItem>
          <CheckListItem>
            <ChecklistText>Beautiful, printable recipes</ChecklistText>
            <CheckListIcon
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 41.61 38.73"
            >
              <g
                id="uuid-0b045581-fa05-4a51-9d55-ae7d9cdfabc6"
                data-name="Layer 2"
              >
                <path
                  d="m41.37,5.32c2.04-2.56-9.77-5.32-9.77-5.32,0,0-18.07,22.08-18.95,24.93-1.34-2.68-3.07-5.15-5.15-7.31-2.06-1.43-7.5,6.09-7.5,6.09,3.42,5.42,7.4,10.45,11.88,15.02,0,0,16.23-16.72,29.49-33.41h0Z"
                  fill="#365d5a"
                />
              </g>
            </CheckListIcon>
          </CheckListItem>
          <CheckListItem>
            <ChecklistText>Conveniently organized grocery list</ChecklistText>
            <CheckListIcon
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 41.61 38.73"
            >
              <g
                id="uuid-0b045581-fa05-4a51-9d55-ae7d9cdfabc6"
                data-name="Layer 2"
              >
                <path
                  d="m41.37,5.32c2.04-2.56-9.77-5.32-9.77-5.32,0,0-18.07,22.08-18.95,24.93-1.34-2.68-3.07-5.15-5.15-7.31-2.06-1.43-7.5,6.09-7.5,6.09,3.42,5.42,7.4,10.45,11.88,15.02,0,0,16.23-16.72,29.49-33.41h0Z"
                  fill="#365d5a"
                />
              </g>
            </CheckListIcon>
          </CheckListItem>
        </CheckList>
      </CopyContainer>
    </WaitingListContainer>
  );
};
export default WaitingList;
