import { mount } from '@vue/test-utils'
import Education from "../../src/pages/Home/Education.vue"

const wrapper = mount(Education);

describe("Education", () => {
    it("should contain  education section",  () => {
        expect(wrapper.html()).toContain("id=\"education\"");
    });
});
