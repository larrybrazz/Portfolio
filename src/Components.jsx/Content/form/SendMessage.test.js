import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import SendMessage from "./SendMessage";
import { send } from "emailjs-com";

jest.mock("emailjs-com", () => ({
  send: jest.fn().mockResolvedValue({
    status: 200,
    text: "Email sent successfully",
  }),
}));

test("allows user to fill out the form and submit", async () => {
  render(<SendMessage />);

  // Fill out the form
  fireEvent.change(screen.getByPlaceholderText("Your Name"), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("Your Email"), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Your Phone"), {
    target: { value: "1234567890" },
  });
  fireEvent.change(screen.getByPlaceholderText("Your message here"), {
    target: { value: "Hello, this is a test message" },
  });

  // Submit the form
  fireEvent.click(screen.getByText("Send Message"));

    
  // Wait for the email to be sent
  await waitFor(() => {
    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(
      "service_4qnl5sg",
      "template_hdx7fn5",
      {
        senderName: "John Doe",
        email: "john@example.com",
        mobileNumber: "1234567890",
        message: "Hello, this is a test message",
      },
      "MXqeprMpFKfXs5DEK",
      "u1vk1r3gWcx7w2xpGJQFW"
    );
  });

  // Wait for a short delay before checking if the form fields are cleared
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust the delay as needed
  });

  // Check if the form fields are cleared after submission
  expect(screen.getByPlaceholderText("Your Name")).toHaveValue("");
  expect(screen.getByPlaceholderText("Your Email")).toHaveValue("");
  expect(screen.getByPlaceholderText("Your Phone")).toHaveValue("");
  expect(screen.getByPlaceholderText("Your message here")).toHaveValue("");
});
