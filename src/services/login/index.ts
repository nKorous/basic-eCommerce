const fakeLogins = [
  {
    username: 'Billy',
    password: '123'
  },
  {
    username: 'nate',
    password: 'myPassword'
  },
  {
    username: 'mikeHawk',
    password: 'password'
  }
]

export const checkIsUser = (username: string, password: string) => {
  const filter = fakeLogins.filter(d => d.username === username && d.password === password)
  if(filter.length === 1) return true
  else return false
  
}

