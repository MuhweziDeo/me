import { mount } from '@vue/test-utils'
import Skills from "../../src/pages/Home/Skills.vue";

const wrapper = mount(Skills);

describe("Skills", () => {
    it("should contain  Skills section",  () => {
        expect(wrapper.html()).toContain("id=\"skills\"");
    });
});
