const local = {
  common: {
    confirm: 'Confirm',
  },
  header: {
    collapseMenu: 'Collapse Menu',
    expandMenu: 'Expand Menu',
    fullscreen: 'Fullscreen',
    fullscreenExit: 'Exit Fullscreen',
    lang: 'Switch Language',
    themeSchema: 'Theme Schema',
    userCenter: 'User Center',
    logout: 'Logout',
  },
  route: {
    dashboard: 'Dashboard',
    analysis: 'Analysis',
    workbench: 'Workbench',
    manage: {
      system: 'System Manage',
      user: 'User Manage',
      role: 'Role Manage',
      menu: 'Menu Manage',
    },
    exception: {
      page: 'Exception',
      403: '403',
      404: '404',
      500: '500',
    },
    about: 'About',
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'Login / Register',
        userNamePlaceholder: 'Please enter user name',
        phonePlaceholder: 'Please enter phone number',
        codePlaceholder: 'Please enter verification code',
        passwordPlaceholder: 'Please enter password',
        confirmPasswordPlaceholder: 'Please enter password again',
        codeLogin: 'Verification code login',
        confirm: 'Confirm',
        back: 'Back',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Login successfully',
        welcomeBack: 'Welcome back, {userName} !',
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember me',
        forgetPassword: 'Forget password?',
        register: 'Register',
        otherAccountLogin: 'Other Account Login',
        otherLoginMode: 'Other Login Mode',
        superAdmin: 'Super Admin',
        admin: 'Admin',
        user: 'User',
      },
      codeLogin: {
        title: 'Verification Code Login',
        getCode: 'Get verification code',
        reGetCode: 'Reacquire after {time}s',
        sendCodeSuccess: 'Verification code sent successfully',
        imageCodePlaceholder: 'Please enter image verification code',
      },
      register: {
        title: 'Register',
        agreement: 'I have read and agree to',
        protocol: '《User Agreement》',
        policy: '《Privacy Policy》',
      },
      resetPwd: {
        title: 'Reset Password',
      },
    },
  },
  form: {
    required: 'Cannot be empty',
    username: {
      required: 'Please enter user name',
      invalid: 'User name format is incorrect',
    },
    phone: {
      required: 'Please enter phone number',
      invalid: 'Phone number format is incorrect',
    },
    pwd: {
      required: 'Please enter password',
      invalid: '6-18 characters, including letters, numbers, and underscores',
    },
    confirmPwd: {
      required: 'Please enter password again',
      invalid: 'The two passwords are inconsistent',
    },
    code: {
      required: 'Please enter verification code',
      invalid: 'Verification code format is incorrect',
    },
    email: {
      required: 'Please enter email',
      invalid: 'Email format is incorrect',
    },
  },
}

export default local
