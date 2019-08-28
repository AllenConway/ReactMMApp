import React, { useState } from "react";
import { useEffect } from "react";

interface GreetingProps {
  greetingMessage?: string;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  //use React hooks
  const [greetingMessage, setGreetingMessage] = useState(
    "Welcome to Mountain Cabin Vacations"
  );

  useEffect(() => {
    if (props.greetingMessage) {
      setGreetingMessage(props.greetingMessage);
    }
    //To avoid the following lint warning make sure to pass the dependency: "React Hook useEffect contains a call to 'setGreetingMessage'. Without a list of dependencies, 
    // this can lead to an infinite chain of updates. To fix this, pass [props.greetingMessage] as a second argument to the useEffect"
  }, [props.greetingMessage]); 

  return <h1>{greetingMessage}</h1>;
};

export default Greeting;
