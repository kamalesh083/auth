import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.error("Error sending verification email :", error);
    throw new Error(`Error sending verification email : ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "ef2091b0-49e6-446d-8b8e-e41bb1d026d0",
      company_info_name: "AUTH Verification",
      name: name,
    });

    console.log("Welcome Email sent successfully", response);
  } catch (error) {
    console.error("Error sending welcome email :", error);
    throw new Error(`Error sending welcome email : ${error}`);
  }
};
