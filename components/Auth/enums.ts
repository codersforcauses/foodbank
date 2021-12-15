const CHARACTERS_FOR_AUTH = 3

const PASSWORD_LENGTH = 27

enum PAGES {
  USERNAME_FORM = 1,
  PASSWORD_FORM = 2,
  REPEAT_PASSWORD_FORM = 3
}

enum MESSAGES {
  USERNAME_LABEL = 'Enter a username.',
  PASSWORD_LABEL = 'Choose your three characters.',
  REPEATED_PASSWORD_LABEL = 'Re-select those same three characters and remember them.',
  PASSWORD_MATCHED = 'Signed in',
  REPEATED_PASSWORD_MATCHED = 'Registered',
  WRONG_PASSWORD = 'Uh-oh! You have selected the wrong characters!',
  PASSWORDS_NOT_MATCHED = 'Uh-oh! You have selected the wrong characters!',
  NO_USER_DOCUMENT = 'User docoment not found.'
}

export { CHARACTERS_FOR_AUTH, PASSWORD_LENGTH, PAGES, MESSAGES }
