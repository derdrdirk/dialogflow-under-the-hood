import { h } from "preact";
import Header from "../src/components/header";
import { shallow } from "./enzyme";

describe("Initial Test of the Header", () => {
  test("Header renders 3 nav items", () => {
    const context = shallow(<Header />);
    expect(context.find("h1").text()).toBe("Dialogflow - Under the Hood");
    expect(context.find("Link").length).toBe(2);
    expect(context.find("a").length).toBe(1);
  });
});
