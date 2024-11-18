"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function LoginPage({
  as: _Component = _Builtin.Block,
  buttonConnectProps = {},
  inputEmailProps = {},
  inputPasswordProps = {},
  errorMessage = "Le nom d'utilisateur et/ou le mot de passe est incorrect !",
  copyrightPlayPad = "© 2024 PlayPad Sàrl",
  showError = false,
  onSubmitForm = {},
}) {
  return (
    <_Component className="page-wrapper home" tag="div">
      <_Builtin.HtmlEmbed
        className="global-styles"
        value="%3Cstyle%3E%0A%0A%2F*%20Set%20color%20style%20to%20inherit%20*%2F%0A.inherit-color%20*%20%7B%0A%20%20%20%20color%3A%20inherit%3B%0A%7D%0A%0A%2F*%20Focus%20state%20style%20for%20keyboard%20navigation%20for%20the%20focusable%20elements%20*%2F%0A*%5Btabindex%5D%3Afocus-visible%2C%0A%20%20input%5Btype%3D%22file%22%5D%3Afocus-visible%20%7B%0A%20%20%20outline%3A%200.125rem%20solid%20%234d65ff%3B%0A%20%20%20outline-offset%3A%200.125rem%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20top%20margin%20on%20first%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%20%3E%20%3Anot(div)%3Afirst-child%2C%20.w-richtext%20%3E%20div%3Afirst-child%20%3E%20%3Afirst-child%20%7B%0A%20%20margin-top%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Get%20rid%20of%20bottom%20margin%20on%20last%20element%20in%20any%20rich%20text%20element%20*%2F%0A.w-richtext%3E%3Alast-child%2C%20.w-richtext%20ol%20li%3Alast-child%2C%20.w-richtext%20ul%20li%3Alast-child%20%7B%0A%09margin-bottom%3A%200%20!important%3B%0A%7D%0A%0A%2F*%20Prevent%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-off%20%7B%0A%09pointer-events%3A%20none%3B%0A%7D%0A%0A%2F*%20Enables%20all%20click%20and%20hover%20interaction%20with%20an%20element%20*%2F%0A.pointer-events-on%20%7B%0A%20%20pointer-events%3A%20auto%3B%0A%7D%0A%0A%2F*%20Create%20a%20class%20of%20.div-square%20which%20maintains%20a%201%3A1%20dimension%20of%20a%20div%20*%2F%0A.div-square%3A%3Aafter%20%7B%0A%09content%3A%20%22%22%3B%0A%09display%3A%20block%3B%0A%09padding-bottom%3A%20100%25%3B%0A%7D%0A%0A%2F*%20Make%20sure%20containers%20never%20lose%20their%20center%20alignment%20*%2F%0A.container-medium%2C.container-small%2C%20.container-large%20%7B%0A%09margin-right%3A%20auto%20!important%3B%0A%20%20margin-left%3A%20auto%20!important%3B%0A%7D%0A%0A%2F*%20%0AMake%20the%20following%20elements%20inherit%20typography%20styles%20from%20the%20parent%20and%20not%20have%20hardcoded%20values.%20%0AImportant%3A%20You%20will%20not%20be%20able%20to%20style%20for%20example%20%22All%20Links%22%20in%20Designer%20with%20this%20CSS%20applied.%0AUncomment%20this%20CSS%20to%20use%20it%20in%20the%20project.%20Leave%20this%20message%20for%20future%20hand-off.%0A*%2F%0A%2F*%0Aa%2C%0A.w-input%2C%0A.w-select%2C%0A.w-tab-link%2C%0A.w-nav-link%2C%0A.w-dropdown-btn%2C%0A.w-dropdown-toggle%2C%0A.w-dropdown-link%20%7B%0A%20%20color%3A%20inherit%3B%0A%20%20text-decoration%3A%20inherit%3B%0A%20%20font-size%3A%20inherit%3B%0A%7D%0A*%2F%0A%0A%2F*%20Apply%20%22...%22%20after%203%20lines%20of%20text%20*%2F%0A.text-style-3lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%203%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20after%202%20lines%20of%20text%20*%2F%0A.text-style-2lines%20%7B%0A%09display%3A%20-webkit-box%3B%0A%09overflow%3A%20hidden%3B%0A%09-webkit-line-clamp%3A%202%3B%0A%09-webkit-box-orient%3A%20vertical%3B%0A%7D%0A%0A%2F*%20Adds%20inline%20flex%20display%20*%2F%0A.display-inlineflex%20%7B%0A%20%20display%3A%20inline-flex%3B%0A%7D%0A%0A%2F*%20These%20classes%20are%20never%20overwritten%20*%2F%0A.hide%20%7B%0A%20%20display%3A%20none%20!important%3B%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20%20%20.hide%2C%20.hide-tablet%20%7B%0A%20%20%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20%20%20.hide-mobile-landscape%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%20%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20%20%20.hide-mobile%7B%0A%20%20%20%20%20%20display%3A%20none%20!important%3B%0A%20%20%20%20%7D%0A%7D%0A%20%0A.margin-0%20%7B%0A%20%20margin%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-0%20%7B%0A%20%20padding%3A%200rem%20!important%3B%0A%7D%0A%0A.spacing-clean%20%7B%0Apadding%3A%200rem%20!important%3B%0Amargin%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-top%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-top%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-right%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-right%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-bottom%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-bottom%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-left%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-left%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.margin-horizontal%20%7B%0A%20%20margin-top%3A%200rem%20!important%3B%0A%20%20margin-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.padding-horizontal%20%7B%0A%20%20padding-top%3A%200rem%20!important%3B%0A%20%20padding-bottom%3A%200rem%20!important%3B%0A%7D%0A%0A.margin-vertical%20%7B%0A%20%20margin-right%3A%200rem%20!important%3B%0A%20%20margin-left%3A%200rem%20!important%3B%0A%7D%0A%20%20%0A.padding-vertical%20%7B%0A%20%20padding-right%3A%200rem%20!important%3B%0A%20%20padding-left%3A%200rem%20!important%3B%0A%7D%0A%0A%2F*%20Apply%20%22...%22%20at%20100%25%20width%20*%2F%0A.truncate-width%20%7B%20%0A%09%09width%3A%20100%25%3B%20%0A%20%20%20%20white-space%3A%20nowrap%3B%20%0A%20%20%20%20overflow%3A%20hidden%3B%20%0A%20%20%20%20text-overflow%3A%20ellipsis%3B%20%0A%7D%0A%2F*%20Removes%20native%20scrollbar%20*%2F%0A.no-scrollbar%20%7B%0A%20%20%20%20-ms-overflow-style%3A%20none%3B%0A%20%20%20%20overflow%3A%20-moz-scrollbars-none%3B%20%0A%7D%0A%0A.no-scrollbar%3A%3A-webkit-scrollbar%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Block className="main-wrapper" tag="main">
        <_Builtin.Block className="section_login7" tag="section">
          <_Builtin.Block className="login7_component" tag="div">
            <_Builtin.Block
              className="login7_content-left"
              id="w-node-be3c4912-108d-279b-ad6d-427042a31832-42a3182d"
              tag="div"
            >
              <_Builtin.Block className="align-center card login" tag="div">
                <_Builtin.Block className="margin-bottom" tag="div">
                  <_Builtin.Block className="text-align-center" tag="div">
                    <_Builtin.Block
                      className="max-width-large align-center"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="margin-bottom margin-small"
                        tag="div"
                      >
                        <_Builtin.Block className="card_logo" tag="div">
                          <_Builtin.Image
                            loading="lazy"
                            width="243"
                            height="auto"
                            alt=""
                            src="https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65ecce2b63d1d30d015b35d1_logo%20-%20club%20manager%203.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="margin-bottom margin-medium"
                  tag="div"
                >
                  <_Builtin.Block className="divider_horizontal" tag="div" />
                </_Builtin.Block>
                <_Builtin.FormWrapper className="login7_form-block">
                  <_Builtin.FormForm
                    className="login7_form"
                    name="wf-form-login"
                    data-name="login"
                    method="post"
                    wized="login"
                    id="wf-form-login"
                    {...onSubmitForm}
                  >
                    <_Builtin.Block className="form_field-wrapper" tag="div">
                      <_Builtin.Block className="form_field-label" tag="div">
                        {"Email"}
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className="form_input"
                        name="email-2"
                        maxLength={256}
                        data-name="Email 2"
                        disabled={false}
                        type="email"
                        required={true}
                        autoFocus={false}
                        wized="email"
                        id="email-2"
                        {...inputEmailProps}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="form_field-wrapper" tag="div">
                      <_Builtin.Block className="field-label-wrapper" tag="div">
                        <_Builtin.Block className="form_field-label" tag="div">
                          {"Password"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className="form_input"
                        name="password-2"
                        maxLength={256}
                        data-name="Password 2"
                        disabled={false}
                        type="password"
                        required={true}
                        autoFocus={false}
                        wized="password"
                        id="password-2"
                        {...inputPasswordProps}
                      />
                    </_Builtin.Block>
                    {showError ? (
                      <_Builtin.Block
                        className="error_message"
                        tag="div"
                        wized="login_error_box"
                        wized-cloak=""
                      >
                        <_Builtin.Block tag="div" wized="error_message">
                          {errorMessage}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    ) : null}
                    <_Builtin.Grid
                      className="form-button-wrapper"
                      id="w-node-be3c4912-108d-279b-ad6d-427042a3184e-42a3182d"
                      tag="div"
                    >
                      <_Builtin.FormButton
                        className="button max-width-full login w-node-be3c4912-108d-279b-ad6d-427042a3184f-42a3182d"
                        id="button-connect"
                        type="submit"
                        value="Se Connecter"
                        data-wait="Patientez svp..."
                        wized="login_submit_btn"
                        {...buttonConnectProps}
                      />
                    </_Builtin.Grid>
                  </_Builtin.FormForm>
                  <_Builtin.FormSuccessMessage className="success-message">
                    <_Builtin.Block className="success-text" tag="div">
                      {"Thank you! Your submission has been received!"}
                    </_Builtin.Block>
                  </_Builtin.FormSuccessMessage>
                  <_Builtin.FormErrorMessage className="error-message">
                    <_Builtin.Block className="error-text" tag="div">
                      {"Oops! Something went wrong while submitting the form."}
                    </_Builtin.Block>
                  </_Builtin.FormErrorMessage>
                </_Builtin.FormWrapper>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="login7_footer" tag="div">
              <_Builtin.Block className="text-size-small" tag="div">
                {copyrightPlayPad}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
