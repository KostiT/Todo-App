import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { TodoItem } from "./TodoItem";
import { initialData } from "../../todos";

Enzyme.configure({ adapter: new Adapter() });

describe("TodoItem Component", () => {
    test("renders", () => {
        const wrapper = shallow(<TodoItem todo={initialData[0]} />);

        expect(wrapper.exists()).toBe(true);
    });

    test("contains text", () => {
        const wrapper = shallow(<TodoItem todo={initialData[0]} />);

        expect(wrapper.find(".todo-text").text()).toEqual(
            "Go to the supermarket"
        );
    });

    test("changes checkbox", () => {
        const wrapper = shallow(<TodoItem todo={initialData[0]} />);

        expect(wrapper.find(".todo-text").prop("className")).toEqual(
            "todo-text completed-todo"
        );
    });
});
