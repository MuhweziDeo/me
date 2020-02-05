import { mount } from '@vue/test-utils'
import Experience from "../../src/pages/Home/Experience.vue"

const wrapper = mount(Experience);

describe("Experience", () => {
    it("should contain  experience section",  () => {
        expect(wrapper.html()).toContain("id=\"experience\"");
    });
});
