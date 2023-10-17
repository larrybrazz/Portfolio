import React from "react";
import { render, screen } from "@testing-library/react";
import Content from "./Content";

test("renders content with correct text", () => {
  render(<Content />);

  // Check if the text "Hello, I'm" is present
  expect(screen.getByText("Hello, I'm")).toBeInTheDocument();

  // Check if the name "Olanrewaju Adebayo" is present
  expect(screen.getByText("Olanrewaju Adebayo")).toBeInTheDocument();

  // Check if social media icons are present (you can update with specific icons)
  expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
  expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
  expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();

  // Check if the text "Creative Developer" is present
  expect(screen.getByText("Creative Developer")).toBeInTheDocument();

  // Check if the "Say Hello" button is present
  expect(screen.getByText("Say Hello")).toBeInTheDocument();

  // Check if the email address is present
  expect(screen.getByText("Larrybrazz70@gmail.com")).toBeInTheDocument();

  // Check if the "About me" section is present
  expect(screen.getByText("About me")).toBeInTheDocument();

  // Check if other descriptive text is present
  expect(screen.getByText("I'm a Web Developer")).toBeInTheDocument();
  expect(screen.getByText("Based in Nigeria")).toBeInTheDocument();

  // Check if the description paragraph is present
  expect(
    screen.getByText(
      "Hi! My name is Olanrewaju Adebayo. I am a Web Developer, and I'm very passionate and dedicated to my work. With a year experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success."
    )
  ).toBeInTheDocument();

  // Check if the image is present (you can use an 'alt' text or 'src' attribute)
  expect(screen.getByAltText("Profile Image")).toBeInTheDocument();
});
