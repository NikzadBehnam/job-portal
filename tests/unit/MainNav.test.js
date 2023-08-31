import {screen, render} from "@testing-library/vue"
import MainNav from "@/components/MainNav.vue"

describe("MainNav", ()=>{
  it("displays company name", () => {
    render(MainNav)
    screen.getByText('Bobo Careers')
  })
})