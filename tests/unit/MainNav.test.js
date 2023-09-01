import { screen, render } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  // a single unit test
  it('displays company name', () => {
    render(MainNav)
    screen.getByText('Bobo Careers')
  })

  //a single unit test
  it('displays menu items for navigations', () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      'Team',
      'Location',
      'Lofe at bob corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
})
