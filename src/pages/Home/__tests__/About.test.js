import { mount } from '@vue/test-utils'
import About from "../../Home/About.vue"

const wrapper = mount(About);

describe("About", () => {
    it("should contain  about section",  () => {
        expect(wrapper.html()).toContain("id=\"about\"");
    });
});
