export const AccountAPI = superclass =>
    class extends superclass {
        async selfAccount() {
            const url = this.baseUrl + "accounts/me";
            const contents = await this.get(url);
            return contents;
        }

        async aclAccount() {
            const url = this.baseUrl + "accounts/acl";
            const contents = await this.get(url);
            return contents;
        }

        avatarUrlAccount(username) {
            return this.baseUrl + `accounts/${username}/avatar`;
        }
    };

export default AccountAPI;
