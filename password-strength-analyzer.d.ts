declare function checkPassword(password: string): {
    strength: string;
    suggestion: string[];
};
export default checkPassword;
