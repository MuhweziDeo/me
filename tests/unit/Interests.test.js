import { mount } from '@vue/test-utils'
import Interests from "../../src/pages/Home/Interests.vue"

const wrapper = mount(Interests);

describe("Interests", () => {
    it("should contain  interests section",  () => {
        expect(wrapper.html()).toContain("id=\"interests\"");
    });
});
