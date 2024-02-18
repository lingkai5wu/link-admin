<template>
  <n-form ref="formRef">
    <n-form-item label="手机号" path="phoneNumber">
      <n-input />
    </n-form-item>
    <n-form-item label="图形验证码" path="captchaCode">
      <n-input />
    </n-form-item>
    <n-form-item label="短信验证码" path="smsCode">
      <n-input />
    </n-form-item>
    <n-flex>
      <n-button type="primary" style="width: 100%;">登录</n-button>
    </n-flex>
  </n-form>
</template>
