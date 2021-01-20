export const selectCurrentUser = stores => stores.user.currentUser
export const selectUserSignInSuccess = (stores) => stores.user.signInSuccess;
export const selectUserSignUpSuccess = (stores) => stores.user.signUpSuccess;
export const selectUserSignUpError = (stores) => stores.user.signUpError;
export const selectUserSignInError = (stores) => stores.user.signInError;