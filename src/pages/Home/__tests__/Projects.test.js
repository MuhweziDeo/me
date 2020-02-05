import { mount } from '@vue/test-utils'
import Projects from "../../Home/Projects.vue"

const wrapper = mount(Projects);

describe("Projects", () => {
    it("should contain  Projects section",  () => {
        expect(wrapper.html()).toContain("id=\"projects\"");
    });
});
