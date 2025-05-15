const local = {
  common: {
    confirm: '确认',
  },
  header: {
    collapseMenu: '折叠菜单',
    expandMenu: '展开菜单',
    fullscreen: '全屏',
    fullscreenExit: '退出全屏',
    lang: '切换语言',
    themeSchema: '主题模式',
    userCenter: '个人中心',
    logout: '退出登录',
  },
  route: {
    dashboard: '仪表盘',
    analysis: '分析页',
    workbench: '工作台',
    manage: {
      system: '系统管理',
      user: '用户管理',
      role: '角色管理',
      menu: '菜单管理',
    },
    exception: {
      page: '异常页',
      403: '403',
      404: '404',
      500: '500',
    },
    about: '关于',
  },
  page: {
    login: {
      common: {
        loginOrRegister: '登录 / 注册',
        userNamePlaceholder: '请输入用户名',
        phonePlaceholder: '请输入手机号',
        codePlaceholder: '请输入验证码',
        passwordPlaceholder: '请输入密码',
        confirmPasswordPlaceholder: '请再次输入密码',
        codeLogin: '验证码登录',
        confirm: '确定',
        back: '返回',
        validateSuccess: '验证成功',
        loginSuccess: '登录成功',
        welcomeBack: '欢迎回来，{userName} ！',
      },
      pwdLogin: {
        title: '密码登录',
        rememberMe: '记住我',
        forgetPassword: '忘记密码？',
        register: '注册账号',
        otherAccountLogin: '其他账号登录',
        otherLoginMode: '其他登录方式',
        superAdmin: '超级管理员',
        admin: '管理员',
        user: '普通用户',
      },
      codeLogin: {
        title: '验证码登录',
        getCode: '获取验证码',
        reGetCode: '{time}秒后重新获取',
        sendCodeSuccess: '验证码发送成功',
        imageCodePlaceholder: '请输入图片验证码',
      },
      register: {
        title: '注册账号',
        registerSuccess: '注册成功',
        agreement: '我已经仔细阅读并接受',
        protocol: '《用户协议》',
        policy: '《隐私权政策》',
      },
      resetPwd: {
        title: '重置密码',
        resetPwdSuccess: '重置密码成功',
      },
    },
  },
  form: {
    required: '不能为空',
    username: {
      required: '请输入用户名',
      invalid: '用户名格式不正确',
    },
    phone: {
      required: '请输入手机号',
      invalid: '手机号格式不正确',
    },
    pwd: {
      required: '请输入密码',
      invalid: '密码格式不正确，6-18位字符，包含字母、数字、下划线',
    },
    confirmPwd: {
      required: '请输入确认密码',
      invalid: '两次输入密码不一致',
    },
    code: {
      required: '请输入验证码',
      invalid: '验证码格式不正确',
    },
    email: {
      required: '请输入邮箱',
      invalid: '邮箱格式不正确',
    },
  },
}

export default local
