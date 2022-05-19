export const rules = {
  num: [
    {
      required: true,
      message: "手机号是必传内容",
      trigger: "blur"
    },
    {
      pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
      message: "手机号必须以1开头且为11位~",
      trigger: "blur"
    }
  ],
  code: [
    {
      required: true,
      message: "验证码是必传内容~",
      trigger: "blur"
    },
    {
      pattern: /^\d{6}$/,
      message: "验证码必须为6位数字",
      trigger: "blur"
    }
  ]
}
