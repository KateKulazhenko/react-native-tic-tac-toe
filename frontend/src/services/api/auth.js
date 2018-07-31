export default {
  signupRequest: data => ({
    url: "/auth/sign-up",
    method: "post",
    data,
    headers: {
      Authorization: false
    }
  }),
  signinRequest: data => ({
    url: `/auth/sign-in`,
    method: "post",
    data,
    headers: {
      Authorization: false
    }
  })
};
