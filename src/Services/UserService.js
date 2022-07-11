import API from "../Services/api";

export const getCurrentUserId = () => {
    const userid = sessionStorage.getItem("userid");
    if (userid) {
        return userid;
    } else {
        return console.error("User not Logged in");;
    }
}
export const removeUserinfo = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("roles");
    sessionStorage.removeItem("fullName");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("phone");
}

export const updateUserData = (userData) => {
    return new Promise((resolve, reject) => {
        let token = sessionStorage.getItem("token");
        token = token.replace('"', '');
        token = token.replace('"', '');
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        API.put('/User/update', userData, config).then(_res => {
            resolve(_res);
        }).catch(_err => {
            reject(_err);
        });
    })
}
export const updateUserPassword = (userData) => {
    return new Promise((resolve, reject) => {
        let token = sessionStorage.getItem("token");
        token = token.replace('"', '');
        token = token.replace('"', '');
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        API.put('/User/update', userData, config).then(_res => {
            resolve(_res);
        }).catch(_err => {
            reject(_err);
        });
    })
}