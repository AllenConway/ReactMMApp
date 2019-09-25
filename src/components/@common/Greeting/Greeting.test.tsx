import React from 'react';
import { create } from "react-test-renderer";
import Greeting from './Greeting';

describe("Grreting component", () => {
    test("Matches the snapshot", () => {
      const greeting = create(<Greeting />);
      expect(greeting.toJSON()).toMatchSnapshot();
    });
});