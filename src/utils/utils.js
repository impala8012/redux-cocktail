export const checkUserIsAdmin = currentUser => {
    if(!currentUser || !Array.isArray(currentUser.userRoles)) return false
    if(currentUser.userRoles.includes("admin")) return true
    return false
}   

export const pagination = (totalPage) => {
  const page = [];
  for (let i = 1; i <= totalPage; i++) {
    page.push(i);
  }
  return page;
};
