import React, { useState } from "react";
import { useEffect } from "react";

interface GreetingProps {
  greetingMessage?: string;
}

const Greeting: React.FC<GreetingProps> = (props: GreetingProps) => {
  //use React hooks
  const [greetingMessage, setGreetingMessage] = useState(
    "Welcome to Mountain Cabin Vacations"
  );

  useEffect(() => {
    if (props.greetingMessage) {
      setGreetingMessage(props.greetingMessage);
    }
  });

  return <h1>{greetingMessage}</h1>;
};

export default Greeting;
