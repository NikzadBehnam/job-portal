import { screen, render } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
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

  // New test title
  describe('when the user logs in', () => {
    // a single unit test
    it('displays user profile picture', async () => {
      render(MainNav)
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })

      await userEvent.click(loginButton)
      profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
