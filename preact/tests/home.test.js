import { h } from "preact";
import MockAdapter from "axios-mock-adapter";
import Home from "../src/routes/home";
import { shallow, mount } from "./enzyme";
import axios from "axios";

// mock any axios post request
const mock = new MockAdapter(axios);
mock.onPost().reply(200, true);

describe("Initial Test of Home", () => {
  window.scrollTo = () => {};
  const preventDefault = () => {};

  test("Home renders headline", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").text()).toBe("Talk to Joonka - Get a Loan");
  });

  test("Renders intro msg", () => {
    const wrapper = shallow(<Home />);
    expect(
      wrapper
        .find("main")
        .childAt(0)
        .text()
    ).toBe("Hi! This is Joonka a demo of Natural Language Processing.");
  });

  test("Sends msg on send button click", done => {
    const wrapper = mount(<Home />);
    wrapper.find("input").simulate("keydown", { key: "a" });
    wrapper.find("button").simulate("click");
    setImmediate(() => {
      expect(
        wrapper
          .find("main")
          .childAt(4)
          .text()
      ).toBe("a");
      done();
    });
  });

  test("Sends msg on pressing enter", done => {
    const wrapper = mount(<Home />);
    wrapper.find("input").simulate("keydown", { key: "b" });
    wrapper.find("input").simulate("keydown", { key: "Enter" });
    setImmediate(() => {
      expect(
        wrapper
          .find("main")
          .childAt(4)
          .text()
      ).toBe("b");
      done();
    });
  });
});
