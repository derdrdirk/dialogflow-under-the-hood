import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

configure({ adapter: new Adapter() });

export { shallow, mount, render };
